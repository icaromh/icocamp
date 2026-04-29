// --- Exercício 18 ---
const estoque = { notebook: 5, mouse: 0 };
function verificarEstoque(produto) {
  // Implemente aqui
}

// --- Verificação ---
console.log(
  "18. Estoque:",
  verificarEstoque("notebook") === "Disponível" &&
    verificarEstoque("mouse") === "Esgotado"
    ? "✅"
    : "❌"
);
