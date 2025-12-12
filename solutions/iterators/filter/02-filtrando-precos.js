const precos = [120, 45, 30, 80, 15, 200];

function filtrarPrecosBaixos(arr) {
  return arr.filter((preco) => preco < 50);
}

console.log(filtrarPrecosBaixos(precos));
