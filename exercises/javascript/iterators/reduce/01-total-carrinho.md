## 🛒 Total do Carrinho

Você está finalizando uma compra e precisa somar o valor de todos os itens do carrinho.

**Array de Entrada**

```javascript
const precos = [29.9, 10.0, 5.5, 100.0];
const resultadoEsperado = 145.4;
```

**Template**

```javascript
/**
 * Soma todos os preços do array.
 * @param {number[]} arr - Array de preços.
 * @returns {number} Soma total.
 */
function somarPrecos(arr) {}

console.assert(
  somarPrecos(precos) === resultadoEsperado,
  `Esperado: ${resultadoEsperado}, Obtido: ${somarPrecos(precos)}`
);
```

<details>
  <summary>🫣 Spoiler</summary>

> 1.  O acumulador deve começar com 0.
> 2.  Some o valor atual ao acumulador em cada iteração.

</details>
