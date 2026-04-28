-- Solução: 03-blog-completo.sql

-- 1. Blog: modelagem
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

-- 2. Inserção de dados
INSERT INTO blog_categories (name) VALUES 
  ('technology'), 
  ('lifestyle'), 
  ('food');

INSERT INTO blog_posts (title, content, category_id) VALUES 
  ('Novo Mac lançado', 'Conteúdo aqui', 1),
  ('A.I. na prática', 'Mais texto', 1),
  ('Rotina matinal', 'Acordar cedo', 2),
  ('Receita de bolo', 'Farinha e ovos', 3),
  ('React vs Vue', 'Qual escolher?', 1);

-- 3. Filtrar posts por categoria (string)
SELECT blog_posts.title
FROM blog_posts
JOIN blog_categories ON blog_posts.category_id = blog_categories.id
WHERE blog_categories.name = 'technology';

-- 4. Estatísticas do blog

-- total de posts
SELECT COUNT(*) FROM blog_posts;

-- posts por categoria
SELECT category_id, COUNT(*) AS qtd
FROM blog_posts
GROUP BY category_id;

-- categoria com mais posts
SELECT category_id, COUNT(*) AS total
FROM blog_posts
GROUP BY category_id
ORDER BY total DESC
LIMIT 1;
