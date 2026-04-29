## 📝 02. Listar Vídeos

O canal já está de pé, mas agora precisamos listar os vídeos para os nossos inscritos. Vamos usar um array de dados estáticos na memória para simular um banco de dados.

**Dado inicial**

```javascript
const videos = [
  { id: 1, titulo: 'Aprenda Node em 10 minutos', visualizacoes: 1500 },
  { id: 2, titulo: 'Meu setup de gravação', visualizacoes: 420 },
  { id: 3, titulo: 'Erros que todo dev comete', visualizacoes: 3000 }
];
```

**Objetivo**: Criar uma rota `GET /videos` que retorna um array de objetos JSON estático contendo os vídeos do canal.

1. Copie o servidor do exercício anterior.
2. Adicione o array `videos` acima da definição das rotas.
3. Crie uma rota `GET /videos`.
4. Retorne o array de vídeos no formato JSON como resposta.

**Template**

```javascript
const express = require('express');
const app = express();

const videos = [ /* ... */ ];

app.get('/', (req, res) => {
  res.send('Bem-vindo ao meu canal!');
});

// Seu código aqui (Rota GET /videos)

app.listen(3000, () => console.log('Servidor rodando...'));
```

**Saída esperada**

Ao acessar `http://localhost:3000/videos`, você deve receber:
```json
[
  { "id": 1, "titulo": "Aprenda Node em 10 minutos", "visualizacoes": 1500 },
  { "id": 2, "titulo": "Meu setup de gravação", "visualizacoes": 420 },
  { "id": 3, "titulo": "Erros que todo dev comete", "visualizacoes": 3000 }
]
```

<details>
  <summary>🫣 Spoiler</summary>

> 1. Use `app.get('/videos', (req, res) => { ... })`.
> 2. O Express é inteligente: você pode usar `res.json(videos)` ou até mesmo `res.send(videos)` e ele entenderá que é um JSON!

</details>
