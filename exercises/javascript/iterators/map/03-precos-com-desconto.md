## 🏷️ Preços com Desconto

É Black Friday! Você precisa aplicar um desconto de 10% em todos os produtos da loja.

**Array de Entrada**

```javascript
const precos = [100, 200, 50, 10];
const resultadoEsperado = [90, 180, 45, 9];
```

**Template**

```javascript
/**
 * Aplica 10% de desconto em todos os preços.
 * @param {number[]} arr - Array de preços originais.
 * @returns {number[]} Novo array com preços com desconto.
 */
function aplicarDesconto(arr) {}

console.assert(
  JSON.stringify(aplicarDesconto(precos)) === JSON.stringify(resultadoEsperado),
  `Esperado: ${resultadoEsperado}, Obtido: ${aplicarDesconto(precos)}`
);
```

<details>
  <summary>🫣 Spoiler</summary>

> 1.  Para aplicar 10% de desconto, você pode multiplicar o preço por 0.9.

</details>
