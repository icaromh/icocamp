## 🌡️ Convertendo Temperaturas

Você está criando um aplicativo de clima e precisa converter uma lista de temperaturas de Celsius para Fahrenheit. A fórmula é `(C * 9/5) + 32`.

**Array de Entrada**

```javascript
const celsius = [0, 10, 20, 30, 100];
const resultadoEsperado = [32, 50, 68, 86, 212];
```

**Template**

```javascript
/**
 * Converte temperaturas de Celsius para Fahrenheit.
 * @param {number[]} arr - Array de temperaturas em Celsius.
 * @returns {number[]} Novo array com temperaturas em Fahrenheit.
 */
function converterParaFahrenheit(arr) {}

console.assert(
  JSON.stringify(converterParaFahrenheit(celsius)) ===
    JSON.stringify(resultadoEsperado),
  `Esperado: ${resultadoEsperado}, Obtido: ${converterParaFahrenheit(celsius)}`
);
```

<details>
  <summary>🫣 Spoiler</summary>

> 1.  Aplique a fórmula `(temp * 9/5) + 32` em cada elemento.

</details>
