const notas = [5.5, 8.0, 9.5, 4.0, 7.0, 6.5];
const resultadoEsperado = [8.0, 9.5, 7.0];

/**
 * Filtra as notas, retornando apenas as maiores ou iguais a 7.0.
 * @param {number[]} arr - Array de notas.
 * @returns {number[]} Novo array com notas de aprovação.
 */
function filtrarAprovados(arr) {
  // Implemente aqui
}

if (
  JSON.stringify(filtrarAprovados(notas)) === JSON.stringify(resultadoEsperado)
) {
  console.log("Parabéns! Você acertou.");
} else {
  console.log(
    `Esperado: ${JSON.stringify(resultadoEsperado)}, Obtido: ${JSON.stringify(
      filtrarAprovados(notas)
    )}`
  );
}
