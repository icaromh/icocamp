const notas = [5.5, 8.0, 9.5, 4.0, 7.0];
const resultadoEsperado = 9.5;

/**
 * Encontra a maior nota no array.
 * @param {number[]} arr - Array de notas.
 * @returns {number} A maior nota.
 */
function encontrarMaiorNota(arr) {
  // Implemente aqui
}

if (encontrarMaiorNota(notas) === resultadoEsperado) {
  console.log("Parabéns! Você acertou.");
} else {
  console.log(
    `Esperado: ${resultadoEsperado}, Obtido: ${encontrarMaiorNota(notas)}`
  );
}
