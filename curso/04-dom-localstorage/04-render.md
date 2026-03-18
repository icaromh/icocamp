📘 **Módulo: Renderização Dinâmica (A Arte de Escrever Código com Código)**

🎯 **O que vamos aprender?**
Neste módulo, você vai sair da "escrita manual" do HTML para a "automação". Renderização dinâmica é a capacidade do JavaScript de gerar e inserir elementos na tela em tempo real. No **BookSelf**, isso significa que você não precisa criar uma `<div>` para cada livro novo; você cria uma **lógica** que gera quantos cards forem necessários com base nos seus dados. 📚

💡 **Teoria Aplicada**

### 1. O que é, afinal, Renderizar Conteúdo?

Imagine que o HTML estático é um **livro impresso**: uma vez que as palavras estão no papel, elas não mudam. Já a renderização dinâmica é como um **e-reader** (Kindle): a estrutura (o aparelho e a tela) é a mesma, mas o conteúdo (o texto do livro) muda conforme você escolhe um novo título.

Renderizar é o ato do JavaScript pegar um dado (ex: o título de um livro da Sally Rooney) e transformá-lo em algo que o navegador consiga desenhar (um elemento HTML).

### 2. Como fazer isso? (O Segredo da String Gigante)

Em JavaScript puro, a forma mais comum de renderizar é tratar o HTML como uma **String**. Nós construímos uma frase que contém as tags HTML e dizemos ao navegador: *"Ei, pegue este texto e trate-o como se fosse código HTML!"*.

Para tornar isso poderoso, usamos as **Template Strings** (crases `` ` ``). Elas nos permitem:

* Escrever em várias linhas sem erro.
* **Interpolar**: Colocar variáveis diretamente no meio do texto usando `${variavel}`.

#### Exemplo de Bolso

```javascript
// O dado (o que queremos mostrar)
const livroAtual = "Pessoas Normais";

// O alvo (onde queremos mostrar)
const container = document.querySelector('#status-leitura');

// A renderização (criando o HTML dinamicamente)
container.innerHTML = `<p>📖 Lendo agora: <strong>${livroAtual}</strong></p>`;
```

> 🐈 Dica
> .innerHTML é um [atributo de um Element](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML)

No exemplo abaixo to selecionando uma `div` e mostrando no console o conteúdo HTML interno desse elemento (div)
![alt text](image.png)

---

✍️ **Exercícios de Fixação**

### 1. Exercício Isolado: A Lista de Desejos (Wishlist) 📝

Vamos praticar a lógica de capturar e injetar.

**HTML:**

```html
<div id="setup-wishlist">
    <h2>Minha Wishlist de Romances</h2>
    <input type="text" id="input-livro" placeholder="Ex: Intermezzo - Sally Rooney">
    <button id="btn-adicionar">Adicionar à Lista</button>
    <ul id="lista-desejos"></ul>
</div>
<script src="app.js"></script>
```

**Desafio no JS:**

1. Use o `DOMContentLoaded` para iniciar.
2. Ao clicar no botão, capture o que foi digitado.
3. Use `.innerHTML +=` para adicionar um `<li>` com o nome do livro.
4. **Extra:** Adicione um emoji de coração ❤️ ao lado de cada livro usando a Template String.

### 2. Dando Vida à Estante: Contador Dinâmico 🔢

**O Desafio:**

1. Adicione um `<p>Total: <span id="total">0</span></p>` no seu HTML.
2. Crie uma variável `let contador = 0`.
3. Toda vez que adicionar um livro, some 1 ao contador e atualize o texto do `span` usando `.innerText`.

### 3. Desafio: O Alerta de Campo Vazio ⚠️

**O Desafio:**

1. Antes de adicionar o livro, verifique se o input está vazio.
2. Se estiver vazio, use o `alert()` para avisar: "Por favor, digite o nome de um livro da Sally Rooney!".
