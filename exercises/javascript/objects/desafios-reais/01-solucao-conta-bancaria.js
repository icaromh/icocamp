/*Crie um objeto `conta` com `saldo` (inicial 0) e métodos `depositar(valor)` e `sacar(valor)`. O saldo deve ser atualizado. */

let conta = {
    saldo: 0,
    depositar: function (valor) {
        this.saldo += valor;
    },
    sacar: function (valor) {
        this.saldo -= valor;
    }
};

// --- Verificação ---
if (conta.depositar) conta.depositar(100);
if (conta.sacar) conta.sacar(30);
console.log("16. Saldo:", conta.saldo === 70 ? "✅" : "❌");
