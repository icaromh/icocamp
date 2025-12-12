let conta = {
  saldo: 0,
  depositar: function (valor) {
    this.saldo += valor;
  },
  sacar: function (valor) {
    this.saldo -= valor;
  },
};
conta.depositar(100);
conta.sacar(30);
console.log("16. Saldo:", conta.saldo === 70 ? "✅" : "❌");
