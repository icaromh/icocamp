## 🏷️ Filtrando Preços

Você está gerenciando uma loja online e quer fazer uma promoção para produtos baratos. Precisa filtrar apenas os preços que são menores que 50 reais.

**Array de Entrada**

```javascript
const precos = [120, 45, 30, 80, 15, 200];
const resultadoEsperado = [45, 30, 15];
```

**Template**

```javascript
/**
 * Filtra os preços, retornando apenas os menores que 50.
 * @param {number[]} arr - Array de preços.
 * @returns {number[]} Novo array com preços menores que 50.
 */
function filtrarPrecosBaixos(arr) {}

console.assert(
  JSON.stringify(filtrarPrecosBaixos(precos)) ===
    JSON.stringify(resultadoEsperado),
  `Esperado: ${resultadoEsperado}, Obtido: ${filtrarPrecosBaixos(precos)}`
);
```

<details>
  <summary>🫣 Spoiler</summary>

> 1.  A condição do filtro deve ser `preco < 50`.

</details>
