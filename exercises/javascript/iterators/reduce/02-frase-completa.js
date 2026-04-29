const palavras = ["Eu", "amo", "programar", "em", "JavaScript"];
const resultadoEsperado = "Eu amo programar em JavaScript";

/**
 * Concatena as palavras para formar uma frase, separadas por espaço.
 * @param {string[]} arr - Array de palavras.
 * @returns {string} Frase completa.
 */
function formarFrase(arr) {
  // Implemente aqui
}

if (formarFrase(palavras) === resultadoEsperado) {
  console.log("Parabéns! Você acertou.");
} else {
  console.log(
    `Esperado: "${resultadoEsperado}", Obtido: "${formarFrase(palavras)}"`
  );
}
