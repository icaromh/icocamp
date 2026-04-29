import express from "express";

const app = express();
const PORT = 3000;

app.use(express.json());

// Dados em memória com seeding inicial
let livros = [
  { id: 1, titulo: "Beach Read", autora: "Emily Henry", paginas: 361, lido: false, categoria: "romance" },
  { id: 2, titulo: "People We Meet on Vacation", autora: "Emily Henry", paginas: 384, lido: true, categoria: "romance" },
  { id: 3, titulo: "Book Lovers", autora: "Emily Henry", paginas: 400, lido: false, categoria: "romance" },
];
let proximoId = 4;

// READ - todos (com filtros opcionais)
app.get("/livros", (req, res) => {
  let resultado = livros;

  if (req.query.lido !== undefined) {
    const filtroLido = req.query.lido === "true";
    resultado = resultado.filter((l) => l.lido === filtroLido);
  }

  if (req.query.categoria) {
    resultado = resultado.filter((l) => l.categoria === req.query.categoria);
  }

  if (req.query.autora) {
    const autora = req.query.autora.toLowerCase();
    resultado = resultado.filter((l) => l.autora.toLowerCase().includes(autora));
  }

  res.json(resultado);
});

// READ - livro aleatório não lido
app.get("/livros/aleatorio", (req, res) => {
  const naoLidos = livros.filter((l) => !l.lido);

  if (naoLidos.length === 0) {
    return res.status(404).json({ error: "Nenhum livro não lido encontrado" });
  }

  const aleatorio = naoLidos[Math.floor(Math.random() * naoLidos.length)];
  res.json(aleatorio);
});

// READ - um livro por ID
app.get("/livros/:id", (req, res) => {
  const id = Number(req.params.id);
  const livro = livros.find((l) => l.id === id);

  if (!livro) {
    return res.status(404).json({ error: "Livro não encontrado" });
  }

  res.json(livro);
});

// CREATE
app.post("/livros", (req, res) => {
  const { titulo, autora, paginas, lido, categoria } = req.body;

  if (!titulo || !autora) {
    return res.status(400).json({ error: "titulo e autora são obrigatórios" });
  }

  if (paginas !== undefined && typeof paginas !== "number") {
    return res.status(400).json({ error: "paginas deve ser um número" });
  }

  const novoLivro = {
    id: proximoId++,
    titulo,
    autora,
    paginas: paginas || null,
    lido: lido || false,
    categoria: categoria || null,
  };

  livros.push(novoLivro);
  res.status(201).json(novoLivro);
});

// UPDATE
app.patch("/livros/:id", (req, res) => {
  const id = Number(req.params.id);
  const indice = livros.findIndex((l) => l.id === id);

  if (indice === -1) {
    return res.status(404).json({ error: "Livro não encontrado" });
  }

  livros[indice] = { ...livros[indice], ...req.body };
  res.json(livros[indice]);
});

// DELETE
app.delete("/livros/:id", (req, res) => {
  const id = Number(req.params.id);
  const indice = livros.findIndex((l) => l.id === id);

  if (indice === -1) {
    return res.status(404).json({ error: "Livro não encontrado" });
  }

  livros.splice(indice, 1);
  res.status(204).send();
});

// ESTATÍSTICAS
app.get("/estatisticas", (req, res) => {
  const total = livros.length;
  const lidos = livros.filter((l) => l.lido).length;
  const naoLidos = total - lidos;
  const totalPaginas = livros.reduce((acc, l) => acc + (l.paginas || 0), 0);
  const paginasLidas = livros
    .filter((l) => l.lido)
    .reduce((acc, l) => acc + (l.paginas || 0), 0);

  res.json({ total, lidos, naoLidos, totalPaginas, paginasLidas });
});

// 404 global — deve ser sempre a última rota
app.use((req, res) => {
  res.status(404).json({ error: "Rota não encontrada" });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
