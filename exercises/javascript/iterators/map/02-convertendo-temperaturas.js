const celsius = [0, 10, 20, 30, 100];
const resultadoEsperado = [32, 50, 68, 86, 212];

/**
 * Converte temperaturas de Celsius para Fahrenheit.
 * @param {number[]} arr - Array de temperaturas em Celsius.
 * @returns {number[]} Novo array com temperaturas em Fahrenheit.
 */
function converterParaFahrenheit(arr) {
  // Implemente aqui
}

if (
  JSON.stringify(converterParaFahrenheit(celsius)) ===
  JSON.stringify(resultadoEsperado)
) {
  console.log("Parabéns! Você acertou.");
} else {
  console.log(
    `Esperado: ${JSON.stringify(resultadoEsperado)}, Obtido: ${JSON.stringify(
      converterParaFahrenheit(celsius)
    )}`
  );
}
