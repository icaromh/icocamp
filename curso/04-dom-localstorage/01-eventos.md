📘 **Módulo: Mergulho em Eventos e Comportamentos Assíncronos**

🎯 **O que vamos aprender?**
Entender a anatomia de um evento, como o JavaScript "escuta" o usuário e como controlar o comportamento padrão do navegador para que nossa aplicação Single Page (SPA) funcione corretamente.

💡 **Teoria Aplicada**

### 1. Por que eventos existem no JS?

O JavaScript no navegador é **orientado a eventos**. Diferente de um script que roda do início ao fim e para, uma interface precisa ficar em "estado de espera". Eventos existem para que o código reaja a ações externas (do usuário ou do próprio sistema) sem travar a execução de outras tarefas. Sem eles, o site seria apenas um documento de leitura, sem interatividade.

### 2. O argumento `event` (ou `e`) na Callback

Quando um evento dispara, o navegador envia automaticamente um **objeto** recheado de informações para a função de callback.

* **`event.target`**: O elemento HTML exato que disparou o evento (ex: o botão específico).
* **`event.type`**: O nome do evento (ex: 'click').
* **`event.key`**: Em eventos de teclado, qual tecla foi pressionada.
* **`event.target.value`**: Em eventos de `change` ou `input`, é aqui que pegamos o que o usuário digitou.

```javascript
const inputBusca = document.querySelector('#busca-livro');

inputBusca.addEventListener('input', (event) => {
  console.log(`O usuário está digitando: ${event.target.value}`);
});
```

### 3. Expandindo o Catálogo de Eventos

Além do `click` e `submit`, existem outros essenciais para UX:

* **`change`**: Dispara quando um elemento perde o foco após ser alterado (comum em `<select>`).
* **`mouseover` / `mouseout`**: O antigo "hover". Útil para mostrar detalhes de um livro ao passar o mouse.
* **`scroll`**: Monitora a rolagem da página (ex: para carregar mais livros infinitamente).
* **`keydown` / `keyup`**: Captura teclas (ex: fechar um modal de resenha ao apertar `Esc`).

### 4. O que é o "Default" e o `event.preventDefault()`?

O termo **"Default"** refere-se ao comportamento padrão que o navegador executa para certas tags HTML.

* **No formulário (`<form>`)**: O padrão é enviar os dados para a URL do atributo `action` e **recarregar a página**.
* **No link (`<a>`)**: O padrão é navegar para outra URL.

**Por que evitamos isso no BookSelf?**
Se a página recarregar cada vez que você cadastrar um livro, perderemos o estado das variáveis em memória e a experiência será lenta.

#### Exemplo Prático

**Sem `preventDefault()` (Comportamento de 1995):**

```javascript
form.addEventListener('submit', (e) => {
  // A página vai piscar, recarregar e você perderá o console.log
  console.log("Tentando salvar livro..."); 
});
```

**Com `preventDefault()` (Padrão Moderno):**

```javascript
form.addEventListener('submit', (e) => {
  e.preventDefault(); // "Ei navegador, não recarregue!"
  const titulo = document.querySelector('#titulo').value;
  console.log(`Livro ${titulo} salvo com sucesso via JS!`);
  // A página permanece intacta, permitindo manipulação dinâmica do DOM
});
```

---

🎬 **No Cenário da BookTuber**

Imagine que você está criando um sistema de "Filtro Rápido" na sua estante. Você não quer que o usuário precise clicar em um botão de busca. Você usa o evento **`input`** no campo de busca: a cada letra que você digita, o objeto `event.target.value` captura o texto e o JS já esconde os livros que não correspondem ao título, tudo em tempo real, sem recarregar nada.

---

✍️ **Exercícios de Fixação**

**1. Desafio Rápido: Detetive de Teclas**
Crie um campo de input. Adicione um evento de `keyup`. Sempre que o usuário soltar uma tecla, exiba no console: "Tecla pressionada: [VALOR DA TECLA]".
*Dica: Use `event.key`.*

**2. Dando Vida à Estante: Hover Informativo**
Ao passar o mouse (`mouseover`) sobre um card de livro (pode ser uma `div`), mude a cor de fundo dele. Ao retirar o mouse (`mouseout`), a cor deve voltar ao normal. Isso ajuda o usuário a saber qual livro ele está selecionando na lista de resenhas.

**3. O Impedimento do Link**
Crie um link `<a>` que aponte para o seu canal do YouTube. Use o `addEventListener` de clique e o `preventDefault()`. Em vez de ir para o site, faça o JavaScript exibir um `alert("Link bloqueado para manutenção!")`. Isso demonstra como você assume o controle total da navegação.
