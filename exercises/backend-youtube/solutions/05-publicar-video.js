/**
 * Solução: 05. Publicar Vídeo
 * 
 * Cria uma rota POST /videos que lê dados do req.body e adiciona ao array.
 */

const express = require('express');
const app = express();

// Necessário para fazer o parse do JSON enviado no body
app.use(express.json());

const videos = [
  { id: 1, titulo: 'Aprenda Node em 10 minutos', visualizacoes: 1500 },
  { id: 2, titulo: 'Meu setup de gravação', visualizacoes: 420 },
  { id: 3, titulo: 'Erros que todo dev comete', visualizacoes: 3000 }
];

app.post('/videos', (req, res) => {
  const { titulo, duracao } = req.body;

  const novoVideo = {
    id: videos.length > 0 ? videos[videos.length - 1].id + 1 : 1,
    titulo,
    duracao,
    visualizacoes: 0
  };

  videos.push(novoVideo);

  res.status(201).json(novoVideo);
});

// ... outras rotas (omitidas por brevidade, mas você pode mantê-las se quiser rodar tudo junto)
app.get('/videos', (req, res) => res.json(videos));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
