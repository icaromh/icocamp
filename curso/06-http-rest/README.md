# 📚 Bootcamp Marcie — Semana 6

https://www.codecademy.com/learn/asynchronous-javascript

## HTTP, Fetch API e REST: buscando dados fora da aplicação

Projeto em evolução: **Minha Estante Virtual**

## 🎯 Objetivo da semana

Ao final desta semana, a aluna será capaz de:

- Entender o que acontece quando um site “busca dados”
- Compreender o papel do **HTTP** na comunicação web
- Diferenciar os principais **métodos HTTP**
- Consumir dados de uma API usando **Fetch API**
- Trabalhar com código assíncrono (`async / await`)

> Nesta semana, a aplicação passa a conversar com o **mundo externo**.

## 🧠 Conceito central da semana

> A web funciona como uma conversa entre cliente e servidor.

- **Cliente** → navegador
- **Servidor** → outro computador que responde pedidos
- **HTTP** → regras dessa conversa

## 🧠 O que é HTTP?

HTTP significa **HyperText Transfer Protocol**.

É o protocolo usado para:

- pedir dados
- enviar dados
- receber respostas

Toda vez que você acessa um site, o navegador faz uma **requisição HTTP**.

## 🧩 Domínio do problema: dados fora da estante

Até agora, todos os dados:

- estavam no JavaScript
- ou no LocalStorage

Nesta semana:

- os dados vêm de **fora da aplicação**
- a estante aprende a **consumir APIs**

## 📘 Conteúdos da semana

### 1️⃣ Request e Response

Uma comunicação HTTP sempre tem:

```txt
Request (pedido)  →  Server  →  Response (resposta)
```

### 2️⃣ Métodos HTTP (o mínimo necessário)

- **GET** → buscar dados
- **POST** → enviar/criar dados
- **PUT / PATCH** → atualizar dados
- **DELETE** → remover dados

Nesta semana, o foco é **GET**.

📘 Material complementar — HTTP methods e REST
<https://www.codecademy.com/learn/learn-javascript-requests>

### 3️⃣ O que é uma API?

API é uma **interface de comunicação** entre sistemas.

No contexto web:

- a API expõe dados
- o frontend consome esses dados
- tudo via HTTP

### 4️⃣ Fetch API

Buscar dados em JavaScript usando requisições HTTP.

### 5️⃣ Async / Await

Forma mais legível de lidar com código assíncrono.

🎥 Async e Promises — JavaScript
<https://www.youtube.com/watch?v=ZYb_ZU8LNxs>

## 🔄 Fluxo típico ao consumir uma API

```txt
Página carrega
    ↓
JavaScript executa
    ↓
Fetch é disparado
    ↓
Servidor responde
    ↓
Dados são convertidos para JSON
    ↓
Interface é atualizada
```

## 🏁 Desafio da Semana 6 — Busca de livros na Open Library

Nesta semana, você irá criar uma **página de busca de livros** que consome dados de uma **API pública**, integrando tudo o que foi aprendido sobre **HTTP**, **fetch** e **código assíncrono**.

### Requisitos obrigatórios

- Utilizar a **Open Library Search API** para buscar livros por autora
  - URL base:
    `https://openlibrary.org/search.json`
  - O valor digitado no **campo de busca** deve ser usado como parâmetro `q`, permitindo assim que se busque por um título de livro ou nome de autor.
    - Exemplo: `https://openlibrary.org/search.json?q="emily henry"`
    - Exemplo: `https://openlibrary.org/search.json?q="gone girl"`

- Criar uma nova página chamada **`busca.html`**
  - Acessível a partir da Home da aplicação

- A página deve conter:
  - Um **formulário de busca**
  - Uma **lista de resultados** com os títulos encontrados
  - Renderização dinâmica a partir da resposta da API

- Layout simples:
  - Formulário no topo
  - Lista logo abaixo

### Stretch goal (opcional)

- Exibir **“Buscando…”** enquanto a requisição estiver em andamento
- Após concluir a busca, exibir:
  - **“X livros encontrados”** antes da lista

## ✅ Critérios de conclusão

- [ ] Uso correto da API
- [ ] Leitura do valor do input
- [ ] Uso de fetch com async / await
- [ ] Atualização da interface com base no estado da requisição

## 📋 Conceitos da semana

- O que é HTTP
- Request vs response
- Métodos HTTP (GET, POST, PUT, DELETE)
- Status codes
- Headers
- JSON como formato de troca de dados
- O que é uma API REST
- Fetch API
- Promises e async/await
- Tratamento de erros em requisições
- Consumo de APIs externas

## 🧪 Exercícios

Pratique os conceitos da semana com os exercícios abaixo (use APIs reais, sem configuração de servidor):

| # | Dificuldade | Exercício |
|:-:|:-----------:|:----------|
| 1 | 🟢 | [Fetch Básico](../../../exercises/http/01-fetch-basico.md) |
| 2 | 🟡 | [Tratamento de Erros](../../../exercises/http/02-tratamento-de-erros.md) |
| 3 | 🟡 | [Buscando e Filtrando Resultados](../../../exercises/http/03-buscar-e-filtrar.md) |
| 4 | 🟡 | [Requisição POST](../../../exercises/http/04-requisicao-post.md) |
| 5 | 🔴 | [Requisições Paralelas com Promise.all](../../../exercises/http/05-requisicoes-paralelas.md) |
