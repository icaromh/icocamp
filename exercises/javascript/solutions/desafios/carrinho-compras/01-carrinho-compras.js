/**
 * Função para calcular o sub-total do carrinho de compras.
 * O sub-total é a soma dos preços de todos os itens no carrinho.
 * * Usamos .reduce() porque ele é a ferramenta ideal para AGREGAR (somar, contar, etc.)
 * os valores de um array em um único resultado.
 */
function calcularSubTotal(carrinho) {
  // 'acumulador' começa em 0 (segundo argumento do reduce)
  // 'itemAtual' é um array [nome, preco], então acessamos o preço em [1]
  const subTotal = carrinho.reduce((acumulador, itemAtual) => {
    return acumulador + itemAtual[1];
  }, 0);

  return subTotal;
}

/**
 * Função para imprimir a nota fiscal do carrinho de compras.
 * A formatação é crucial aqui para o alinhamento elegante.
 * * Usamos .padEnd() para fixar o espaço do nome e garantir que o preço comece no mesmo ponto.
 */
function imprimirNota(carrinho, descontoPercentual, subTotal, total) {
  // A linha divisória tem 30 caracteres, escolhido para alinhar com o nosso template.
  const divisor = "-".repeat(30);
  let nota = "Nota:\n";
  const nomePad = 25; // Espaço fixo para o nome e os espaços de alinhamento

  // 1. Lista de Itens (forEach)
  carrinho.forEach((item) => {
    const nome = item[0];
    const preco = item[1];

    // Alinha o nome com 25 caracteres, preenchendo o restante com espaços.
    const nomeAlinhado = nome.padEnd(nomePad, " ");

    // Formata o preço com 2 casas decimais e o símbolo $.
    const precoFormatado = `$${preco.toFixed(2)}`;

    // Concatena a linha: "Nome Alinhado" + "Preço Formatado"
    nota += nomeAlinhado + precoFormatado + "\n";
  });

  // 2. Divisores e Totais
  nota += divisor + "\n";

  // Alinhando os rótulos (Sub-total, Desconto, Total) com 20 caracteres.
  // E formatando os valores com .toFixed(2)
  nota += `Sub-total:`.padEnd(20, " ") + `$${subTotal.toFixed(2)}\n`;
  nota += `Desconto:`.padEnd(20, " ") + `${descontoPercentual}%\n`;

  nota += divisor + "\n";

  nota += `Total:`.padEnd(20, " ") + `$${total.toFixed(2)}\n`;

  console.log(nota);
}

/**
 * Função principal para orquestrar o cálculo e a impressão.
 */
function programa() {
  const descontoPercentual = 15; // 15%
  const carrinho = [
    ["Bolsa Gucci", 1900.0],
    ["Cinto Versace", 539.0],
    ["Óculos Prada", 300.0],
  ];

  // Passo 1: Calcular Subtotal (usando o reduce)
  const subTotalCompra = calcularSubTotal(carrinho);

  // Passo 2: Cálculo final (Fator de Desconto: 1 - 0.15 = 0.85)
  const fatorDesconto = (100 - descontoPercentual) / 100;
  const totalCompra = subTotalCompra * fatorDesconto;

  // Passo 3: Imprimir a nota formatada
  imprimirNota(carrinho, descontoPercentual, subTotalCompra, totalCompra);

  // --- Teste de Qualidade (Console Assert) ---
  const subTotalEsperado = 2739.0;
  const totalEsperado = 2328.15; // 2739 * 0.85 = 2328.15

  console.assert(
    subTotalCompra.toFixed(2) === subTotalEsperado.toFixed(2),
    `ERRO! SubTotal Esperado: ${subTotalEsperado}, Obtido: ${subTotalCompra}`
  );
  console.assert(
    totalCompra.toFixed(2) === totalEsperado.toFixed(2),
    `ERRO! Total Esperado: ${totalEsperado}, Obtido: ${totalCompra}`
  );
}

// Execute seu programa de luxo
programa();
