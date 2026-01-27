# 📚 Bootcamp Marcie — Semana 1

[💻 Learn Javscript](https://www.codecademy.com/learn/introduction-to-javascript)

## JavaScript 1: dados, lógica e leitura de código

Projeto em evolução: **Minha Estante Virtual**

## 🎯 Objetivo da semana

Ao final desta semana, a aluna será capaz de:

- Representar dados do mundo real usando **arrays e objetos**
- Criar **funções** para processar dados
- Utilizar os métodos:
  - `.map`
  - `.filter`
  - `.reduce`
- Ler código JavaScript com mais segurança
- Resolver um problema real **sem interface gráfica**

> Nesta semana, **não há HTML nem CSS**.
> O foco é **pensar como programadora**.

## 🧠 Conceito central da semana

> Programar é **transformar dados de entrada em dados de saída**.

Antes de telas, formulários ou backend, precisamos aprender a:

- organizar informações
- responder perguntas sobre esses dados

## 🧩 Domínio do problema: Minha Estante Virtual

Nesta etapa, a estante existe apenas em JavaScript.

Cada livro será representado como um **objeto** dentro de um **array**.

### Estrutura base de um livro

```js
{
  title: "Dom Casmurro",
  author: "Machado de Assis",
  pages: 256,
  read: true,
  category: "Literatura Brasileira"
}
```

### Estrutura da estante

```js
const books = [
  {
    title: "Dom Casmurro",
    author: "Machado de Assis",
    pages: 256,
    read: true,
    category: "Literatura Brasileira",
  },
  {
    title: "A Hora da Estrela",
    author: "Clarice Lispector",
    pages: 88,
    read: false,
    category: "Literatura Brasileira",
  },
];
```

## 📘 Conteúdos da semana (com intenção pedagógica)

### 1️⃣ Arrays e objetos (revisão aplicada)

- Array → coleção de coisas
- Objeto → uma coisa com propriedades

Exemplo mental:

- **Array** = prateleira
- **Objeto** = livro

### 2️⃣ Funções como “máquinas”

Função:

- recebe dados
- processa
- devolve um resultado

```js
function isRead(book) {
  return book.read === true;
}
```

> Uma função **não deve imprimir**, ela deve **retornar**.

### 3️⃣ `.filter()` — selecionar livros

Usado quando queremos:

- pegar **parte** da estante

```js
const readBooks = books.filter((book) => book.read === true);
```

### 4️⃣ `.map()` — transformar dados

Usado quando queremos:

- mudar o formato da informação

```js
const bookTitles = books.map((book) => book.title);
```

### 5️⃣ `.reduce()` — resumir a estante

Usado quando queremos:

- transformar muitos valores em **um só**

```js
const totalPages = books.reduce((total, book) => {
  return total + book.pages;
}, 0);
```

## 🧪 Exercícios guiados (obrigatórios)

### Exercício 1 — Total de livros

Criar uma função que retorna a quantidade total de livros da estante.

<details>
    <summary>Ver resposta</summary>

```js
function getTotalBooks(books) {
  return books.length;
}
```

</details>

### Exercício 2 — Livros lidos e não lidos

Criar funções que retornam:

- quantidade de livros lidos
- quantidade de livros não lidos

💡 Usar `.filter()` ou `.reduce()`.

### Exercício 3 — Total de páginas

Criar uma função que retorna:

- total de páginas da estante

Obrigatório usar `.reduce()`.

### Exercício 4 — Total de páginas lidas

Criar uma função que:

- considera apenas livros lidos
- soma o total de páginas lidas

## 🏁 Desafio da semana (entrega principal)

### Desafio: Minha Estante Virtual (com métodos + Factory)

Você já estudou bastante sobre **funções e objetos**. Agora o desafio é organizar o código como um **mini-sistema**:

- usar **notação de objeto** (um objeto que “manda” na estante)
- usar **métodos** (em vez de funções soltas)
- usar uma **Factory Function** para padronizar a criação de livros
- pensar como produto: **CRUD** + filtros + estatísticas

Crie um arquivo `bookshelf.js` com as partes abaixo.

#### 1) Factory Function (obrigatório)

Crie `bookFactory` que retorna um objeto:

- `title` (String)
- `author` (String)
- `pages` (Number)
- `category` (String)
- `read` (Boolean, `false` por padrão)

#### 2) Estrutura principal (obrigatório)

Crie um objeto `myBookshelf` com:

- `name` (String) — ex: `"Minha Estante Virtual"`
- `books` (Array) — começa vazio e será preenchido usando a factory

#### 3) Métodos mínimos (obrigatórios)

Implemente **métodos** no objeto `myBookshelf`:

- `addBook(title, author, pages, category, read)` **[CREATE]**: cria via `bookFactory` e adiciona em `books`
- `listAll()` **[READ]**: imprime algo como:
  - `- [x] Dom Casmurro — Machado de Assis (256p) • Literatura Brasileira`
  - `- [ ] A Hora da Estrela — Clarice Lispector (88p) • Literatura Brasileira`
- `markAsRead(title)` **[UPDATE]**: encontra pelo `title` e marca `read = true`
- `removeBook(title)` **[DELETE]**: remove o livro pelo `title`

#### 4) Estatísticas (obrigatórias)

Crie **métodos** (ou **getters**) que retornem:

- total de livros
- total de livros lidos
- total de livros não lidos
- total de páginas
- total de páginas lidas
- (bônus recomendado) `% lido` (ex: `"60% lido"`) — cuidado com estante vazia (evitar `NaN`)

#### 5) Popular dados (obrigatório)

Você deve ter pelo menos **5 livros** na estante, adicionados via `myBookshelf.addBook(...)`.

> Dica: isso é “data seeding” (você prepara dados para testar o programa).

#### 6) Ir além (extras para se desafiar)

Crie pelo menos **3** funcionalidades que **não foram pedidas explicitamente**, por exemplo:

- `toggleRead(title)` (inverte `read`)
- `updateBook(title, patch)` (atualiza `pages`, `category`, etc.)
- `findByTitle(query)` (busca parcial, case-insensitive)
- `filterByAuthor(author)` / `filterByCategory(category)`
- `filterBy(criteriaFn)` (recebe uma função de critério e retorna os livros que passam)
- `getTopAuthors()` (ranking de autores por quantidade de livros)
- `getRandomBook()` (retorna um livro aleatório não lido)

#### 7) Saída no terminal (obrigatório)

No final do arquivo, use `console.log` para mostrar:

- a lista da estante (`listAll()`)
- todas as estatísticas (com frases legíveis)
- pelo menos um exemplo de cada operação: **create, read, update, delete**

#### 8) Testes (obrigatório)

Além de “rodar e ver no console”, você vai criar **testes** para garantir que o programa está correto.

No mesmo arquivo `bookshelf.js`, crie uma função `test()` que:

- cria uma estante “limpa” (sem depender do estado anterior)
- popula com um conjunto pequeno de livros (3–5) via `addBook`
- executa chamadas dos métodos e **verifica os retornos** com asserções

Regras:

- **Sem bibliotecas externas** (nada de Jest agora): você vai criar um `assert` simples
- Se algum teste falhar, o teste deve **mostrar a falha** e/ou **lançar erro**

Checklist mínimo de testes (sugestão):

- `addBook` aumenta o total de livros
- `markAsRead` realmente muda `read` para `true`
- `removeBook` remove e diminui o total
- estatísticas batem com o esperado (total de páginas, lidos/não lidos, páginas lidas)

Você pode usar uma estrutura assim (exemplo de ideia, não copie sem entender):

```js
function assertEqual(actual, expected, label) {
  if (actual !== expected) {
    throw new Error(`${label} | esperado: ${expected} | recebido: ${actual}`);
  }
}

function test() {
  // 1) setup (estante limpa + dados)
  // 2) act (chamar métodos)
  // 3) assert (comparar retornos)
  console.log("✅ All tests passed");
}

test();
```

## ✅ Critérios de conclusão da semana

A semana só é considerada concluída se a aluna consegue:

### ✅ Entrega (código)

- [ ] Entregar o `bookshelf.js` com os itens obrigatórios do desafio implementados
- [ ] Ter uma função `test()` com testes rodando e passando
- [ ] Demonstrar no terminal (com `console.log`) exemplos claros de **Create, Read, Update, Delete**
- [ ] Conseguir alterar/popular a estante sem “quebrar” o restante do programa

### ✅ Explicação (apresentação do programa)

Prepare uma explicação curta (3–8 minutos) cobrindo:

- [ ] **Por que** você escolheu essa implementação (ex: por que usar factory, por que métodos, por que `find` vs `filter`)
- [ ] Quais foram as **partes mais difíceis** e como você destravou (ou o que ainda ficou confuso)
- [ ] O que você **mais gostou** de construir e por quê
- [ ] **Ideias de melhorias futuras** (pelo menos 3): novas features, refactors, validações, organização, etc.

### ✅ Critérios extras (para subir o nível)

Escolha **pelo menos 3** itens abaixo e mostre no código (ou explique a decisão):

- [ ] Lidar com **estante vazia** nas estatísticas (evitar `NaN`, divisões por zero, etc.)
- [ ] Definir uma regra para **títulos duplicados** (permitir? bloquear? como identificar o livro?)
- [ ] Criar um método de **busca** (parcial e case-insensitive) ou um `filterBy(criteriaFn)`
- [ ] Implementar `updateBook(title, patch)` com “patch” parcial (sem precisar passar tudo de novo)
- [ ] Garantir que métodos “de leitura” **retornam dados** (além de imprimir), para facilitar reuso
- [ ] Explicar onde você usou (ou poderia usar) `map`, `filter` e `reduce` e **por que** foi a melhor escolha
- [ ] Criar uma pequena “semente de dados” (array de livros) e popular a estante em loop, em vez de 5 chamadas manuais

## 📎 Material de apoio

- MDN — Array.prototype.reduce
- MDN — Array.prototype.filter
- Codecademy — JavaScript Functions
- DevDocs — JavaScript Array Methods

## 🔍 Observação pedagógica

Nesta semana:

- errar é esperado
- decorar sintaxe **não é objetivo**
- entender o _porquê_ de cada função é o foco

> A interface virá depois.
> Primeiro, aprendemos a **pensar em dados**.

## 📋 Conceitos da Semana

- Pensamento computacional
- Decomposição de problemas
- Variáveis e tipos primitivos
- Objetos e arrays
- Controle de fluxo (if / else)
- Laços (for, while, for...of)
- Funções (declaração, parâmetros, retorno)
- Algoritmos simples (contagem, busca, agregação)
- Métodos de array: map, filter, reduce
- Imutabilidade vs mutabilidade
- Leitura e escrita de dados em estruturas JS
