## 📝 09. Excluir Vídeo

Ficou com vergonha daquele vídeo antigo? Vamos apagá-lo! O método HTTP ideal para isso é o `DELETE`.

**Objetivo**: Criar uma rota `DELETE /videos/:id` que remove o vídeo do array em memória.

1. Defina a rota `DELETE /videos/:id`.
2. Descubra o `id`.
3. Descubra a **posição (index)** do vídeo no array.
4. Se ele não existir, retorne 404.
5. Se existir, remova-o do array. (Dica: `.splice()`).
6. Retorne status `204 No Content` (significa que deu certo, mas não tem o que responder no body).

**Template**

```javascript
app.delete('/videos/:id', (req, res) => {
  // 1. Pegar o id
  // 2. Achar o index (findIndex)
  // 3. Se index for -1, retornar 404
  // 4. Remover do array
  // 5. Retornar status 204
});
```

**Saída esperada**

Ao chamar `DELETE http://localhost:3000/videos/1`:
Status: `204 No Content` (Body vazio)

<details>
  <summary>🫣 Spoiler</summary>

> 1. Use `const index = videos.findIndex(v => v.id === Number(req.params.id));`
> 2. Remova com `videos.splice(index, 1);`
> 3. Responda finalizando a request: `res.status(204).send();`

</details>
