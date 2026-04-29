## Formatação de Telefone

Você trabalha para uma operadora e precisa padronizar a exibição de todos os números de telefone de 8 dígitos para o formato `XXXX-XXXX`.

**Array de Entrada**

```javascript
const telefones = ["12345678", "87654321", "99998888"];
const resultadoEsperado = ["1234-5678", "8765-4321", "9999-8888"];
```

**Template**

```javascript
/**
 * Adiciona um hífen no meio da string de 8 dígitos do telefone.
 * @param {string[]} arr - Array de números de telefone (8 dígitos).
 * @returns {string[]} Novo array de telefones formatados.
 */
function formatarTelefones(arr) {}

console.assert(
  JSON.stringify(formatarTelefones(telefones)) ===
    JSON.stringify(resultadoEsperado),
  `Esperado: ${resultadoEsperado}, Obtido: ${formatarTelefones(telefones)}`
);
```

<details>
  <summary>🫣 Spoiler</summary>

> 1.  Use `.slice(0, 4)` para obter os primeiros quatro dígitos (a primeira parte do telefone).
> 2.  Use `.slice(4)` para obter os últimos quatro dígitos (a segunda parte do telefone).
> 3.  Concatene as duas partes com um hífen no meio: `return primeiraParte + "-" + segundaParte;`

</details>
