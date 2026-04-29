## 📝 Fetch Básico

Você vai buscar informações de um livro usando a **Open Library API**.

A URL abaixo retorna dados sobre o livro "Beach Read":

```
https://openlibrary.org/works/OL20734329W.json
```

**Objetivo**: Escreva uma função `buscarLivro` que:

1. Faça uma requisição `GET` para a URL acima
2. Converta a resposta para JSON
3. Retorne o objeto com os dados

**Template**

```javascript
/**
 * Busca os dados de um livro a partir de uma URL da Open Library.
 * @param {string} url - URL da API
 * @returns {Promise<Object>} Dados do livro
 */
async function buscarLivro(url) {
  // Seu código aqui
}

buscarLivro("https://openlibrary.org/works/OL20734329W.json")
  .then((livro) => console.log("Título:", livro.title));
```

**Saída esperada**

```
Título: Beach Read
```

<details>
  <summary>🫣 Spoiler</summary>

> 1. Use `await fetch(url)` para fazer a requisição.
> 2. Converta a resposta com `await response.json()`.
> 3. Retorne o objeto obtido.

</details>
