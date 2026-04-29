# 📘 Lição 3 — Criando o servidor Express

## 🎯 Objetivo desta lição

Escrever o primeiro servidor que realmente responde a requisições HTTP.

---

## O servidor mais simples possível

Abra o `server.js` e escreva:

```js
import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Servidor da Minha Estante Virtual funcionando! 📚");
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
```

Agora execute no terminal:

```bash
npm run dev
```

Abra o browser em `http://localhost:3000`. Você verá a mensagem.

> **O que aconteceu?**
> O Node.js está rodando um programa que fica "escutando" na porta 3000.
> Quando você abre o browser nessa URL, o browser faz uma requisição GET.
> O servidor recebe, processa a rota `/` e responde com o texto.

---

## Destrinchando o código linha por linha

```js
import express from "express";
```
Importa a biblioteca Express que instalamos com npm.

```js
const app = express();
```
Cria a aplicação Express. O `app` é o objeto principal — nele registramos rotas, middlewares, etc.

```js
const PORT = 3000;
```
A porta onde o servidor vai "escutar". Portas comuns para desenvolvimento: `3000`, `8080`, `4000`. O browser usa a porta `80` por padrão (que você não precisa digitar na URL).

```js
app.get("/", (req, res) => {
  res.send("...");
});
```
Define uma **rota**: quando alguém fizer um `GET` para `/`, executa essa função.

- `req` (request) → informações da requisição que chegou
- `res` (response) → objeto usado para enviar a resposta

```js
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
```
Inicia o servidor na porta definida. O callback é executado quando o servidor estiver pronto.

---

## Testando sem o browser — com curl

O terminal também pode fazer requisições HTTP. O `curl` é uma ferramenta de linha de comando para isso.

**Abra um segundo terminal** (deixe o servidor rodando no primeiro) e rode:

```bash
curl http://localhost:3000
```

Você verá a mesma resposta que o browser mostrou.

> **Por que testar com curl?** Porque APIs são usadas por código, não só por browsers. Testar via terminal simula como outros programas consomem a API.

---

## Adicionando uma rota que retorna JSON

Servidores de API respondem com **JSON**, não com texto simples. Vamos adicionar uma rota que retorna um objeto:

```js
import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Servidor da Minha Estante Virtual funcionando! 📚");
});

app.get("/status", (req, res) => {
  res.json({
    status: "online",
    projeto: "Minha Estante Virtual",
    versao: "1.0.0",
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
```

Teste:

```bash
curl http://localhost:3000/status
```

Resposta:

```json
{
  "status": "online",
  "projeto": "Minha Estante Virtual",
  "versao": "1.0.0"
}
```

---

## `res.send()` vs `res.json()`

| Método | Quando usar |
|--------|-------------|
| `res.send("texto")` | Responder com texto simples ou HTML |
| `res.json({ ... })` | Responder com JSON (o mais comum em APIs) |

O `res.json()` automaticamente define o header `Content-Type: application/json` para você.

---

## Como o `--watch` funciona

Quando você usa `npm run dev` (que roda `node --watch server.js`), o Node.js monitora o arquivo `server.js`. A cada salvamento, ele reinicia o servidor automaticamente.

Isso significa que enquanto você está desenvolvendo, **não precisa ficar parando e reiniciando manualmente**.

> Se estiver usando Node.js abaixo de v18, pode usar o `nodemon`:
> ```bash
> npm install --save-dev nodemon
> ```
> E no `package.json`: `"dev": "nodemon server.js"`

---

## ✍️ Exercício rápido

1. Adicione uma rota `GET /sobre` que retorna um JSON com seu nome e a data de hoje
2. Teste com curl ou abrindo no browser
3. Verifique que o servidor reinicia automaticamente quando você salva o arquivo

---

## Próxima lição

[Lição 4 — Rotas e middlewares →](./04-rotas-e-middlewares.md)
