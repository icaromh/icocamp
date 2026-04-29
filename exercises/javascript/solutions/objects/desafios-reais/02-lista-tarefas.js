let listaTarefas = {
  tarefas: [],
  adicionar: function (tarefa) {
    this.tarefas.push(tarefa);
  },
};
listaTarefas.adicionar("Estudar");
console.log(
  "17. Tarefas:",
  listaTarefas.tarefas[0] === "Estudar" ? "✅" : "❌"
);
