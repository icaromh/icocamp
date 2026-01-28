/*
Dado um objeto estoque onde a chave é o produto e o valor é a quantidade, crie uma função verificarEstoque(produto) 
que retorna "Disponível" se > 0 ou "Esgotado".
*/

const estoque = {
    notebook: 5,
    mouse: 0,
};

function verificarEstoque(produto) {
    if (estoque[produto] > 0) {
        return 'Disponível';
    } else {
        return 'Esgotado';
    }
}

// --- Verificação ---
console.log(
    "18. Estoque:",
    verificarEstoque("notebook") === "Disponível" &&
        verificarEstoque("mouse") === "Esgotado"
        ? "✅"
        : "❌"
);


