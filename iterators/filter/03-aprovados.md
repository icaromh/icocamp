## 🎓 Alunos Aprovados

Você é um professor e quer saber quais alunos passaram de ano. A média para aprovação é 7.0 ou maior.

**Array de Entrada**

```javascript
const notas = [5.5, 8.0, 9.5, 4.0, 7.0, 6.5];
const resultadoEsperado = [8.0, 9.5, 7.0];
```

**Template**

```javascript
/**
 * Filtra as notas, retornando apenas as maiores ou iguais a 7.0.
 * @param {number[]} arr - Array de notas.
 * @returns {number[]} Novo array com notas de aprovação.
 */
function filtrarAprovados(arr) {}

console.assert(
  JSON.stringify(filtrarAprovados(notas)) === JSON.stringify(resultadoEsperado),
  `Esperado: ${resultadoEsperado}, Obtido: ${filtrarAprovados(notas)}`
);
```

<details>
  <summary>🫣 Spoiler</summary>

> 1.  A condição do filtro deve ser `nota >= 7.0`.

</details>
