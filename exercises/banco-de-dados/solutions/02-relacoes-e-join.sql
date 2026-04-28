-- Solução: 02-relacoes-e-join.sql

-- 1. Criar tabela de categorias
CREATE TABLE categories (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT UNIQUE NOT NULL
);

-- 2. Produtos com categoria por ID
CREATE TABLE products_v2 (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  price REAL NOT NULL,
  category_id INTEGER,
  FOREIGN KEY (category_id) REFERENCES categories(id)
);

-- 3. Inserir categorias e produtos
INSERT INTO categories (name)
VALUES ('food'), ('electronics');

INSERT INTO products_v2 (name, price, category_id)
VALUES 
  ('Arroz', 10.5, 1),
  ('TV', 1999, 2);

-- 4. Listar produtos com categoria
SELECT
  products_v2.name,
  products_v2.price,
  categories.name AS category
FROM products_v2
JOIN categories ON products_v2.category_id = categories.id;

-- 5. Filtrar por categoria usando PK
SELECT *
FROM products_v2
WHERE category_id = 1;

-- 6. Total gasto por categoria
SELECT
  categories.name,
  SUM(products_v2.price) AS total
FROM products_v2
JOIN categories ON products_v2.category_id = categories.id
GROUP BY categories.name;
