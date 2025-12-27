# Exercício final — Estante virtual (Virtual Bookshelf)

Neste exercício final, você vai modelar uma **estante virtual (Virtual Bookshelf)** para a Marcie.

O foco não é “codar muito”.
O foco é **modelar bem** usando os conceitos do curso:

- Entidade (Entity)
- Coleção (Collection)
- Estado (State)
- Responsabilidade (Responsibility)

Você vai construir um modelo que permita responder perguntas reais como:
- Quantos livros eu tenho?
- Quantos já li?
- Quais estão em andamento?
- Quantos livros tenho por idioma (language) e por categoria (category)?
- Quais livros estão emprestados?

## Regras do exercício

- Todo o código deve estar em inglês
- A explicação pode estar em português (com termos em inglês entre parênteses)
- Você pode usar apenas objetos literais e arrays
- Evite estruturas em matriz/grid (nada de `[[...], [...]]`)
- Priorize clareza da modelagem

## Parte 1 — Identifique as entidades (Entities)

Pense antes de abrir.

### Pergunta
> Quais coisas existem por si só nesse domínio da estante?

<details>
  <summary><strong>Ver sugestão de entidades</strong></summary>

Sugestão de entidades (você pode ajustar):
- **Book**
- **Person** (para empréstimos)
</details>

## Parte 2 — Identifique as coleções (Collections)

### Pergunta
> Quais objetos existem para organizar outros objetos?

<details>
  <summary><strong>Ver sugestão de coleções</strong></summary>

Sugestão de coleções:
- **Bookshelf** (coleção principal)
- **ShelfSection** (um “nicho” ou seção da estante)

A ideia é:
- Bookshelf contém sections
- Section contém books

Isso evita matriz e mantém organização realista.
</details>

## Parte 3 — Modele o Book (Entidade principal)

### Tarefa
Modele um `book` com propriedades que façam sentido para Marcie.

Inclua pelo menos:
- `title`
- `author`
- `category` (ex: "romance", "non_fiction")
- `language` (ex: "pt", "es", "en")
- `totalPages`

Agora a parte mais importante: estado (State) de leitura.

### Pergunta
> Como representar leitura de forma mais realista do que só `isRead`?

<details>
  <summary><strong>Ver sugestão de estado</strong></summary>

Use:
- `readingStatus`: "to_read" | "reading" | "finished"
- `pagesRead`: number

Isso permite:
- progresso
- livros em andamento
- validação simples (ex: pagesRead <= totalPages)
</details>

### Template (preencha)

```js
const book = {
  title: "",
  author: "",
  category: "",
  language: "",
  totalPages: 0,

  readingStatus: "to_read",
  pagesRead: 0
};
```

## Parte 4 — Modele a ShelfSection (Coleção intermediária)

Uma `shelfSection` organiza livros por um critério que faça sentido para Marcie.

Exemplos de nomes de seção:
- "Spanish Romance"
- "TBR"
- "Favorites"
- "Non-fiction"

### Template (preencha)

```js
const shelfSection = {
  name: "",
  books: [],

  addBook(book) {
    // TODO
  },

  getTotalBooks() {
    // TODO
  }
};
```

### Pergunta
> O que pertence à Section e o que pertence ao Book?

<details>
  <summary><strong>Ver dica de responsabilidade</strong></summary>

- A Section não calcula progresso de leitura de um livro específico.
- Ela pode contar livros e filtrar por estado consultando o Book.
</details>

## Parte 5 — Modele a Bookshelf (Coleção principal)

A `bookshelf` contém várias seções.

Ela deve permitir:
- adicionar seções
- adicionar um livro em uma seção específica
- gerar um resumo geral

### Template (preencha)

```js
const bookshelf = {
  ownerName: "Marcie",
  sections: [],

  addSection(section) {
    // TODO
  },

  addBookToSection(book, sectionName) {
    // TODO
  },

  getTotalBooks() {
    // TODO
  }
};
```

## Parte 6 — Desafio extra (opcional): empréstimos (Loans)

Sem complicar demais, você pode representar empréstimos assim:

- `Person` é uma entidade
- Um livro pode ter:
  - `loan`: `null` ou um objeto com `borrowerName` e `loanDate`

### Pergunta
> Esse “loan” deveria viver onde: no Book, na Section ou na Bookshelf?

<details>
  <summary><strong>Ver resposta</strong></summary>

No **Book**.

Porque:
- é um estado (State) do livro
- muda ao longo do tempo
- faz parte da realidade do livro (“este livro está emprestado”)
</details>

### Template opcional

```js
const person = {
  name: ""
};

// Dentro do book:
loan: null
```

## Parte 7 — Checklist final de qualidade

Antes de considerar concluído, verifique:

- Você tem entidades claras (Entities)?
- Suas coleções estão bem separadas (Collections)?
- O estado está no lugar certo (State)?
- As responsabilidades estão naturais (Responsibilities)?
- O nome das propriedades e funções está em inglês?

## Entrega esperada

Você pode entregar como:
- um arquivo `solution.js` com:
  - 2–3 livros de exemplo
  - 2 seções
  - uma estante
  - chamadas de métodos com `console.log` para demonstrar resultados

Ou simplesmente:
- os objetos e métodos modelados (sem executar tudo)

## Próximo passo

No próximo capítulo, você terá uma página com referências (References) para aprofundar esses conceitos.

➡️ [Ir para o próximo capítulo: Referências](./08-references.md)
