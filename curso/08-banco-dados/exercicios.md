# 🧪 Prática Guiada — SQL + Node.js + SQLite

**20 exercícios progressivos (10 fáceis · 6 médios · 4 difíceis)**

---

## 📦 Contexto geral

Para todos os exercícios:

- Use **SQLite**
- Banco: `database.db`
- Use o **DB Browser for SQLite** para inspeção visual
- Cada exercício deve ser feito em **duas etapas**:
  1. SQL puro
  2. Função em Node.js executando esse SQL
- Cada exercício deve estar em um **arquivo separado**
- Verifique os resultados com `console.log()`

---

# 🟢 Exercícios fáceis (1–10)

### 1️⃣ Criar tabela de clientes

Crie a tabela `clients` com:

- `id` (PK, auto incremental)
- `name` (TEXT, obrigatório)
- `email` (TEXT, obrigatório)

**Hint:** `INTEGER PRIMARY KEY AUTOINCREMENT`, `TEXT NOT NULL`

---

### 2️⃣ Inserir clientes

Insira **3 clientes diferentes** na tabela `clients`.

---

### 3️⃣ Listar todos os clientes

Busque todos os registros da tabela `clients`.

---

### 4️⃣ Atualizar email de um cliente

Atualize o email de um cliente usando o `id`.

**Hint:** nunca use UPDATE sem WHERE.

---

### 5️⃣ Remover um cliente

Delete um cliente pelo `id`.

---

### 6️⃣ Criar tabela de produtos

Crie a tabela `products` com:

- `id`
- `name`
- `price` (REAL)
- `category` (TEXT)

---

### 7️⃣ Inserir produtos

Insira **5 produtos** com categorias diferentes
(ex: `food`, `cleaning`, `electronics`).

---

### 8️⃣ Filtrar produtos por categoria (string)

Busque apenas produtos da categoria `"food"`.

---

### 9️⃣ Contar produtos por categoria

Conte quantos produtos existem na categoria `"electronics"`.

**Hint:** use `COUNT`.

---

### 🔟 Total gasto em uma nota fiscal

Some o preço de todos os produtos cadastrados.

**Hint:** use `SUM`.

---

# 🟡 Exercícios médios (11–16)

### 1️⃣1️⃣ Criar tabela de categorias

Crie a tabela `categories` com:

- `id`
- `name` (único)

---

### 1️⃣2️⃣ Produtos com categoria por ID

Crie a tabela `products_v2` com:

- `id`
- `name`
- `price`
- `category_id` (FK → categories.id)

---

### 1️⃣3️⃣ Inserir categorias e produtos relacionados

- Insira categorias primeiro
- Insira produtos usando `category_id`

**Hint:** faça `SELECT * FROM categories` para descobrir IDs.

---

### 1️⃣4️⃣ Listar produtos com nome da categoria

Liste:

- nome do produto
- preço
- nome da categoria

**Obrigatório usar JOIN**

---

### 1️⃣5️⃣ Filtrar produtos por categoria (PK)

Busque produtos da categoria `"food"` usando o **id da categoria**, não texto direto.

---

### 1️⃣6️⃣ Total gasto por categoria

Calcule o total gasto por categoria.

Exemplo:

```
food → 45.90
electronics → 399.99
```

**Hint:** use `GROUP BY`.

---

# 🔴 Exercícios difíceis (17–20)

### 1️⃣7️⃣ Blog: modelagem

Crie:

- `blog_categories`
- `blog_posts`

Cada post deve conter:

- título
- conteúdo
- categoria (por ID)

---

### 1️⃣8️⃣ Filtrar posts por categoria (string)

Busque posts da categoria `"technology"` usando o **nome da categoria**.

---

### 1️⃣9️⃣ Filtrar posts por categoria (PK)

Repita o exercício anterior usando apenas o `id` da categoria.

**Hint:** descubra o ID primeiro.

---

### 2️⃣0️⃣ Estatísticas do blog

Crie queries para:

- total de posts
- total de posts por categoria
- categoria com mais posts

---

# 🔁 Segunda etapa obrigatória (Node.js)

Para **cada exercício**:

1. Crie um arquivo Node.js separado
   Ex: `exercise-08.js`
2. Crie uma função que execute a query SQL
3. Trate erros
4. Imprima o resultado com `console.log()`
5. Verifique o efeito no DB Browser

---

## Exemplo de estrutura Node.js

```js
import sqlite3 from "sqlite3";

const db = new sqlite3.Database("database.db");

db.all("SELECT * FROM clients", (err, rows) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(rows);
});
```

---

## 🏁 Objetivo final

Ao concluir todos os exercícios, você será capaz de:

- Pensar dados de forma relacional
- Criar e manipular bancos reais
- Traduzir SQL para código
- Usar banco como parte ativa da aplicação
