## 📝 08. Dar Like

Às vezes, não queremos atualizar o vídeo inteiro (como fizemos com o `PUT`), queremos apenas modificar uma informação pequena, como adicionar um "Like". O método HTTP `PATCH` é perfeito para atualizações parciais.

**Objetivo**: Criar uma rota específica `PATCH /videos/:id/like` que apenas incrementa o número de visualizações (ou likes) de um vídeo sem precisar mandar nenhum body.

1. Defina a rota `PATCH /videos/:id/like`.
2. Pegue o `id` da URL.
3. Encontre o vídeo. (Retorne 404 se não achar).
4. Incremente a propriedade `visualizacoes` em `1`.
5. Retorne uma mensagem de sucesso ou o vídeo atualizado.

**Template**

```javascript
app.patch('/videos/:id/like', (req, res) => {
  // 1. Pegar o id
  // 2. Achar o vídeo (404 se não achar)
  // 3. Somar +1 em visualizacoes
  // 4. Retornar
});
```

**Saída esperada**

Ao enviar um PATCH para `http://localhost:3000/videos/1/like`:
```json
{
  "id": 1,
  "titulo": "Aprenda Node em 10 minutos",
  "visualizacoes": 1501
}
```

<details>
  <summary>🫣 Spoiler</summary>

> 1. Busque com `videos.find(...)`.
> 2. Incremente com `video.visualizacoes += 1;` ou `video.visualizacoes++`.
> 3. É uma rota sem `req.body`, então é só chamar o endpoint e a mágica acontece.

</details>
