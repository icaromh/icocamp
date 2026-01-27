# Desafio: Minha Estante Virtual (com métodos + Factory)

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
