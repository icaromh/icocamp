# 📘 Lição 6 — Integrando o Banco de Dados com Express

## 🎯 Objetivo desta lição

Substituir o array global do servidor Express por uma conexão real com o banco de dados SQLite, fazendo as rotas executarem queries SQL.

---

## Como o Javascript "fala" com o Banco?

Você já sabe escrever JavaScript (Express) e já sabe escrever SQL. Mas o Javascript sozinho não sabe o que é um banco de dados. Nós precisamos de um **driver**, uma biblioteca que faz a ponte entre o seu código `.js` e o arquivo `.db`.

Para o SQLite, nós vamos usar uma biblioteca excelente e super rápida chamada `better-sqlite3`. Ela é ideal para nós porque trabalha de forma síncrona, deixando o código mais limpo.

---

## 1. Instalando o better-sqlite3

Abra o terminal na pasta do seu projeto Node.js (onde está o `package.json`) e execute:

```bash
npm install better-sqlite3
```

---

## 2. Conectando no Banco

No seu arquivo `server.js` (ou `app.js`), nós importamos a biblioteca e criamos uma conexão com o arquivo `.db`.

```js
import express from 'express';
import Database from 'better-sqlite3'; // Importando o driver

// Conectando no arquivo estante.db (ele será criado se não existir)
const db = new Database('estante.db'); 
const app = express();
app.use(express.json());

// Nosso velho array vai embora! ADEUS! 👋
// let livros = [];
```

---

## 3. Substituindo as Operações por SQL

Agora vamos ver como nossas rotas mudam. Repare na **Separação de Responsabilidades**: A rota apenas recebe a requisição, e passa os dados para uma Query SQL ser executada no banco.

### GET /livros (Buscando todos)
```js
app.get('/livros', (req, res) => {
  // `prepare` = Prepara a query SQL
  // `all` = Executa e traz TODOS os resultados em formato de array de objetos
  const livros = db.prepare('SELECT * FROM livros').all();
  res.json(livros);
});
```

### POST /livros (Inserindo)
Repare no detalhe importante aqui: Em vez de colocar variáveis misturadas no meio do texto SQL (o que causaria problemas graves de segurança chamados *SQL Injection*), nós colocamos o sinal de interrogação `?` onde os valores devem ir, e passamos os valores de verdade dentro do `run()`.

```js
app.post('/livros', (req, res) => {
  const novoLivro = req.body;
  
  // `run` = Executa a query sem esperar dados de volta (como um INSERT/UPDATE/DELETE)
  // Os `?` protegem o banco de ataques.
  const info = db.prepare(`
    INSERT INTO livros (titulo, autor, paginas) 
    VALUES (?, ?, ?)
  `).run(novoLivro.titulo, novoLivro.autor, novoLivro.paginas);

  res.status(201).json({ id: info.lastInsertRowid, mensagem: "Livro criado!" });
});
```

### GET /livros/:id (Buscando um só)
```js
app.get('/livros/:id', (req, res) => {
  const id = req.params.id;
  // `get` = Executa a query e traz apenas UM resultado (o primeiro que achar)
  const livro = db.prepare('SELECT * FROM livros WHERE id = ?').get(id);

  if (!livro) {
    return res.status(404).json({ mensagem: "Livro não encontrado" });
  }

  res.json(livro);
});
```

### DELETE /livros/:id
```js
app.delete('/livros/:id', (req, res) => {
  const id = req.params.id;
  db.prepare('DELETE FROM livros WHERE id = ?').run(id);
  res.status(204).send();
});
```

---

## ✍️ Mini-exercício

No seu servidor do Módulo 07:
1. Instale o pacote `better-sqlite3`.
2. Delete aquele `let livros = []` do seu código.
3. Tente converter **apenas a rota GET /livros** para usar o `db.prepare('SELECT * FROM livros').all()`.
4. Teste sua api!

Se tudo der certo, parabéns! Seu servidor está agora extraindo informações direto de um sistema de banco de dados real. Você já está pronta para o desafio da semana!

---

## Próxima Etapa
Vá para o **[Desafio da Semana](./desafio.md)** e implemente o seu CRUD completo persistente. Lembre-se de dar uma olhada no **[FAQ](./FAQ.md)** se alguma coisa der errado com a conexão!
