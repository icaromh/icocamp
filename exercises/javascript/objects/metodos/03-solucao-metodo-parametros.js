/* Crie um objeto `calculadora` com um método `somar(a, b)` que retorna a soma de `a` e `b`. */

const calculadora = {
    somar: function (a, b) {
        return a + b;
    }
};

//verificação
console.log(
    "8. Soma:",
    calculadora.somar && calculadora.somar(2, 3) === 5 ? "✅" : "❌"
);
