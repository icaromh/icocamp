/**
 * Solução: 03. Detalhes do Vídeo
 * 
 * Cria uma rota GET /videos/:id que usa req.params para buscar um elemento do array e lidar com 404.
 */

const express = require('express');
const app = express();

const videos = [
  { id: 1, titulo: 'Aprenda Node em 10 minutos', visualizacoes: 1500 },
  { id: 2, titulo: 'Meu setup de gravação', visualizacoes: 420 },
  { id: 3, titulo: 'Erros que todo dev comete', visualizacoes: 3000 }
];

app.get('/videos', (req, res) => {
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
