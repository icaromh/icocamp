/* Crie um objeto aluno com notas (array) e um método calcularMedia() que retorna a média das notas. */

const aluno = {
    notas: [8, 9, 7],
    calcularMedia: function () {
        if (this.notas.length === 0) {
            return "Não existem notas para serem calculadas";
        }
        let media = 0;
        for (let nota of this.notas) {
            media += nota;
        }
        media = media / this.notas.length;
        return media;
    }
}

console.log(
    "19. Média:",
    aluno.calcularMedia && aluno.calcularMedia() === 8 ? "✅" : "❌"
);
