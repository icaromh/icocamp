## 📝 07. Editar Título

Errou o título e quer corrigir? Para atualizar os dados de um recurso existente, usamos o método HTTP `PUT`.

**Objetivo**: Criar uma rota `PUT /videos/:id` que atualiza os dados completos de um vídeo.

1. Defina a rota `PUT /videos/:id`.
2. Pegue o `id` da URL.
3. Encontre o vídeo no array. Se não existir, retorne status `404`.
4. Pegue o `titulo` e `duracao` do `req.body` (você pode até reaproveitar o middleware `validarVideo` aqui!).
5. Atualize as propriedades do vídeo encontrado.
6. Retorne o vídeo atualizado em formato JSON.

**Template**

```javascript
app.put('/videos/:id', validarVideo, (req, res) => {
  // 1. Pegar o ID (req.params.id)
  // 2. Achar o vídeo. Se não achar, 404
  // 3. Atualizar titulo e duracao com req.body
  // 4. Retornar o video atualizado
});
```

**Saída esperada**

PUT `http://localhost:3000/videos/1` com body `{ "titulo": "Novo Título", "duracao": "12:00" }`
```json
{
  "id": 1,
  "titulo": "Novo Título",
  "duracao": "12:00",
  "visualizacoes": 1500
}
```

<details>
  <summary>🫣 Spoiler</summary>

> 1. Encontre o vídeo com `const video = videos.find(v => v.id === Number(req.params.id));`
> 2. Altere os dados mutando o objeto: `video.titulo = req.body.titulo; video.duracao = req.body.duracao;`
> 3. Retorne com `res.json(video);`

</details>
