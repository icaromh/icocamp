# 📚 Bootcamp Marcie — Semana 4

[📺 What is DOM (5 min)](https://www.youtube.com/watch?v=KShnPYN-voI)
[📺 More on DOM (5 min)](https://www.youtube.com/watch?v=NO5kUNxGIu0)
[📺 Element Selectors (10 min)](https://www.youtube.com/watch?v=FQtjI1PC5Z0)
[📺 Learn Event Listeners (10 min)](https://www.youtube.com/watch?v=g_vXSKbfUiQ)
[📺 Learn Event Listeners (5 min)](https://www.youtube.com/watch?v=i_8NQuEAOmg)
[📺 Localstorage (10 min)](https://www.youtube.com/watch?v=fYTTUBa-lPc)

## JavaScript no Browser: DOM, eventos e LocalStorage

Projeto em evolução: **Minha Estante Virtual**

## 🎯 Objetivo da semana

Ao final desta semana, a aluna será capaz de:

- Entender o papel do **JavaScript no navegador**
- Manipular elementos da página usando o **DOM**
- Reagir a ações do usuário com **eventos**
- Persistir dados no navegador usando **LocalStorage**
- Conectar formulário, dados e interface

> Nesta semana, o JavaScript **finalmente encontra o HTML**.
> O foco é transformar páginas estáticas em **páginas interativas**.

## 🧠 Conceito central da semana

> JavaScript no browser serve para **ligar dados à interface**.

Até agora:

- HTML → estrutura
- CSS → aparência

Agora:

- JS → comportamento

## 🧩 Domínio do problema: estante dinâmica

Nesta semana, a estante passa a:

- cadastrar livros pelo formulário
- salvar livros no navegador
- listar livros automaticamente
- atualizar estatísticas sem recarregar a página

Tudo isso **sem backend ainda**.

## 🧠 O que é o DOM?

DOM significa **Document Object Model**.

É a representação da página HTML como uma **árvore de objetos** que o JavaScript consegue acessar e modificar.

> O navegador transforma o HTML em objetos JavaScript.

## 📘 Conteúdos da semana

### 1️⃣ Selecionando elementos do DOM

```js
document.querySelector("h1");
document.querySelector(".book-card");
document.querySelector("#book-form");
```

### 2️⃣ Lendo e alterando conteúdo

```js
const title = document.querySelector("h1");
title.textContent = "Minha Estante Virtual";
```

### 3️⃣ Criando elementos dinamicamente

```js
const li = document.createElement("li");
li.textContent = "Dom Casmurro";
```

### 4️⃣ Eventos

```js
form.addEventListener("submit", (event) => {
  event.preventDefault();
});
```

## 💾 LocalStorage

```js
localStorage.setItem("books", JSON.stringify(books));
const savedBooks = JSON.parse(localStorage.getItem("books"));
```

## 🔄 Fluxo típico de uma aplicação frontend

Entender o **fluxo da aplicação** é mais importante do que decorar métodos.

### Fluxo geral da aplicação

1. A página carrega
2. JavaScript executa
3. Dados são carregados
4. Interface é renderizada
5. Usuário interage
6. Dados mudam
7. Interface é atualizada

### Fluxo detalhado: cadastro de um livro

```txt
Usuário preenche o formulário
        ↓
Evento "submit" é disparado
        ↓
JavaScript captura os valores dos inputs
        ↓
Cria um objeto livro
        ↓
Adiciona o livro ao array
        ↓
Salva no LocalStorage
        ↓
Atualiza a lista
        ↓
Atualiza estatísticas
```

### Fluxo ao carregar a página

```txt
Página carrega
    ↓
JS executa
    ↓
Busca dados no LocalStorage
    ↓
Renderiza lista
    ↓
Atualiza estatísticas
```

## 🧠 Regra de ouro

> O estado da aplicação vive nos dados, não na tela.

## 🏁 Desafio da semana

Criar uma estante interativa com persistência usando LocalStorage.

## ✅ Critérios de conclusão

- [ ] Explicar DOM
- [ ] Usar eventos
- [ ] Usar LocalStorage
- [ ] Entender fluxo de dados

## 📋 Conceitos da Semana

- O que é o DOM
- Seleção de elementos
- Manipulação de classes e estilos
- Eventos (click, submit, input)
- Prevenção de comportamento padrão
- Renderização dinâmica
- Estado da aplicação no front
- LocalStorage (leitura e escrita)
- Serialização (JSON)
- Sincronização entre estado e UI
