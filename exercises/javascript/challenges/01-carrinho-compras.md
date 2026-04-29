# 💎 Missão VIP: Sistema de Nota Fiscal de Luxo

Você trabalha na "Élan Tech", a divisão de desenvolvimento de software da principal marca de artigos de luxo do mundo. Sua tarefa urgente é finalizar o módulo de impressão da nota fiscal, garantindo que os cálculos de subtotal e desconto sejam exatos e que a nota tenha uma formatação alinhada e sofisticada.

**Objetivo**: Implementar as funções calcularSubTotal e imprimirNota no template abaixo para cumprir os requisitos de precisão e design da Élan Tech.

**Saída esperada:**

```
Nota:
Bolsa Gucci         $1900.00
Cinto Versace       $539.00
Óculos Prada        $300.00
------------------------------
Sub-total:          $2739.00
Desconto:           15%
------------------------------
Total:              $2328.15
```

---

**Conhecimentos necessários:**

- Arrays
- Iterators
- Formação de String

## Dicas

| Função                         | O que faz                                                                                      | Para que serve neste exercício                                                            |
| ------------------------------ | ---------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `.reduce((acc, cur) => {}, 0)` | Cria um acumulador total percorrendo todos os itens de um array                                | Útil para calcular totais                                                                 |
| `.forEach((item) => {})`       | Navega por todos os items de um array                                                          | Útil para criar strings formatadas de cada item na nota fiscal e aidionar a variavel nota |
| `.toFixed(2)`                  | Formata um número para ter um número exato de casas decimais.                                  | Garantir que todos os valores monetários tenham duas casas decimais (p. ex. $1900.00).    |
| `.padEnd(N, C)`                | Preenche a string no final (direita) até que atinja o comprimento total N usando o caractere C | Alinhar a tabela: Garante que o nome do item ocupe sempre o mesmo espaço antes do preço.  |
| `.repeat(N)`                   | Cria uma nova string repetindo a string original N vezes.                                      | Criar as linhas divisórias de forma dinâmica (eg: ------)                                 |

## Template

```javascript
/**
 * Função para calcular o sub-total do carrinho de compras.
 * O sub-total é a soma dos preços de todos os itens no carrinho.
 */
function calcularSubTotal(carrinho) {
  // Seu código aqui usando .reducer
}

/**
  * Função para imprimir a nota fiscal do carrinho de compras. A nota deve conter:
  * - A lista de itens com seus respectivos preços formatados em moeda usando $ como símbolo.
  * - O sub-total do carrinho formatado em moeda usando $ como símbolo.
  * - O desconto aplicado em porcentagem 
  * - O total final após o desconto formatado em moeda.
  *
  * Exemplo de saída:

Nota:
Bolsa Gucci         $1900.00   
Cinto Versace       $539.00     
Óculos Prada        $300.00    
------------------------------
Sub-total:          $2739.00
Desconto:           15%
------------------------------
Total:              $2328.15

 * 
 */
function imprimirNota(carrinho, descontoPercentual, subTotal, total) {
  let nota = "Nota:\n";

  console.log(nota);
}

function programa() {
  const descontoPercentual = 15; // 15%
  const carrinho = [
    ["Bolsa Gucci", 1900.0],
    ["Cinto Versace", 539.0],
    ["Óculos Prada", 300.0],
  ];

  const subTotalCompra = calcularSubTotal(carrinho);

  // imprimirNota(carrinho, descontoPercentual, subTotalCompra, totalCompra);
}
```
