/* Use `for...in` para percorrer o objeto `carro` e adicione todas as **chaves** 
(nomes das propriedades) em um array chamado `chaves`.
*/
const carro = {
    marca: "Ford",
    modelo: "Ka",
    ano: 2020
};

let chaves = [];

/* eu tinha feito assim, mas daí vi o spoiler 
let contador = 0;
for (let keys in carro) {
    chaves[contador] = keys;
    contador++;
}
*/

for (let key in carro) {
    chaves.push(key);
}

console.log(
    "11. Chaves:",
    chaves.includes("marca") && chaves.length === 3 ? "✅" : "❌"
);
