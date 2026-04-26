/**
 * Solução: 08. Dar Like
 * 
 * Cria uma rota PATCH para atualizar parcialmente um recurso.
 */

const express = require('express');
const app = express();

app.use(express.json());

const videos = [
  { id: 1, titulo: 'Aprenda Node em 10 minutos', duracao: '10:00', visualizacoes: 1500 }
];

app.patch('/videos/:id/like', (req, res) => {
  const videoId = Number(req.params.id);
  const video = videos.find((v) => v.id === videoId);

  if (!video) {
    return res.status(404).json({ erro: 'Vídeo não encontrado' });
  }

  video.visualizacoes += 1;

  res.json(video);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
