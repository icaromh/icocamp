/**
 * Solução: 06. Validar Publicação
 * 
 * Cria um middleware de validação e injeta na rota POST.
 */

const express = require('express');
const app = express();

app.use(express.json());

const videos = [
  { id: 1, titulo: 'Aprenda Node em 10 minutos', visualizacoes: 1500 }
];

function validarVideo(req, res, next) {
  if (!req.body.titulo || req.body.titulo.trim() === '') {
    return res.status(400).json({ erro: 'O título do vídeo é obrigatório' });
  }
  next();
}

app.post('/videos', validarVideo, (req, res) => {
  const { titulo, duracao } = req.body;

  const novoVideo = {
    id: videos.length > 0 ? videos[videos.length - 1].id + 1 : 1,
    titulo,
    duracao: duracao || '00:00',
    visualizacoes: 0
  };

  videos.push(novoVideo);

  res.status(201).json(novoVideo);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
