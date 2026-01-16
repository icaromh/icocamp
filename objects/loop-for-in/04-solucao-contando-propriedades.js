/*Crie uma função `contarPropriedades(obj)` que retorna o número total de propriedades em um objeto
usando `for...in`.
*/

const carro = {
    marca: "Ford",
    modelo: "Ka",
    ano: 2020
}

function contarPropriedades(carro) {
    let contador = 0;
    for (let keys in carro) {
        contador++;
    }
    return contador;
}

// --- Verificação ---
console.log("14. Contar:", contarPropriedades(carro) === 3 ? "✅" : "❌");

