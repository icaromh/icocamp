// --- Exercício 17 ---
let listaTarefas = {
  tarefas: [],
  // Implemente adicionar
};

// --- Verificação ---
if (listaTarefas.adicionar) listaTarefas.adicionar("Estudar");
console.log(
  "17. Tarefas:",
  listaTarefas.tarefas[0] === "Estudar" ? "✅" : "❌"
);
