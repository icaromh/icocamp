/**
 * Solução: 02. Listar Vídeos
 * 
 * Cria uma rota GET /videos que retorna um JSON com o array em memória.
 */

const express = require('express');
const app = express();

const videos = [
  { id: 1, titulo: 'Aprenda Node em 10 minutos', visualizacoes: 1500 },
  { id: 2, titulo: 'Meu setup de gravação', visualizacoes: 420 },
  { id: 3, titulo: 'Erros que todo dev comete', visualizacoes: 3000 }
];

app.get('/', (req, res) => {
  res.send('Bem-vindo ao meu canal!');
});

app.get('/videos', (req, res) => {
  res.json(videos);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
