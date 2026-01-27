# ✅ Gabarito Comentado — Exercícios SQL + Node.js + SQLite

Este gabarito mostra **uma possível solução** para cada exercício.
Outras soluções corretas são possíveis.

⚠️ **Importante**

- Leia os comentários
- Entenda o _porquê_ da query
- Não copie sem compreender

---

# 🟢 Exercícios fáceis

## 1️⃣ Criar tabela de clientes

```sql
CREATE TABLE clients (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT NOT NULL
);
```

**Comentário:**
`AUTOINCREMENT` garante IDs únicos.
`NOT NULL` força dados obrigatórios.

---

## 2️⃣ Inserir clientes

```sql
INSERT INTO clients (name, email)
VALUES
  ('Ana', 'ana@email.com'),
  ('Bruno', 'bruno@email.com'),
  ('Carla', 'carla@email.com');
```

---

## 3️⃣ Listar todos os clientes

```sql
SELECT * FROM clients;
```

---

## 4️⃣ Atualizar email

```sql
UPDATE clients
SET email = 'novo@email.com'
WHERE id = 1;
```

**Comentário:**
`WHERE` evita alterar todos os registros.

---

## 5️⃣ Remover cliente

```sql
DELETE FROM clients WHERE id = 2;
```

---

## 6️⃣ Criar tabela de produtos

```sql
CREATE TABLE products (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  price REAL NOT NULL,
  category TEXT NOT NULL
);
```

---

## 7️⃣ Inserir produtos

```sql
INSERT INTO products (name, price, category)
VALUES
  ('Arroz', 10.5, 'food'),
  ('Feijão', 8.2, 'food'),
  ('Detergente', 3.5, 'cleaning'),
  ('TV', 1999, 'electronics'),
  ('Fone', 199, 'electronics');
```

---

## 8️⃣ Filtrar por categoria (string)

```sql
SELECT * FROM products
WHERE category = 'food';
```

---

## 9️⃣ Contar produtos

```sql
SELECT COUNT(*) FROM products
WHERE category = 'electronics';
```

---

## 🔟 Total da nota fiscal

```sql
SELECT SUM(price) FROM products;
```

---

# 🟡 Exercícios médios

## 1️⃣1️⃣ Criar categorias

```sql
CREATE TABLE categories (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT UNIQUE NOT NULL
);
```

---

## 1️⃣2️⃣ Produtos com categoria por ID

```sql
CREATE TABLE products_v2 (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  price REAL NOT NULL,
  category_id INTEGER,
  FOREIGN KEY (category_id) REFERENCES categories(id)
);
```

---

## 1️⃣3️⃣ Inserir categorias e produtos

```sql
INSERT INTO categories (name)
VALUES ('food'), ('electronics');

INSERT INTO products_v2 (name, price, category_id)
VALUES ('Arroz', 10.5, 1),
       ('TV', 1999, 2);
```

---

## 1️⃣4️⃣ Listar produtos com categoria

```sql
SELECT
  products_v2.name,
  products_v2.price,
  categories.name AS category
FROM products_v2
JOIN categories ON products_v2.category_id = categories.id;
```

---

## 1️⃣5️⃣ Filtrar por categoria usando PK

```sql
SELECT *
FROM products_v2
WHERE category_id = 1;
```

---

## 1️⃣6️⃣ Total gasto por categoria

```sql
SELECT
  categories.name,
  SUM(products_v2.price) AS total
FROM products_v2
JOIN categories ON products_v2.category_id = categories.id
GROUP BY categories.name;
```

---

# 🔴 Exercícios difíceis

## 1️⃣7️⃣ Blog: modelagem

```sql
CREATE TABLE blog_categories (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL
);

CREATE TABLE blog_posts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  category_id INTEGER,
  FOREIGN KEY (category_id) REFERENCES blog_categories(id)
);
```

---

## 1️⃣8️⃣ Filtrar posts por categoria (string)

```sql
SELECT blog_posts.title
FROM blog_posts
JOIN blog_categories
  ON blog_posts.category_id = blog_categories.id
WHERE blog_categories.name = 'technology';
```

---

## 1️⃣9️⃣ Filtrar posts por categoria (PK)

```sql
SELECT * FROM blog_posts
WHERE category_id = 1;
```

---

## 2️⃣0️⃣ Estatísticas do blog

```sql
-- total de posts
SELECT COUNT(*) FROM blog_posts;

-- posts por categoria
SELECT category_id, COUNT(*)
FROM blog_posts
GROUP BY category_id;

-- categoria com mais posts
SELECT category_id, COUNT(*) AS total
FROM blog_posts
GROUP BY category_id
ORDER BY total DESC
LIMIT 1;
```

---

# 🔁 Exemplo Node.js (qualquer exercício)

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

## 🎓 Observação final

Se você:

- entendeu cada query
- consegue explicar o uso de WHERE, JOIN e GROUP BY
- consegue transformar SQL em código

Então você **dominou a base de bancos relacionais**.
