-- Solução: 01-crud-basico.sql

-- 1. Criar tabela de clientes
CREATE TABLE clients (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT NOT NULL
);

-- 2. Inserir clientes
INSERT INTO clients (name, email)
VALUES
  ('Ana', 'ana@email.com'),
  ('Bruno', 'bruno@email.com'),
  ('Carla', 'carla@email.com');

-- 3. Listar todos os clientes
SELECT * FROM clients;

-- 4. Atualizar email
UPDATE clients
SET email = 'novo@email.com'
WHERE id = 1;

-- 5. Remover cliente
DELETE FROM clients WHERE id = 2;

-- 6. Criar tabela de produtos
CREATE TABLE products (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  price REAL NOT NULL,
  category TEXT NOT NULL
);

-- 7. Inserir produtos
INSERT INTO products (name, price, category)
VALUES
  ('Arroz', 10.5, 'food'),
  ('Feijão', 8.2, 'food'),
  ('Detergente', 3.5, 'cleaning'),
  ('TV', 1999, 'electronics'),
  ('Fone', 199, 'electronics');

-- 8. Filtrar por categoria (string)
SELECT * FROM products
WHERE category = 'food';

-- 9. Contar produtos
SELECT COUNT(*) FROM products
WHERE category = 'electronics';

-- 10. Total da nota fiscal
SELECT SUM(price) FROM products;
