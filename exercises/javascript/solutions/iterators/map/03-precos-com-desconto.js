const precos = [100, 200, 50, 10];

function aplicarDesconto(arr) {
  return arr.map((preco) => preco * 0.9);
}

console.log(aplicarDesconto(precos));
