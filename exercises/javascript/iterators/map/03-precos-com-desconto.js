const precos = [100, 200, 50, 10];
const resultadoEsperado = [90, 180, 45, 9];

/**
 * Aplica 10% de desconto em todos os preços.
 * @param {number[]} arr - Array de preços originais.
 * @returns {number[]} Novo array com preços com desconto.
 */
function aplicarDesconto(arr) {
  // Implemente aqui
}

if (
  JSON.stringify(aplicarDesconto(precos)) === JSON.stringify(resultadoEsperado)
) {
  console.log("Parabéns! Você acertou.");
} else {
  console.log(
    `Esperado: ${JSON.stringify(resultadoEsperado)}, Obtido: ${JSON.stringify(
      aplicarDesconto(precos)
    )}`
  );
}
