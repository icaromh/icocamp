## 📝 Requisição POST — Enviando Dados

Até agora, usamos o `fetch` apenas para **buscar** dados (`GET`). Mas às vezes precisamos **enviar** dados para um servidor.

Neste exercício, você vai usar a API pública [JSONPlaceholder](https://jsonplaceholder.typicode.com/) que simula um backend real para testes.

**Endpoint**

```
POST https://jsonplaceholder.typicode.com/posts
```

Ele espera um body JSON com qualquer objeto, e retorna o objeto criado com um `id` adicionado.

**Objetivo**: Escreva uma função `criarPost` que:

1. Recebe um objeto `{ title, body, userId }` como parâmetro
2. Faz uma requisição `POST` para o endpoint acima
3. Envia o objeto como JSON no corpo da requisição
4. Inclui o header `Content-Type: application/json`
5. Retorna o objeto criado (com o `id` que o servidor adicionou)

**Template**

```javascript
/**
 * Cria um novo post via requisição POST.
 * @param {{ title: string, body: string, userId: number }} dados
 * @returns {Promise<Object>} Post criado pelo servidor
 */
async function criarPost(dados) {
  // Seu código aqui
}

criarPost({
  title: "Minha Estante Virtual",
  body: "Uma aplicação para organizar livros lidos e não lidos.",
  userId: 1,
}).then((post) => {
  console.log("Post criado com id:", post.id);
  console.log("Título:", post.title);
});
```

**Saída esperada**

```
Post criado com id: 101
Título: Minha Estante Virtual
```

<details>
  <summary>🫣 Spoiler</summary>

> 1. Passe um segundo argumento para o `fetch` com `method: "POST"`.
> 2. Adicione `headers: { "Content-Type": "application/json" }`.
> 3. Serialize o objeto com `body: JSON.stringify(dados)`.
> 4. Converta a resposta com `await response.json()` e retorne.

</details>
