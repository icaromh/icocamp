## 📝 Frase Completa

Você tem um array de palavras e precisa juntá-las para formar uma frase completa.

**Array de Entrada**

```javascript
const palavras = ["Eu", "amo", "programar", "em", "JavaScript"];
const resultadoEsperado = "Eu amo programar em JavaScript";
```

**Template**

```javascript
/**
 * Concatena as palavras para formar uma frase, separadas por espaço.
 * @param {string[]} arr - Array de palavras.
 * @returns {string} Frase completa.
 */
function formarFrase(arr) {}

console.assert(
  formarFrase(palavras) === resultadoEsperado,
  `Esperado: "${resultadoEsperado}", Obtido: "${formarFrase(palavras)}"`
);
```

<details>
  <summary>🫣 Spoiler</summary>

> 1.  Cuidado com o espaço extra no início ou fim.
> 2.  Você pode usar o acumulador para juntar as palavras com um espaço: `acc + " " + palavra`.
> 3.  Ou usar o método `.join(" ")` que é mais simples, mas aqui queremos treinar o `reduce`. Se usar reduce, talvez precise de lógica para não adicionar espaço antes da primeira palavra.

</details>
