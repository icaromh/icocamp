/**
 * Solução: 04. Buscar Vídeos
 * 
 * Modifica a rota GET /videos para aceitar e processar a query string ?search=...
 */

const express = require('express');
const app = express();

const videos = [
  { id: 1, titulo: 'Aprenda Node em 10 minutos', visualizacoes: 1500 },
  { id: 2, titulo: 'Meu setup de gravação', visualizacoes: 420 },
  { id: 3, titulo: 'Erros que todo dev comete', visualizacoes: 3000 }
];

app.get('/videos', (req, res) => {
  const busca = req.query.search;

  if (busca) {
    const videosFiltrados = videos.filter((v) => 
      v.titulo.toLowerCase().includes(busca.toLowerCase())
    );
    return res.json(videosFiltrados);
  }

  res.json(videos);
});

app.get('/videos/:id', (req, res) => {
  const videoId = Number(req.params.id);
  const videoEncontrado = videos.find((v) => v.id === videoId);

  if (!videoEncontrado) {
    return res.status(404).json({ erro: 'Vídeo não encontrado' });
  }

  res.json(videoEncontrado);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
