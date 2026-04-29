const palavras = ["roma", "ovo", "teste", "arara", "radar", "carro"];
const resultadoEsperado = ["ovo", "arara", "radar"];

/**
 * Filtra a lista, retornando apenas as palavras que são palíndromos.
 * @param {string[]} arr - Array de palavras.
 * @returns {string[]} Novo array com apenas os palíndromos.
 */
function encontrarPalindromos(arr) {
  // Implemente aqui
}

if (
  JSON.stringify(encontrarPalindromos(palavras)) ===
  JSON.stringify(resultadoEsperado)
) {
  console.log("Parabéns! Você acertou.");
} else {
  console.log(
    `Esperado: ${JSON.stringify(resultadoEsperado)}, Obtido: ${JSON.stringify(
      encontrarPalindromos(palavras)
    )}`
  );
}
