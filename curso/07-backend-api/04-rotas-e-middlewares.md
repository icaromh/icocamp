# 📘 Lição 4 — Rotas e Middlewares

## 🎯 Objetivo desta lição

Entender como definir rotas para diferentes recursos e como os middlewares processam as requisições.

---

## O que é uma rota?

Uma rota é a combinação de um **método HTTP** + uma **URL**.

```txt
GET  /livros        → listar todos os livros
POST /livros        → criar um livro
GET  /livros/1      → buscar o livro de id 1
DELETE /livros/1    → remover o livro de id 1
```

No Express, você define rotas assim:

```js
app.get("/livros", (req, res) => { ... });    // GET
app.post("/livros", (req, res) => { ... });   // POST
app.delete("/livros/:id", (req, res) => { ... }); // DELETE
```

---

## O que é um middleware?

Um middleware é uma função que roda **entre** o momento em que a requisição chega e o momento em que a resposta é enviada.

```txt
Requisição chega
      ↓
[middleware 1]  ← ex: lê o corpo JSON
      ↓
[middleware 2]  ← ex: registra no log
      ↓
[sua rota]      ← processa e responde
      ↓
Resposta enviada
```

Middlewares são registrados com `app.use()`.

---

## O middleware mais importante: `express.json()`

Sem esse middleware, o servidor não consegue ler o **corpo** das requisições POST e PUT.

Quando o frontend envia dados com `fetch`:

```js
fetch("/livros", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ titulo: "Beach Read" }),
});
```

O servidor recebe esses dados como texto. O `express.json()` converte esse texto para um objeto JavaScript automaticamente, tornando-o disponível em `req.body`.

**Sem** `express.json()`:

```js
app.post("/livros", (req, res) => {
  console.log(req.body); // → undefined 😱
});
```

**Com** `express.json()`:

```js
app.use(express.json()); // ← registre ANTES das rotas

app.post("/livros", (req, res) => {
  console.log(req.body); // → { titulo: "Beach Read" } ✅
});
```

---

## Parâmetros de rota com `:id`

Para acessar um recurso específico, usamos parâmetros na URL:

```js
app.get("/livros/:id", (req, res) => {
  const id = req.params.id; // pega o valor do :id da URL
  res.json({ mensagem: `Buscando livro ${id}` });
});
```

Teste:

```bash
curl http://localhost:3000/livros/42
# → { "mensagem": "Buscando livro 42" }
```

---

## Query params

Query params são parâmetros passados na URL após o `?`:

```
/livros?lido=true
/livros?categoria=romance
```

```js
app.get("/livros", (req, res) => {
  const { lido, categoria } = req.query;
  res.json({ filtros: { lido, categoria } });
});
```

Teste:

```bash
curl "http://localhost:3000/livros?lido=true&categoria=romance"
# → { "filtros": { "lido": "true", "categoria": "romance" } }
```

---

## Status codes nas respostas

Toda resposta HTTP tem um **status code** que indica o resultado:

```js
// 200 OK — padrão do res.json()
res.json(livros);

// 201 Created — recurso criado com sucesso
res.status(201).json(novoLivro);

// 400 Bad Request — dados inválidos
res.status(400).json({ error: "Título é obrigatório" });

// 404 Not Found — recurso não existe
res.status(404).json({ error: "Livro não encontrado" });

// 500 Internal Server Error — erro no servidor
res.status(500).json({ error: "Erro interno do servidor" });
```

---

## Rota para recursos não encontrados (404 global)

Adicione esta rota **depois de todas as outras** — ela só é acionada se nenhuma rota anterior combinous com a requisição:

```js
app.use((req, res) => {
  res.status(404).json({ error: "Rota não encontrada" });
});
```

---

## Estado atual do `server.js`

```js
import express from "express";

const app = express();
const PORT = 3000;

// Middlewares
app.use(express.json());

// Rotas
app.get("/", (req, res) => {
  res.send("Servidor da Minha Estante Virtual funcionando! 📚");
});

app.get("/status", (req, res) => {
  res.json({ status: "online" });
});

app.get("/livros", (req, res) => {
  res.json([]);
});

app.post("/livros", (req, res) => {
  console.log("Dados recebidos:", req.body);
  res.status(201).json(req.body);
});

// 404 - deve ser sempre a última rota
app.use((req, res) => {
  res.status(404).json({ error: "Rota não encontrada" });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
```

---

## Testando o POST com curl

Para enviar um POST com corpo JSON via curl:

```bash
curl -X POST http://localhost:3000/livros \
  -H "Content-Type: application/json" \
  -d '{"titulo": "Beach Read", "autora": "Emily Henry"}'
```

Resposta esperada:

```json
{ "titulo": "Beach Read", "autora": "Emily Henry" }
```

> **Dica**: Se `curl` com aspas duplas não funcionar no seu sistema, use aspas simples para o JSON ou teste com o [Hoppscotch](https://hoppscotch.io) — é gratuito, roda no browser e não precisa de instalação.

---

## ✍️ Exercício rápido

1. Adicione uma rota `GET /livros/:id` que retorna o `id` recebido
2. Adicione a rota 404 global ao final
3. Teste todas as rotas com curl ou Hoppscotch

---

## Próxima lição

[Lição 5 — CRUD em memória →](./05-crud-em-memoria.md)
