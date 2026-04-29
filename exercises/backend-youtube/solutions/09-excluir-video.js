/**
 * Solução: 09. Excluir Vídeo
 * 
 * Cria uma rota DELETE para remover um recurso da memória.
 */

const express = require('express');
const app = express();

const videos = [
  { id: 1, titulo: 'Aprenda Node em 10 minutos', visualizacoes: 1500 }
];

app.delete('/videos/:id', (req, res) => {
  const videoId = Number(req.params.id);
  const index = videos.findIndex((v) => v.id === videoId);

  if (index === -1) {
    return res.status(404).json({ erro: 'Vídeo não encontrado' });
  }

  videos.splice(index, 1);

  res.status(204).send();
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
