# 📘 Lição 5 — CRUD em Memória

## 🎯 Objetivo desta lição

Implementar as quatro operações básicas (Create, Read, Update, Delete) salvando dados em um array na memória do servidor.

---

## Armazenamento em memória

Nesta semana, os dados ficam em uma variável no próprio servidor.

```js
let livros = []; // todos os livros vivem aqui
```

> **Limitação importante**: quando você para o servidor, todos os dados somem.
> Isso é proposital para esta semana — na semana 8 substituímos esse array por um banco de dados real.
> Mesma lógica, lugar diferente.

---

## IDs automáticos

Para identificar livros individualmente (para buscar, atualizar ou remover), cada livro precisa de um **ID único**. Vamos criar um contador simples:

```js
let proximoId = 1;

function criarLivro(dados) {
  const livro = {
    id: proximoId++,  // usa o id atual e já incrementa para o próximo
    ...dados,         // copia todos os campos recebidos
  };
  return livro;
}
```

---

## CREATE — `POST /livros`

Adiciona um livro à lista e retorna o livro criado com seu ID.

```js
app.post("/livros", (req, res) => {
  const { titulo, autora, paginas, lido } = req.body;

  if (!titulo || !autora) {
    return res.status(400).json({ error: "titulo e autora são obrigatórios" });
  }

  const novoLivro = {
    id: proximoId++,
    titulo,
    autora,
    paginas: paginas || null,
    lido: lido || false,
  };

  livros.push(novoLivro);

  res.status(201).json(novoLivro);
});
```

Teste:

```bash
curl -X POST http://localhost:3000/livros \
  -H "Content-Type: application/json" \
  -d '{"titulo": "Beach Read", "autora": "Emily Henry", "paginas": 361}'
```

---

## READ — `GET /livros`

Retorna todos os livros da lista.

```js
app.get("/livros", (req, res) => {
  res.json(livros);
});
```

Teste após adicionar alguns livros:

```bash
curl http://localhost:3000/livros
```

---

## READ — `GET /livros/:id`

Busca um livro específico pelo ID.

```js
app.get("/livros/:id", (req, res) => {
  const id = Number(req.params.id); // params chegam como string, converta para número
  const livro = livros.find((l) => l.id === id);

  if (!livro) {
    return res.status(404).json({ error: "Livro não encontrado" });
  }

  res.json(livro);
});
```

Teste:

```bash
curl http://localhost:3000/livros/1
```

---

## UPDATE — `PATCH /livros/:id`

Atualiza campos específicos de um livro existente.

```js
app.patch("/livros/:id", (req, res) => {
  const id = Number(req.params.id);
  const indice = livros.findIndex((l) => l.id === id);

  if (indice === -1) {
    return res.status(404).json({ error: "Livro não encontrado" });
  }

  // Mescla os dados existentes com os novos dados
  livros[indice] = { ...livros[indice], ...req.body };

  res.json(livros[indice]);
});
```

Teste (marcar livro como lido):

```bash
curl -X PATCH http://localhost:3000/livros/1 \
  -H "Content-Type: application/json" \
  -d '{"lido": true}'
```

---

## DELETE — `DELETE /livros/:id`

Remove um livro da lista pelo ID.

```js
app.delete("/livros/:id", (req, res) => {
  const id = Number(req.params.id);
  const indice = livros.findIndex((l) => l.id === id);

  if (indice === -1) {
    return res.status(404).json({ error: "Livro não encontrado" });
  }

  livros.splice(indice, 1); // remove 1 elemento no índice encontrado

  res.status(204).send(); // 204 No Content — sucesso sem corpo de resposta
});
```

Teste:

```bash
curl -X DELETE http://localhost:3000/livros/1
```

---

## Servidor completo

Juntando tudo em um único `server.js`:

```js
import express from "express";

const app = express();
const PORT = 3000;

app.use(express.json());

// Dados em memória
let livros = [];
let proximoId = 1;

// CREATE
app.post("/livros", (req, res) => {
  const { titulo, autora, paginas, lido } = req.body;

  if (!titulo || !autora) {
    return res.status(400).json({ error: "titulo e autora são obrigatórios" });
  }

  const novoLivro = {
    id: proximoId++,
    titulo,
    autora,
    paginas: paginas || null,
    lido: lido || false,
  };

  livros.push(novoLivro);
  res.status(201).json(novoLivro);
});

// READ - todos
app.get("/livros", (req, res) => {
  res.json(livros);
});

// READ - um
app.get("/livros/:id", (req, res) => {
  const id = Number(req.params.id);
  const livro = livros.find((l) => l.id === id);

  if (!livro) {
    return res.status(404).json({ error: "Livro não encontrado" });
  }

  res.json(livro);
});

// UPDATE
app.patch("/livros/:id", (req, res) => {
  const id = Number(req.params.id);
  const indice = livros.findIndex((l) => l.id === id);

  if (indice === -1) {
    return res.status(404).json({ error: "Livro não encontrado" });
  }

  livros[indice] = { ...livros[indice], ...req.body };
  res.json(livros[indice]);
});

// DELETE
app.delete("/livros/:id", (req, res) => {
  const id = Number(req.params.id);
  const indice = livros.findIndex((l) => l.id === id);

  if (indice === -1) {
    return res.status(404).json({ error: "Livro não encontrado" });
  }

  livros.splice(indice, 1);
  res.status(204).send();
});

// 404 global
app.use((req, res) => {
  res.status(404).json({ error: "Rota não encontrada" });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
```

---

## Testando com Hoppscotch

[Hoppscotch](https://hoppscotch.io) é uma ferramenta gratuita que roda no browser para testar APIs.

Sequência de testes recomendada:

1. `POST /livros` — criar 3 livros da Emily Henry
2. `GET /livros` — verificar que os 3 aparecem
3. `GET /livros/1` — buscar o primeiro
4. `PATCH /livros/1` — marcar o primeiro como lido
5. `GET /livros/1` — confirmar a atualização
6. `DELETE /livros/2` — remover o segundo
7. `GET /livros` — confirmar que ficaram apenas 2
8. `GET /livros/99` — verificar o 404

---

## Fluxo de dados desta semana

```txt
Frontend (browser)              Servidor (Node.js)
──────────────────              ──────────────────
fetch POST /livros  ──────────→ express.json() lê o body
    ↑                           rota POST recebe req.body
    │                           cria o livro com ID
    │                           adiciona ao array livros[]
    └─── res.status(201).json(novoLivro) ←───────────
```

---

## ✍️ Exercício rápido

Antes do desafio, teste manualmente o servidor completo:

1. Inicie o servidor com `npm run dev`
2. Crie 3 livros da Emily Henry via POST
3. Liste todos com GET
4. Marque um como lido com PATCH
5. Delete outro com DELETE
6. Liste novamente e confirme o estado final

---

## Próximo passo

[Desafio da Semana →](./desafio.md)
