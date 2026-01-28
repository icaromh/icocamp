/**
 * Função para calcular o sub-total do carrinho de compras.
 * O sub-total é a soma dos preços de todos os itens no carrinho.
 */
function calcularSubTotal(carrinho) {
  // Seu código aqui usando .reduce
  return 0;
}

/**
 * Função para imprimir a nota fiscal do carrinho de compras.
 */
function imprimirNota(carrinho, descontoPercentual, subTotal, total) {
  // Seu código aqui
}

// --- Não altere o código abaixo ---

const carrinho = [
  ["Bolsa Gucci", 1900.0],
  ["Cinto Versace", 539.0],
  ["Óculos Prada", 300.0],
];
const descontoPercentual = 15;

const subTotal = calcularSubTotal(carrinho);
const descontoValor = subTotal * (descontoPercentual / 100);
const total = subTotal - descontoValor;

if (subTotal > 0) {
  imprimirNota(carrinho, descontoPercentual, subTotal, total);
} else {
  console.log("Implemente a função calcularSubTotal primeiro.");
}
