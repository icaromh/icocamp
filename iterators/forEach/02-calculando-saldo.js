const movimentacoes = [100, -20, -30, 50];
const resultadoEsperado = 100;

/**
 * Calcula o saldo final somando as movimentações.
 * @param {number[]} arr - Array de movimentações.
 * @returns {number} Saldo final.
 */
function calcularSaldo(arr) {
  let saldo = 0;
  // Implemente aqui
  return saldo;
}

if (calcularSaldo(movimentacoes) === resultadoEsperado) {
  console.log("Parabéns! Você acertou.");
} else {
  console.log(
    `Esperado: ${resultadoEsperado}, Obtido: ${calcularSaldo(movimentacoes)}`
  );
}
