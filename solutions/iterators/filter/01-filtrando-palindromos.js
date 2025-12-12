const palavras = ["roma", "ovo", "teste", "arara", "radar", "carro"];

function encontrarPalindromos(arr) {
  return arr.filter((palavra) => {
    const palavraRevertida = palavra.split("").reverse().join("");
    return palavra === palavraRevertida;
  });
}

console.log(encontrarPalindromos(palavras));
