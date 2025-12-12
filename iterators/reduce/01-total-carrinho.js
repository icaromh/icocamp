const precos = [29.9, 10.0, 5.5, 100.0];
const resultadoEsperado = 145.4;

/**
 * Soma todos os preços do array.
 * @param {number[]} arr - Array de preços.
 * @returns {number} Soma total.
 */
function somarPrecos(arr) {
  // Implemente aqui
}

if (somarPrecos(precos) === resultadoEsperado) {
  console.log("Parabéns! Você acertou.");
} else {
  console.log(`Esperado: ${resultadoEsperado}, Obtido: ${somarPrecos(precos)}`);
}
