/**
 * Solução: 07. Editar Título
 * 
 * Cria uma rota PUT para atualizar um vídeo existente.
 */

const express = require('express');
const app = express();

app.use(express.json());

const videos = [
  { id: 1, titulo: 'Aprenda Node em 10 minutos', duracao: '10:00', visualizacoes: 1500 }
];

function validarVideo(req, res, next) {
  if (!req.body.titulo || req.body.titulo.trim() === '') {
    return res.status(400).json({ erro: 'O título do vídeo é obrigatório' });
  }
  next();
}

app.put('/videos/:id', validarVideo, (req, res) => {
  const videoId = Number(req.params.id);
  const video = videos.find((v) => v.id === videoId);

  if (!video) {
    return res.status(404).json({ erro: 'Vídeo não encontrado' });
  }

  video.titulo = req.body.titulo;
  if (req.body.duracao) {
    video.duracao = req.body.duracao;
  }

  res.json(video);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
