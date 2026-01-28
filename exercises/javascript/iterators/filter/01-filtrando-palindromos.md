## 📝 Filtrando Palíndromos

Você está desenvolvendo um jogo de palavras e precisa de uma função que identifique e retorne apenas os palíndromos.

**Array de Entrada**

```javascript
const palavras = ["roma", "ovo", "teste", "arara", "radar", "carro"];
const resultadoEsperado = ["ovo", "arara", "radar"];
```

**Dica:**
Palindromos são palavras que inversas são iguais a original.

- Roma -> amor. Não é palíndromo.
- ovo -> ovo. é palíndromo.

**Template**

```javascript
/**
 * Filtra a lista, retornando apenas as palavras que são palíndromos.
 * @param {string[]} arr - Array de palavras.
 * @returns {string[]} Novo array com apenas os palíndromos.
 */
function encontrarPalindromos(arr) {}

console.assert(
  JSON.stringify(encontrarPalindromos(palavras)) ===
    JSON.stringify(resultadoEsperado),
  `Esperado: ${resultadoEsperado}, Obtido: ${encontrarPalindromos(palavras)}`
);
```

<details>
  <summary>🫣 Spoiler</summary>

> 1.  Dentro da função de _callback_, declare uma variável `palavraRevertida`.
> 2.  Use o encadeamento de métodos: `const palavraRevertida = palavra.split('').reverse().join('');`
> 3.  A função de _callback_ deve retornar a comparação: `return palavra === palavraRevertida;`

</details>
