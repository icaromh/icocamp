/**
 * Solução: 01. Hello YouTube
 * 
 * Cria um servidor Express simples respondendo na raiz.
 */

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Bem-vindo ao meu canal!');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
