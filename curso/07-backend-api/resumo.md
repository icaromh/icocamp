# Semana 7 – Backend com Node.js e Express (Fundamentos)

## O papel do backend

O backend é responsável por:

- receber requisições do cliente
- aplicar regras de negócio
- acessar dados
- devolver respostas

Ele não cuida da interface, apenas da lógica e dos dados.

---

## O que é Node.js

Node.js é um runtime que permite executar JavaScript fora do navegador.

Características:

- baseado em eventos
- não bloqueante
- ideal para APIs

---

## NPM e gerenciamento de dependências

NPM é o gerenciador de pacotes do Node.

```bash
npm init -y
npm install express
```

Arquivos importantes:

- `package.json`
- `node_modules`

---

## Estrutura básica de um projeto backend

```
/src
  server.js
/package.json
```

---

## Criando um servidor com Express

```js
import express from "express";

const app = express();
app.listen(3000);
```

---

## Middlewares

Middlewares interceptam requisições.

```js
app.use(express.json());
```

Permite ler JSON do body.

---

## Criando rotas

```js
app.get("/livros", (req, res) => {
  res.json([]);
});
```

---

## Rotas com parâmetros

```js
app.get("/livros/:id", (req, res) => {
  const id = req.params.id;
  res.json({ id });
});
```

---

## Recebendo dados com POST

```js
app.post("/livros", (req, res) => {
  const livro = req.body;
  res.status(201).json(livro);
});
```

---

## Organização por responsabilidade

Separar código facilita manutenção.

```
/routes
/controllers
```

---

## Controllers

Controllers concentram lógica das rotas.

```js
export function listarLivros(req, res) {
  res.json([]);
}
```

---

## Rotas usando controllers

```js
router.get("/livros", listarLivros);
```

---

## Status codes na prática

```js
res.status(201).json({ sucesso: true });
```

---

## Tratamento básico de erros

```js
try {
  // lógica
} catch (error) {
  res.status(500).json({ error: "Erro interno" });
}
```

---

## Testando a API

Ferramentas:

- Postman
- Insomnia
- curl

Testar:

- GET
- POST
- parâmetros
- erros

---

## Mini exemplo completo

```js
import express from "express";

const app = express();
app.use(express.json());

let livros = [];

app.get("/livros", (req, res) => {
  res.json(livros);
});

app.post("/livros", (req, res) => {
  livros.push(req.body);
  res.status(201).json(req.body);
});

app.listen(3000);
```

---

## Boas práticas

- Separar responsabilidades
- Validar dados
- Usar status codes corretos
- Código simples e legível

---

## Conexão com a próxima semana

Na próxima semana:

- dados deixam de ser temporários
- entra o banco de dados
- persistência real com PostgreSQL
