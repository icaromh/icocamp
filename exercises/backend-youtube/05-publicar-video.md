## 📝 05. Publicar Vídeo

Hora de enviar um vídeo novo! Para adicionar dados, usamos o método HTTP `POST`. Precisaremos ler as informações do vídeo a partir do corpo da requisição (`req.body`).

**Dado inicial**

```javascript
// Importante: para o express entender JSON no body, precisamos adicionar um middleware nativo!
app.use(express.json());
```

**Objetivo**: Criar uma rota `POST /videos` que recebe `{ titulo, duracao }` via `req.body`, cria um objeto com id gerado, adiciona ao array e retorna status `201`.

1. Lembre-se de adicionar `app.use(express.json())` logo após criar o app.
2. Crie uma rota `POST /videos`.
3. Obtenha `titulo` e `duracao` através do `req.body`.
4. Crie um novo objeto de vídeo. Dica: o `id` pode ser gerado pegando o tamanho do array + 1 ou usando o `Date.now()`. Inicialize `visualizacoes` com `0`.
5. Faça o `.push()` do objeto no array `videos`.
6. Responda com status `201` (Created) e retorne o vídeo criado em formato JSON.

**Template**

```javascript
// ...
app.use(express.json());

app.post('/videos', (req, res) => {
  // 1. Pegar titulo e duracao do req.body
  // 2. Criar novo objeto video
  // 3. Fazer o push no array 'videos'
  // 4. Retornar status 201 e o video criado
});
```

**Saída esperada**

Ao enviar um POST para `http://localhost:3000/videos` com o body:
```json
{
  "titulo": "Como usar o Insomnia",
  "duracao": "08:15"
}
```

A resposta deve ser Status `201 Created` e o body:
```json
{
  "id": 4,
  "titulo": "Como usar o Insomnia",
  "duracao": "08:15",
  "visualizacoes": 0
}
```

<details>
  <summary>🫣 Spoiler</summary>

> 1. Extraia os dados: `const { titulo, duracao } = req.body;`
> 2. Crie o ID: `const novoId = videos.length > 0 ? videos[videos.length - 1].id + 1 : 1;`
> 3. Responda assim: `res.status(201).json(novoVideo);`

</details>
