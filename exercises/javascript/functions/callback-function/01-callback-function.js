/**
 * 👩‍💻: Implementar o corpo da função
 */
function somar(a, b) {}
function multiplicar(a, b) {}

/**
 * Função calcular aceita os seguintes parâmetros:
 * @param {number} num1 - Primeiro número.
 * @param {number} num2 - Segundo número.
 * @param {function(number, number): number} callback - A função que fará a operação.
 *
 * E retorna
 * @returns {number} O resultado da operação.
 */
function calcular(num1, num2, callback) {
  // 👩‍💻: Implementar o corpo da função
}

// Entradas
const num1 = 10;
const num2 = 5;

/**
 * 👩‍💻: usar a função calcular com as suas funções de callback
 * obs: trocar zero pela chamada da função calcular()
 */
const resultadoSoma = 0;
const resultadoMulti = 0;

// Resultados esperados
const resultadoEsperadoSoma = 15;
const resultadoEsperadoMulti = 50;

// Testes
if (resultadoSoma === resultadoEsperadoSoma) {
  console.log(`Soma: Sucesso! ${resultadoSoma}`);
} else {
  console.log(
    `Soma: Esperado: ${resultadoEsperadoSoma}, Obtido: ${resultadoSoma}`
  );
}

if (resultadoMulti === resultadoEsperadoMulti) {
  console.log(`Multiplicação: Sucesso! ${resultadoMulti}`);
} else {
  console.log(
    `Multiplicação: Esperado: ${resultadoEsperadoMulti}, Obtido: ${resultadoMulti}`
  );
}
