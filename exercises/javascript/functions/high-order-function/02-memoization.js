/**
 * Cria uma versão otimizada de uma função, usando cache.
 * @param {function} funcao - A função original (lenta).
 * @returns {function} Uma nova função que guarda os resultados.
 */
function memorizar(funcao) {
  // Implemente aqui
}

// --- Testes ---

// Uma função "pesada" simulada que conta quantas vezes foi chamada
let contadorExecucoes = 0;
function calculoPesado(numero) {
  contadorExecucoes++;
  console.log(`⛽ Calculando combustível para ${numero}km...`);
  return numero * 2; // Exemplo simples: dobro da distância
}

// Criando a versão memorizada
const calculoOtimizado = memorizar(calculoPesado);

console.log("--- Rodada 1: Distância 100 (Primeira vez) ---");
const res1 = calculoOtimizado(100);
// Esperado: Deve incrementar contador, imprimir log e retornar 200

console.log("\n--- Rodada 2: Distância 100 (Segunda vez - Cache) ---");
const res2 = calculoOtimizado(100);
// Esperado: NÃO deve incrementar contador, NÃO deve imprimir log, retornar 200

console.log("\n--- Rodada 3: Distância 50 (Novo valor) ---");
const res3 = calculoOtimizado(50);
// Esperado: Deve incrementar contador, imprimir log e retornar 100

// Verificação final
console.log("\n--- Resultado dos Testes ---");
if (res1 === 200 && res2 === 200 && res3 === 100) {
  if (contadorExecucoes === 2) {
    console.log(
      "✅ Sucesso! A função foi executada apenas 2 vezes para 3 chamadas."
    );
  } else {
    console.log(
      `❌ Erro: A função foi executada ${contadorExecucoes} vezes. Deveria ser 2.`
    );
  }
} else {
  console.log("❌ Erro: Os resultados dos cálculos estão incorretos.");
}
