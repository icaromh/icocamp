## 🏆 Maior Nota

Você precisa encontrar a maior nota de uma turma.

**Array de Entrada**

```javascript
const notas = [5.5, 8.0, 9.5, 4.0, 7.0];
const resultadoEsperado = 9.5;
```

**Template**

```javascript
/**
 * Encontra a maior nota no array.
 * @param {number[]} arr - Array de notas.
 * @returns {number} A maior nota.
 */
function encontrarMaiorNota(arr) {}

console.assert(
  encontrarMaiorNota(notas) === resultadoEsperado,
  `Esperado: ${resultadoEsperado}, Obtido: ${encontrarMaiorNota(notas)}`
);
```

<details>
  <summary>🫣 Spoiler</summary>

> 1.  O acumulador pode guardar o maior valor encontrado até agora.
> 2.  Use `Math.max(acc, nota)` ou um `if` para atualizar o acumulador.

</details>
