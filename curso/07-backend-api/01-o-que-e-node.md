# 📘 Lição 1 — O que é Node.js e por que ele existe

## 🎯 Objetivo desta lição

Entender **o que muda** quando o JavaScript sai do browser e vai para o servidor.

---

## O problema que o Node.js resolve

Antes do Node.js (criado em 2009), servidores web eram escritos em linguagens como Java, PHP ou Ruby. Se você queria fazer um site interativo completo, precisava aprender **duas linguagens**: JavaScript para o frontend, e outra para o backend.

O Node.js mudou isso: ele permite usar **o mesmo JavaScript** que você já conhece para rodar código no servidor.

---

## O que é um "runtime"?

O JavaScript precisa de um ambiente para ser executado. Ele não sabe sozinho o que fazer — precisa de alguém que interprete o código.

- No **browser**, esse ambiente é o Chrome (V8 engine) + APIs do navegador (`window`, `document`, `fetch`)
- No **Node.js**, esse ambiente é o V8 engine + APIs do sistema operacional (`fs`, `http`, `process`)

```txt
Mesmo JavaScript. Ambientes diferentes. Capacidades diferentes.
```

---

## Browser vs Node.js na prática

| Browser | Node.js |
|---------|---------|
| Roda código que o usuário vê | Roda código que o usuário nunca vê |
| Acessa o DOM (HTML) | Acessa o sistema de arquivos |
| `window`, `document`, `localStorage` | `process`, `fs`, `path` |
| `fetch` para buscar dados | `http` para receber requisições |
| Controlado pelo usuário | Controlado pelo desenvolvedor |

---

## O que é um servidor?

Um servidor é simplesmente um **programa que fica esperando requisições** e devolve respostas.

```txt
Cliente (browser/app)           Servidor (Node.js)
─────────────────────           ──────────────────
                   ── GET /livros ──→
                   ←── JSON com livros ──
```

Quando você acessa um site, seu browser envia uma requisição. O servidor recebe, processa e responde com HTML, JSON, imagem — o que for necessário.

Com Node.js, você é a pessoa que **escreve esse servidor**.

---

## Verificando se o Node.js está instalado

Abra o terminal e rode:

```bash
node --version
```

Se aparecer algo como `v20.11.0`, está instalado. Se der erro, baixe em [nodejs.org](https://nodejs.org) e instale a versão **LTS** (Long Term Support — mais estável).

---

## Rodando JavaScript no terminal com Node.js

Crie um arquivo `ola.js`:

```js
console.log("Olá, servidor!");
console.log("Estou rodando no Node.js, não no browser.");
```

E execute no terminal:

```bash
node ola.js
```

Resultado:

```
Olá, servidor!
Estou rodando no Node.js, não no browser.
```

> **Percebeu?** Não tem HTML, não tem browser. O código roda direto no terminal.

---

## O que NÃO funciona no Node.js

Algumas coisas que existem no browser não existem no Node.js:

```js
// ❌ Isso não funciona no Node.js — DOM não existe aqui
document.querySelector("h1");
window.localStorage.setItem("chave", "valor");
```

E algumas coisas do Node.js não funcionam no browser:

```js
// ❌ Isso não funciona no browser — sistema de arquivos não existe aqui
const fs = require("fs");
fs.writeFileSync("arquivo.txt", "conteúdo");
```

---

## ✍️ Exercício rápido

1. Verifique a versão do Node.js instalada no seu computador
2. Crie um arquivo `teste.js` e imprima seu nome e a data de hoje com `console.log`
3. Execute com `node teste.js`

---

## Próxima lição

[Lição 2 — Configurando o projeto →](./02-configurando-projeto.md)
