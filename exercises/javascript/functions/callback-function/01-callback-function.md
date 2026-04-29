## 📝 Callback functions

Crie uma função chamada `calcular` que aceita dois números (`num1`, `num2`) e uma **função de operação matemática** (`callback`). O objetivo é mostrar que a função `calcular` é _genérica_ e usa a callback para definir a _lógica específica_.

**Exercicio**

```javascript
/**
 * 👩‍💻: Implementar o corpo da função
 */
function somar(a, b) {}
function multiplicar(a, b) {}

/**
 * Função calcular aceita os seguintes parâmetros:
 * @param {number} num1 - Primeiro número.
 * @param {number} num2 - Segundo número.
 * @param {function(number, number): number} callback - A função que fará a operação.
 *
 * E retorna
 * @returns {number} O resultado da operação.
 */
function calcular(num1, num2, callback) {
  // 👩‍💻: Implementar o corpo da função
}

// Entradas
const num1 = 10;
const num2 = 5;

/**
 * 👩‍💻: usar a função calcular com as suas funções de callback
 * obs: trocar zero pela chamada da função calcular()
 */
const resultadoSoma = 0;
const resultadoMulti = 0;

// Resultados esperados
const resultadoEsperadoSoma = 15;
const resultadoEsperadoMulti = 50;

// Testes
console.assert(
  resultadoSoma === resultadoEsperadoSoma,
  `Soma Esperada: ${resultadoEsperadoSoma}, Resultado Obtido: ${resultadoSoma}`
);
console.assert(
  resultadoMulti === resultadoEsperadoMulti,
  `Multiplicação Esperada: ${resultadoEsperadoMulti}, Resultado Obtido: ${resultadoMulti}`
);
```

<details>
  <summary>🫣 Spoiler</summary>

> 1.  Na função `multiplicar(a, b)`, o código é simples: `return a * b;`.
> 2.  Na função `calcular(num1, num2, callback)`, o código deve apenas executar a função recebida: `return callback(num1, num2);`.
> 3.  O `calcular` é apenas um **executor**; ele não se importa se a callback é `somar` ou `multiplicar`. Isso é o poder da callback\!

</details>
