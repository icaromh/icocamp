## 📝 Buscando e Filtrando Resultados

A Open Library permite buscar livros por título ou autor.

**URL de busca**

```
https://openlibrary.org/search.json?q=emily+henry&limit=10
```

A resposta tem um campo `docs`, que é um array de livros. Cada livro possui:

- `title` — título
- `author_name` — array com nomes dos autores
- `first_publish_year` — ano da primeira publicação

**Objetivo**: Escreva uma função `buscarAutor` que:

1. Recebe um nome de autor como parâmetro
2. Busca livros na Open Library usando esse nome
3. Retorna um array de objetos `{ titulo, ano }` — apenas dos livros que têm `first_publish_year` definido
4. Ordena o resultado do mais antigo para o mais recente

**Template**

```javascript
/**
 * Busca livros de um autor na Open Library.
 * @param {string} autor - Nome do autor
 * @returns {Promise<Array<{titulo: string, ano: number}>>}
 */
async function buscarAutor(autor) {
  const query = autor.split(" ").join("+");
  const url = `https://openlibrary.org/search.json?q=${query}&limit=10`;

  // Seu código aqui
}

buscarAutor("Emily Henry").then((livros) => {
  livros.forEach((l) => console.log(`${l.ano} — ${l.titulo}`));
});
```

**Saída esperada (exemplo)**

```
2016 — The Love That Split the World
2019 — Beach Read
2021 — People We Meet on Vacation
...
```

<details>
  <summary>🫣 Spoiler</summary>

> 1. Faça `fetch(url)` e converta para JSON.
> 2. Acesse `data.docs` para obter o array de livros.
> 3. Use `.filter()` para manter apenas livros com `first_publish_year`.
> 4. Use `.map()` para transformar cada item em `{ titulo: doc.title, ano: doc.first_publish_year }`.
> 5. Use `.sort((a, b) => a.ano - b.ano)` para ordenar.

</details>
