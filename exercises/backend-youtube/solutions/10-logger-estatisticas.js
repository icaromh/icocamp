/**
 * Solução: 10. Logger de Estatísticas
 * 
 * Implementa um middleware global de logging.
 */

const express = require('express');
const app = express();

app.use(express.json());

// Middleware Global de Logging
app.use((req, res, next) => {
  const data = new Date().toISOString();
  console.log(`[${data}] ${req.method} ${req.url}`);
  next(); // Essencial!
});

// Mock de rotas
app.get('/videos', (req, res) => {
  res.json([{ id: 1, titulo: 'Aprenda Node em 10 minutos' }]);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
