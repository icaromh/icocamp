/**
 * Cria uma função validadora para uma idade mínima específica.
 * @param {number} idadeMinima - A idade mínima necessária.
 * @returns {function(number): boolean} Uma função que verifica se a idade do usuário é suficiente.
 */
function criarValidador(idadeMinima) {
  // Implemente aqui: Retorne uma função que aceita 'idadeUsuario'
}

// --- Testes ---

// Criando os validadores
const validadorConteudoAdulto = criarValidador(18);
const validadorConteudoTeen = criarValidador(12);

// Testando conteúdo adulto (18+)
console.log("--- Teste 1: Conteúdo Adulto (18+) ---");
if (typeof validadorConteudoAdulto === "function") {
  const usuario20anos = validadorConteudoAdulto(20); // Deve ser true
  const usuario15anos = validadorConteudoAdulto(15); // Deve ser false

  if (usuario20anos === true && usuario15anos === false) {
    console.log("✅ Sucesso: Validador 18+ funcionou corretamente.");
  } else {
    console.log("❌ Erro: Validador 18+ retornou resultados inesperados.");
    console.log(`   20 anos (esperado true): ${usuario20anos}`);
    console.log(`   15 anos (esperado false): ${usuario15anos}`);
  }
} else {
  console.log("❌ Erro: criarValidador deve retornar uma função.");
}

// Testando conteúdo teen (12+)
console.log("\n--- Teste 2: Conteúdo Teen (12+) ---");
if (typeof validadorConteudoTeen === "function") {
  const usuario13anos = validadorConteudoTeen(13); // Deve ser true
  const usuario10anos = validadorConteudoTeen(10); // Deve ser false

  if (usuario13anos === true && usuario10anos === false) {
    console.log("✅ Sucesso: Validador 12+ funcionou corretamente.");
  } else {
    console.log("❌ Erro: Validador 12+ retornou resultados inesperados.");
  }
}
