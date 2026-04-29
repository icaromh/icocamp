import express from 'express';
import Database from 'better-sqlite3';

// Cria a conexão com o banco (cria o arquivo estante.db se não existir)
const db = new Database('estante.db');
const app = express();

app.use(express.json());

// Verifica se a tabela já existe; se não, cria.
// Isso é útil para o servidor rodar sozinho de primeira.
db.prepare(`
  CREATE TABLE IF NOT EXISTS livros (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    titulo TEXT NOT NULL,
    autor TEXT,
    paginas INTEGER,
    lido INTEGER DEFAULT 0
  )
`).run();


// 1. Criar um livro (POST)
app.post('/livros', (req, res) => {
  const { titulo, autor, paginas } = req.body;

  if (!titulo) {
    return res.status(400).json({ erro: 'O título é obrigatório.' });
  }

  // Usa ? para evitar SQL Injection
  const info = db.prepare(`
    INSERT INTO livros (titulo, autor, paginas, lido) 
    VALUES (?, ?, ?, 0)
  `).run(titulo, autor, paginas || null);

  res.status(201).json({ id: info.lastInsertRowid, titulo, autor, paginas, lido: 0 });
});

// 2. Listar todos os livros (GET)
app.get('/livros', (req, res) => {
  const livros = db.prepare('SELECT * FROM livros').all();
  res.json(livros);
});

// 3. Buscar um livro específico (GET /:id)
app.get('/livros/:id', (req, res) => {
  const id = req.params.id;
  const livro = db.prepare('SELECT * FROM livros WHERE id = ?').get(id);

  if (!livro) {
    return res.status(404).json({ erro: 'Livro não encontrado.' });
  }

  res.json(livro);
});

// 4. Marcar livro como lido (PATCH)
app.patch('/livros/:id/lido', (req, res) => {
  const id = req.params.id;
  
  // Verifica se o livro existe primeiro
  const livro = db.prepare('SELECT * FROM livros WHERE id = ?').get(id);
  if (!livro) {
    return res.status(404).json({ erro: 'Livro não encontrado.' });
  }

  // Atualiza usando UPDATE
  db.prepare('UPDATE livros SET lido = 1 WHERE id = ?').run(id);
  
  res.json({ mensagem: 'Livro marcado como lido com sucesso.' });
});

// 5. Deletar livro (DELETE)
app.delete('/livros/:id', (req, res) => {
  const id = req.params.id;

  // O run() retorna uma propriedade chamada 'changes' com o número de linhas afetadas.
  // Se for 0, o ID não existia.
  const info = db.prepare('DELETE FROM livros WHERE id = ?').run(id);

  if (info.changes === 0) {
    return res.status(404).json({ erro: 'Livro não encontrado.' });
  }

  res.status(204).send();
});

// Inicia o servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando e conectado ao SQLite na porta ${PORT}`);
});
