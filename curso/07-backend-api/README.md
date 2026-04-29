# 📚 Bootcamp Marcie — Semana 7

[📺 Node.js Explained in 100 Seconds](https://www.youtube.com/watch?v=ENrzD9HAZK4)
[📺 Learn Express JS in 35 Minutes](https://www.youtube.com/watch?v=SccSCuHhOw0)
[📺 Codecademy — Learn Node.js](https://www.codecademy.com/learn/learn-node-js)

> 💬 Ficou travada? Consulte o **[FAQ](./FAQ.md)** com os erros e dúvidas mais comuns antes de pedir ajuda.

## Backend com Node.js e Express: o servidor da Minha Estante Virtual

Projeto em evolução: **Minha Estante Virtual**

## 🎯 Objetivo da semana

Ao final desta semana, a aluna será capaz de:

- Entender o que é um **servidor** e como ele diferente do browser
- Configurar um projeto Node.js do zero com **npm**
- Criar um servidor HTTP com **Express**
- Definir **rotas** GET e POST
- Receber e responder com **JSON**
- Salvar dados **em memória** durante a execução do servidor
- Testar a API com **curl** ou **Hoppscotch**

> Nesta semana, o JavaScript sai do navegador e vai para o servidor.
> Você vai criar a "cozinha" da aplicação — a parte que o usuário nunca vê, mas que faz tudo funcionar.

## 🧠 Conceito central da semana

> O frontend pede. O backend responde.

Até agora toda a lógica vivia no browser, em arquivos `.js` ou `.html`.
Nesta semana criamos um **programa separado**, que roda no terminal e responde a requisições HTTP.

## 🧩 Domínio do problema: API da estante

Nesta semana, a estante passa a ter um **backend próprio**:

- `GET /livros` → retorna a lista de livros
- `POST /livros` → adiciona um livro à lista
- `GET /livros/:id` → retorna um livro específico
- `DELETE /livros/:id` → remove um livro da lista

Os dados são salvos **em memória** (um array no servidor). Na semana 8, isso será substituído por um banco de dados real.

---

## 📘 Conteúdos da semana (passo a passo)

### 1️⃣ O que é Node.js?

[Lição 1 →](./01-o-que-e-node.md)

Node.js permite executar JavaScript **fora do browser**, diretamente no terminal ou em um servidor.

```txt
Browser          Node.js
──────────────   ──────────────
Roda no Chrome   Roda no terminal
Acessa o DOM     Acessa o sistema de arquivos
window, fetch    process, fs, http
```

### 2️⃣ Configurando o projeto

[Lição 2 →](./02-configurando-projeto.md)

Criar a estrutura de pastas, inicializar o npm e instalar o Express.

### 3️⃣ Criando o servidor Express

[Lição 3 →](./03-servidor-express.md)

O primeiro servidor que responde a requisições HTTP.

### 4️⃣ Rotas e middlewares

[Lição 4 →](./04-rotas-e-middlewares.md)

Como definir endpoints e processar JSON.

### 5️⃣ CRUD em memória

[Lição 5 →](./05-crud-em-memoria.md)

Implementar GET, POST, e DELETE com dados salvos em um array.

---

## 🏁 Desafio da semana

[Desafio →](./desafio.md)

Construir a API completa da Minha Estante Virtual com todas as rotas do CRUD.

## ✅ Critérios de conclusão

- [ ] Explicar a diferença entre Node.js e o browser
- [ ] Criar um servidor Express do zero (sem copiar e colar)
- [ ] Testar `GET /livros` e `POST /livros` com uma ferramenta de testes de API
- [ ] Conseguir adicionar e listar livros via requisições HTTP

## 📋 Conceitos da Semana

- O que é Node.js
- Runtime vs browser
- NPM e gerenciamento de dependências
- Estrutura de um projeto backend
- Express.js
- Criação de servidor HTTP
- Rotas
- Middlewares
- Request body e query params
- Respostas JSON
- Organização básica do backend
