## 💰 Calculando Saldo

Você tem uma lista de movimentações bancárias (positivas são depósitos, negativas são saques). Calcule o saldo final usando `forEach`.

**Array de Entrada**

```javascript
const movimentacoes = [100, -20, -30, 50];
const resultadoEsperado = 100;
```

**Template**

```javascript
/**
 * Calcula o saldo final somando as movimentações.
 * @param {number[]} arr - Array de movimentações.
 * @returns {number} Saldo final.
 */
function calcularSaldo(arr) {
  let saldo = 0;
  // Implemente aqui
  return saldo;
}

console.assert(
  calcularSaldo(movimentacoes) === resultadoEsperado,
  `Esperado: ${resultadoEsperado}, Obtido: ${calcularSaldo(movimentacoes)}`
);
```

<details>
  <summary>🫣 Spoiler</summary>

> 1.  Some cada valor à variável `saldo` que foi declarada fora do `forEach`.

</details>
