## 📝 06. Validar Publicação

Não podemos permitir que enviem vídeos sem título! Vamos criar um **Middleware** para interceptar a requisição antes de chegar na rota principal e verificar se os dados estão corretos.

**Dado inicial**

```javascript
// Rota de publicação do exercício 05
app.post('/videos', (req, res) => {
  // ...
});
```

**Objetivo**: Criar um *Middleware* chamado `validarVideo` que retorna erro 400 se o `titulo` não for enviado.

1. Crie uma função chamada `validarVideo(req, res, next)`.
2. Dentro dela, verifique se `req.body.titulo` existe e não está vazio.
3. Se o título for inválido, interrompa o fluxo retornando status `400` e um JSON `{ "erro": "O título do vídeo é obrigatório" }`.
4. Se o título for válido, chame a função `next()` para passar a bola para frente.
5. Adicione esse middleware na sua rota `POST /videos`.

**Template**

```javascript
// Middleware de validação
function validarVideo(req, res, next) {
  // 1. Checar req.body.titulo
  // 2. Se for inválido, return res.status(400)...
  // 3. Se for válido, chamar next()
}

// Inserir o middleware na rota
app.post('/videos', validarVideo, (req, res) => {
  // ...
});
```

**Saída esperada**

Ao enviar um POST para `http://localhost:3000/videos` com body `{ "duracao": "10:00" }`:
Status: `400 Bad Request`
```json
{ "erro": "O título do vídeo é obrigatório" }
```

<details>
  <summary>🫣 Spoiler</summary>

> 1. Na função middleware: `if (!req.body.titulo) { return res.status(400).json(...) }`
> 2. Não esqueça do `next();` no final da função se tudo estiver OK, senão a requisição fica travada!
> 3. Na rota, coloque a função como segundo argumento: `app.post('/videos', validarVideo, (req, res) => ...)`

</details>
