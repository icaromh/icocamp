function somar(a, b) {
  return a + b;
}
function multiplicar(a, b) {
  return a * b;
}

function calcular(num1, num2, callback) {
  return callback(num1, num2);
}

const num1 = 10;
const num2 = 5;

const resultadoSoma = calcular(num1, num2, somar);
const resultadoMulti = calcular(num1, num2, multiplicar);

console.log("Soma:", resultadoSoma);
console.log("Multiplicação:", resultadoMulti);
