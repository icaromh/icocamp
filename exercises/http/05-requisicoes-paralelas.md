## 📝 Requisições Paralelas com Promise.all

Às vezes precisamos buscar dados de **múltiplas URLs ao mesmo tempo**.
Fazer as requisições uma por vez seria lento. O `Promise.all` permite dispará-las **em paralelo** e esperar todas terminarem.

**URLs**

```
https://openlibrary.org/works/OL20734329W.json   → Beach Read
https://openlibrary.org/works/OL30845046W.json   → People We Meet on Vacation
https://openlibrary.org/works/OL24801992W.json   → Book Lovers
```

**Objetivo**: Escreva uma função `buscarVarios` que:

1. Recebe um array de URLs
2. Faz **todas as requisições em paralelo** usando `Promise.all`
3. Retorna um array com os títulos (`title`) de cada livro

**Template**

```javascript
const urls = [
  "https://openlibrary.org/works/OL20734329W.json",
  "https://openlibrary.org/works/OL30845046W.json",
  "https://openlibrary.org/works/OL24801992W.json",
];

/**
 * Busca dados de múltiplas URLs em paralelo.
 * @param {string[]} urls - Array de URLs
 * @returns {Promise<string[]>} Array com os títulos dos livros
 */
async function buscarVarios(urls) {
  // Seu código aqui
}

buscarVarios(urls).then((titulos) => {
  console.log("Livros encontrados:");
  titulos.forEach((titulo) => console.log("-", titulo));
});
```

**Saída esperada**

```
Livros encontrados:
- Beach Read
- People We Meet on Vacation
- Book Lovers
```

<details>
  <summary>🫣 Spoiler</summary>

> 1. Use `.map()` para criar um array de Promises: `urls.map(url => fetch(url).then(r => r.json()))`.
> 2. Passe o array para `await Promise.all(...)` para esperar todas resolverem.
> 3. Use `.map()` no resultado para extrair apenas o campo `title` de cada livro.

</details>
