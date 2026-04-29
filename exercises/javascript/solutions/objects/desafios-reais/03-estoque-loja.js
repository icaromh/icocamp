const estoque = { notebook: 5, mouse: 0 };
function verificarEstoque(produto) {
  if (estoque[produto] > 0) {
    return "Disponível";
  } else {
    return "Esgotado";
  }
}
console.log(
  "18. Estoque:",
  verificarEstoque("notebook") === "Disponível" ? "✅" : "❌"
);
