const telefones = ["12345678", "87654321", "99998888"];
const resultadoEsperado = ["1234-5678", "8765-4321", "9999-8888"];

/**
 * Adiciona um hífen no meio da string de 8 dígitos do telefone.
 * @param {string[]} arr - Array de números de telefone (8 dígitos).
 * @returns {string[]} Novo array de telefones formatados.
 */
function formatarTelefones(arr) {
  // Implemente aqui
}

if (
  JSON.stringify(formatarTelefones(telefones)) ===
  JSON.stringify(resultadoEsperado)
) {
  console.log("Parabéns! Você acertou.");
} else {
  console.log(
    `Esperado: ${JSON.stringify(resultadoEsperado)}, Obtido: ${JSON.stringify(
      formatarTelefones(telefones)
    )}`
  );
}
