## 📝 04. Buscar Vídeos

Com o canal crescendo, nossos inscritos precisam de uma forma de pesquisar vídeos. Para isso, vamos utilizar *Query Params* na nossa rota de listagem (`/videos`).

**Dado inicial**

```javascript
// Mesmo array do exercício anterior
```

**Objetivo**: Utilizar *Query Params* (`req.query.search`) na rota `GET /videos` para filtrar a lista de vídeos pelo título.

1. Modifique a sua rota `GET /videos`.
2. Verifique se existe um parâmetro de busca chamado `search` na URL (`req.query.search`).
3. Se existir, filtre o array `videos` retornando apenas os vídeos cujo título contenha a palavra buscada (dica: use `.toLowerCase()` e `.includes()`). Retorne os vídeos filtrados.
4. Se o parâmetro não existir, retorne todos os vídeos como antes.

**Template**

```javascript
app.get('/videos', (req, res) => {
  // 1. Pegar o query param 'search'
  // 2. Se existir, filtrar o array e retornar
  // 3. Se não existir, retornar o array completo
});
```

**Saída esperada**

Ao acessar `http://localhost:3000/videos?search=node`:
```json
[
  { "id": 1, "titulo": "Aprenda Node em 10 minutos", "visualizacoes": 1500 }
]
```

Ao acessar `http://localhost:3000/videos` (sem o param):
Retorna o array completo.

<details>
  <summary>🫣 Spoiler</summary>

> 1. Obtenha a query com `const busca = req.query.search;`
> 2. Se tiver `busca`, faça `const filtrados = videos.filter(v => v.titulo.toLowerCase().includes(busca.toLowerCase()));`
> 3. Use `return res.json(filtrados);` para interromper a função após responder.

</details>
