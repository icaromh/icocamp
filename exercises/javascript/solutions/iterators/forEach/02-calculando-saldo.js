const movimentacoes = [100, -20, -30, 50];

function calcularSaldo(arr) {
  let saldo = 0;
  arr.forEach((valor) => {
    saldo += valor;
  });
  return saldo;
}

console.log(calcularSaldo(movimentacoes));
