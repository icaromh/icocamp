/* Crie um objeto listaTarefas com uma propriedade tarefas (array vazio) e um método adicionar(tarefa) que coloca uma string no array.*/

let listaTarefas = {
    tarefas: [],
    adicionar: function (tarefa) {
        this.tarefas.push(tarefa);
    }
}

if (listaTarefas.adicionar) listaTarefas.adicionar("Estudar");

console.log(
    "17. Tarefas:",
    listaTarefas.tarefas[0] === "Estudar" ? "✅" : "❌"
);


