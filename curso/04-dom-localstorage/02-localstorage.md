Excelente. Agora que dominamos como capturar as ações do usuário em tempo real, precisamos resolver o problema da **amnésia do navegador**. Sem armazenamento, toda a sua lista de livros do **BookSelf** desaparece assim que você dá um F5 na página.

---

📘 **Módulo: JSON e Web Storage (LocalStorage)**

🎯 **O que vamos aprender?**
Vamos entender como transformar objetos complexos de JavaScript em um formato de intercâmbio de dados (JSON) e como utilizar o "banco de dados" interno do navegador para que seus dados sobrevivam ao fechamento da aba ou do computador.

💡 **Teoria Aplicada**

### 1. O que é JSON (JavaScript Object Notation)?

O JSON é o padrão da indústria para envio e recebimento de dados. Embora se pareça muito com um objeto JavaScript, ele tem regras estritas:

* **Chaves** devem estar entre aspas duplas: `"titulo": "Capitães da Areia"`.
* **Valores** de texto também usam aspas duplas.
* Não aceita funções ou métodos, apenas dados (strings, números, booleanos, arrays e objetos).

**Diferença Crucial:**

* **Objeto JS:** Vive na memória RAM enquanto o script roda. Você acessa propriedades com ponto (`livro.titulo`).
* **JSON:** É uma **string** (texto puro). É o formato que usamos para "empacotar" o objeto e salvá-lo em um arquivo ou banco de dados.

### 2. Métodos de Conversão (A Ponte)

Para transitar entre esses dois mundos, o JavaScript nos dá o objeto global `JSON`:

* **`JSON.stringify(objeto)`**: Pega seu objeto da estante e o "esmaga" em uma string. Essencial para salvar.
* **`JSON.parse(string)`**: Pega aquela string guardada e a "infla" novamente em um objeto JS funcional.

### 3. LocalStorage: O Armário do Navegador

O `localStorage` é uma API que permite armazenar dados de forma persistente. Diferente dos Cookies, ele tem muito mais espaço (cerca de 5MB) e os dados **não expiram**.

**Comandos Principais:**

* `localStorage.setItem('chave', 'valor')`: Guarda um dado.
* `localStorage.getItem('chave')`: Recupera um dado.
* `localStorage.removeItem('chave')`: Deleta um dado específico.
* `localStorage.clear()`: Limpa tudo o que o seu site salvou.

**O "Pulo do Gato":** O LocalStorage **só aceita strings**. Se você tentar salvar um array de objetos diretamente, ele salvará a string `"[object Object]"`, que é inútil. Por isso o JSON é obrigatório aqui.

```javascript
const meusLivros = [
  { id: 1, titulo: "Cem Anos de Solidão", lido: true },
  { id: 2, titulo: "O Alquimista", lido: false }
];

// 1. Converter para String antes de salvar
const listaEmTexto = JSON.stringify(meusLivros);
localStorage.setItem('biblioteca_bookself', listaEmTexto);

// 2. Recuperar e converter de volta para Objeto
const dadosResgatados = localStorage.getItem('biblioteca_bookself');
const listaOriginal = JSON.parse(dadosResgatados);

console.log(listaOriginal[0].titulo); // "Cem Anos de Solidão"
```

---

🎬 **No Cenário da BookTuber**

Imagine que você está preparando o roteiro de uma resenha e o navegador trava. Se você estiver usando o `input` com um evento que salva o rascunho no `localStorage` a cada frase digitada, ao reabrir o site, o JavaScript pode buscar esse rascunho automaticamente. Você não perde nem uma vírgula da sua análise literária.

---

✍️ **Exercícios de Fixação**

**1. Desafio de Conversão**
Crie um objeto chamado `resenhaVideo` com as propriedades: `id`, `tituloVideo` e `tags` (um array de strings).

* Converta esse objeto para JSON e exiba no console.
* Verifique o `typeof` da variável antes e depois da conversão.

**2. Persistência de Preferências**
Crie um botão chamado "Modo Noturno".

* Ao clicar, salve no `localStorage` a chave `tema` com o valor `escuro`.
* Ao recarregar a página, faça o JS verificar se `tema` é igual a `escuro`. Se for, mude a cor de fundo do `body` via JavaScript.

**3. O Banco de Dados da Estante**
Crie uma função `salvarLivro(nome)` que:

1. Busque a lista de livros já existente no `localStorage` (se não existir, comece com um array vazio `[]`).
2. Adicione o novo `nome` ao array.
3. Salve o array atualizado de volta no `localStorage` usando `JSON.stringify`.
*Teste chamando a função no console e verificando a aba "Application" (ou "Armazenamento") do seu navegador.*

----

É fundamental compreender que o LocalStorage é um armazenamento local e isolado, estritamente atrelado ao navegador e ao dispositivo onde os dados foram criados. Isso significa que não existe sincronização automática em nuvem: se você cadastrar seus livros favoritos no Chrome do seu laptop, esses dados não aparecerão se você abrir o BookSelf no Safari do seu celular ou até mesmo em outro navegador no mesmo computador. Para que as informações fossem as mesmas em qualquer lugar, precisaríamos de um banco de dados externo e um sistema de autenticação, mas para o nosso estágio atual, o LocalStorage é a ferramenta ideal para salvar suas preferências pessoais naquele navegador específico de forma rápida e eficiente.
