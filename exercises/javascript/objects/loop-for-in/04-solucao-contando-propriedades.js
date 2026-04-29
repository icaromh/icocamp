/*Crie uma função `contarPropriedades(obj)` que retorna o número total de propriedades em um objeto
usando `for...in`.
*/

const carro = {
    marca: "Ford",
    modelo: "Ka",
    ano: 2020
}

function contarPropriedades(objeto) {
    let contador = 0;
    for (let key in objeto) {
        contador++;
    }
    return contador;
}

// --- Verificação ---
console.log("14. Contar:", contarPropriedades(carro) === 3 ? "✅" : "❌");

