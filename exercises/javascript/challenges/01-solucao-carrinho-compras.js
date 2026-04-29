
/*
Função para imprimir a nota fiscal do carrinho de compras. A nota deve conter:
    - A lista de itens com seus respectivos preços formatados em moeda usando $ como símbolo.
    - O sub-total do carrinho formatado em moeda usando $ como símbolo.
    - O desconto aplicado em porcentagem 
    - O total final após o desconto formatado em moeda.

    Exemplo de saída:

Nota:
------------------------------
Bolsa Gucci         $1900.00   
Cinto Versace       $539.00     
Óculos Prada        $300.00    
------------------------------
Sub-total:          $2739.00
Desconto:           15%
------------------------------
Total:              $2328.15
*/


//Função para calcular o sub-total do carrinho de compras.

function calcularSubTotal(carrinho) {
    // Seu código aqui usando .reducer
    return carrinho.reduce((acc, cur) => {
        return acc + cur[1];
    }, 0);
}

// Função para colocar a linha de traço: 
function separador() {
    const separar = '-';
    console.log(separar.repeat(30));
}

// Função para colocar os espaços em branco:
function espacos(texto) {
    return texto.padEnd(20, " ");
}

function formatarNumeros(num) {
    return `$${num.toFixed(2)}`;

}

//função para imprimir a nota no formato.
function imprimirNota(carrinho, descontoPercentual, subTotal, total) {
    let nota = "Nota:\n";
    const subTotalW = "Subtotal:"
    const totalW = "Total:";
    const descontoW = "Desconto:";

    console.log(nota);
    separador();
    carrinho.forEach(item => {
        console.log(`${espacos(item[0])} ${formatarNumeros(item[1])}`);
    });
    separador();
    console.log(`${espacos(subTotalW)} ${formatarNumeros(subTotal)}`);
    console.log(`${espacos(descontoW)} ${descontoPercentual}% `);
    separador();
    console.log(`${espacos(totalW)} ${formatarNumeros(total)}`);
}

function programa() {
    const descontoPercentual = 15; // 15%
    const carrinho = [
        ["Bolsa Gucci", 1900.0],
        ["Cinto Versace", 539.0],
        ["Óculos Prada", 300.0],
    ];

    const subTotalCompra = calcularSubTotal(carrinho);
    const totalCompra = subTotalCompra * ((100 - descontoPercentual) / 100);

    imprimirNota(carrinho, descontoPercentual, subTotalCompra, totalCompra);
}

programa();
