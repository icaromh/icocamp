# Semana 4 – JavaScript no Browser: DOM, Eventos e Estado Local

## O papel do JavaScript no navegador

JavaScript no browser permite **interagir com a página**, reagir às ações do usuário e **manter estado** sincronizado com a interface.

---

## O que é o DOM

DOM (Document Object Model) é a representação do HTML como uma **árvore de objetos** manipulável via JavaScript.

---

## Seleção de elementos

```js
const form = document.querySelector("form");
const inputTitulo = document.querySelector("#titulo");
const checkboxLido = document.querySelector("#lido");
const lista = document.querySelector("#lista-livros");
```

---

## Estado da aplicação

O estado é a fonte da verdade da interface.

```js
let livros = [];
```

---

## Renderização baseada em estado

```js
function render() {
  lista.innerHTML = "";

  livros.forEach((livro, index) => {
    const li = document.createElement("li");
    li.textContent = livro.titulo + (livro.lido ? " ✅" : "");
    li.addEventListener("click", () => removerLivro(index));
    lista.appendChild(li);
  });
}
```

---

## Persistência com LocalStorage

```js
function salvar() {
  localStorage.setItem("livros", JSON.stringify(livros));
}

function carregar() {
  livros = JSON.parse(localStorage.getItem("livros")) || [];
}
```

---

## Manipulação de eventos

```js
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const livro = {
    titulo: inputTitulo.value,
    lido: checkboxLido.checked,
  };

  livros.push(livro);
  salvar();
  render();

  form.reset();
});
```

---

## Remoção de itens

```js
function removerLivro(index) {
  livros.splice(index, 1);
  salvar();
  render();
}
```

---

## Fluxo completo da aplicação

1. Carrega estado do LocalStorage
2. Renderiza a lista
3. Usuário adiciona ou remove livros
4. Estado é atualizado
5. UI é re-renderizada
6. Estado é persistido

---

## HTML de referência

```html
<form>
  <input id="titulo" type="text" placeholder="Título do livro" required />
  <label> <input id="lido" type="checkbox" /> Lido </label>
  <button type="submit">Adicionar</button>
</form>

<ul id="lista-livros"></ul>
```

---

## Inicialização

```js
carregar();
render();
```

---

## Boas práticas reforçadas

- Estado controla a UI
- Nunca manipular DOM sem atualizar estado
- Re-renderizar sempre após mutação
- Separar funções por responsabilidade

---

## Conexão com React

Este exemplo manual antecipa conceitos de React:

- `livros` → estado
- `render()` → JSX
- Eventos → handlers
- Re-render automático no React
