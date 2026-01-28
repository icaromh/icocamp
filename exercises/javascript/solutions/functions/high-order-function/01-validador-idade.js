function criarValidador(idadeMinima) {
  return function (idadeUsuario) {
    return idadeUsuario >= idadeMinima;
  };
}

// Testes
const validador18 = criarValidador(18);
console.log("Pode assistir 18+ (tem 20)?", validador18(20)); // true
console.log("Pode assistir 18+ (tem 15)?", validador18(15)); // false

const validadorLivre = criarValidador(0);
console.log("Pode assistir Livre (tem 5)?", validadorLivre(5)); // true
