Compreendido. Vamos resgatar a clareza e o foco do **Exercício Isolado**, garantindo que ele seja o degrau perfeito para você sair do HTML estático e entrar no mundo da renderização dinâmica.

Aqui está a estrutura da nossa aula focada em transformar sua lista de desejos em algo vivo:

---

📘 **Módulo: Renderização Dinâmica e o "Nascimento" da Estante**

🎯 **O que vamos aprender?**
Até agora, seus livros estão "impressos" no HTML. Vamos aprender a criar um "espaço reservado" na página e usar o JavaScript para injetar conteúdo lá dentro. Isso é o que permite que sua lista cresça conforme você lê novos livros, sem precisar mexer no código-fonte do site.

💡 **Teoria Aplicada**

### A Ponte: JS → HTML

Para renderizar algo, precisamos de três passos fundamentais:

1. **O Alvo:** Um elemento no HTML que servirá de container (ex: uma `div` ou `ul` vazia).
2. **O Template:** Uma **Template String** que define como o dado deve aparecer (ex: `<li>${livro}</li>`).
3. **A Injeção:** O uso do `.innerHTML` para "escrever" o template dentro do alvo.

**O Ciclo de Inicialização:**
Como o seu arquivo de script está separado, usamos o `DOMContentLoaded`.

DOMContentLoaded: Garante que o script rode apenas após o HTML estar carregado.

---

🎬 **No Cenário da BookTuber**

Imagine que você está criando uma seção no seu canal chamada **"Próximas Leituras da Sally Rooney"**. Em vez de editar o seu site toda vez que comprar um livro novo, você terá um pequeno sistema onde digita o nome e ele aparece na lista instantaneamente. É o primeiro passo para criar o seu próprio banco de dados literário.

---

✍️ **Exercícios de Fixação**

### 1. Exercício Isolado: A Lista de Desejos (Wishlist)

Vamos praticar a lógica pura sem o peso do projeto completo. Copie o código abaixo em arquivos novos (`index.html` e `app.js`).

**HTML (index.html):**

```html
<div id="setup-wishlist">
    <h2>Minha Wishlist de Romances</h2>
    <input type="text" id="input-livro" placeholder="Ex: Intermezzo - Sally Rooney">
    <button id="btn-adicionar">Adicionar à Lista</button>
    
    <ul id="lista-desejos">
        </ul>
</div>
<script src="app.js"></script>
```

**Seu Desafio no JS (app.js):**

1. Escute o evento `DOMContentLoaded`.
2. Dentro dele, selecione o botão, o input e a lista (`<ul>`).
3. Adicione um evento de `click` ao botão que:
   - Capture o `value` do input.
   - Use `.innerHTML +=` para adicionar uma `<li>` contendo o nome do livro dentro da `<ul>`.
   - Limpe o campo de texto após adicionar.

---

### 2. Dando Vida à Estante: O Contador Dinâmico

Agora que você já consegue adicionar itens, vamos monitorar o tamanho da sua coleção.

**O Desafio:**

1. No seu HTML, adicione um parágrafo: `<p>Você tem <span id="total">0</span> livros na lista.</p>`.
2. No seu JavaScript, crie uma variável global `let contador = 0;`.
3. Toda vez que o botão for clicado e um livro for adicionado, aumente o `contador` em 1 e atualize o texto do `span` com o novo valor.

---

### 3. Desafio Realista: Impedindo Entradas Vazias

Ninguém gosta de uma lista de desejos com itens em branco.
**O Desafio:**
No seu código de adicionar livros, coloque uma condição (`if`): o livro só deve ser adicionado à lista e ao contador se o valor do input **não** estiver vazio.
*Dica: Use `input.value.trim() !== ""` para verificar.*

---

**O que acha de começarmos por esse exercício isolado da Wishlist? Se você conseguir fazer o nome do livro aparecer na lista ao clicar no botão, já terá dominado 70% da lógica do BookSelf!**
