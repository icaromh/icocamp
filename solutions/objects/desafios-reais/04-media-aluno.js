let aluno = {
  notas: [8, 7, 9],
  calcularMedia: function () {
    let soma = 0;
    for (let i = 0; i < this.notas.length; i++) {
      soma += this.notas[i];
    }
    return soma / this.notas.length;
  },
};
console.log("19. Média:", aluno.calcularMedia() === 8 ? "✅" : "❌");
