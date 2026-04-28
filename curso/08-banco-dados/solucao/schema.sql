-- Documentação do banco de dados (estante.db)
-- Para executar este arquivo no DBeaver Lite, abra o arquivo e clique em "Execute Script"

-- 1. Criação da Tabela Principal
CREATE TABLE IF NOT EXISTS livros (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  titulo TEXT NOT NULL,
  autor TEXT,
  paginas INTEGER,
  lido INTEGER DEFAULT 0
);

-- 2. (Opcional) Tabela de Categorias para o Desafio Extra
-- CREATE TABLE IF NOT EXISTS categorias (
--   id INTEGER PRIMARY KEY AUTOINCREMENT,
--   nome TEXT NOT NULL UNIQUE
-- );

-- 3. (Opcional) Populando a tabela com dados iniciais de teste
INSERT INTO livros (titulo, autor, paginas, lido) 
VALUES 
  ('Beach Read', 'Emily Henry', 384, 1),
  ('People We Meet on Vacation', 'Emily Henry', 400, 1),
  ('Book Lovers', 'Emily Henry', 384, 0);
