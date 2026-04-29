const precos = [29.9, 10.0, 5.5, 100.0];

function somarPrecos(arr) {
  return arr.reduce((acc, preco) => acc + preco, 0);
}

console.log(somarPrecos(precos));
