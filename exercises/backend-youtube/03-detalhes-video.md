## 📝 03. Detalhes do Vídeo

Quando o usuário clica em um vídeo específico na lista, ele vai para a página daquele vídeo. Para o frontend carregar os dados certinhos, precisamos de uma rota que busque apenas o vídeo solicitado usando um parâmetro dinâmico na URL (`Route Params`).

**Dado inicial**

```javascript
// Array do exercício 02
const videos = [ ... ];
```

**Objetivo**: Utilizar *Route Params* (`req.params`) para criar a rota `GET /videos/:id` que busca e retorna um vídeo específico. Retornar status 404 se não existir.

1. Continue com o código anterior.
2. Defina uma nova rota `GET /videos/:id`.
3. Capture o `id` que vem na URL usando `req.params.id`. Lembre-se que ele vem como string!
4. Busque o vídeo correspondente no array `videos`.
5. Se encontrar, retorne o objeto do vídeo. Se não, retorne status `404` com uma mensagem de erro JSON: `{ "erro": "Vídeo não encontrado" }`.

**Template**

```javascript
// ... código anterior ...

app.get('/videos/:id', (req, res) => {
  // Seu código aqui
  // 1. Pegar o id da url
  // 2. Procurar no array
  // 3. Checar se existe e retornar
});

app.listen(3000, () => console.log('Servidor rodando...'));
```

**Saída esperada**

Ao acessar `http://localhost:3000/videos/2`:
```json
{ "id": 2, "titulo": "Meu setup de gravação", "visualizacoes": 420 }
```

Ao acessar `http://localhost:3000/videos/999`:
Status: `404 Not Found`
```json
{ "erro": "Vídeo não encontrado" }
```

<details>
  <summary>🫣 Spoiler</summary>

> 1. Para pegar o ID em número: `const idBuscado = Number(req.params.id);`
> 2. Use o método de array `.find` para achar o vídeo: `const video = videos.find(v => v.id === idBuscado);`
> 3. Use `res.status(404).json(...)` se não achar.

</details>
