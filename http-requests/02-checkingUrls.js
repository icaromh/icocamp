/*Nem toda requisição HTTP dá certo. O fetch não lança erro automaticamente quando o servidor responde com um status de 
falha (como 404 ou 500) — você precisa verificar response.ok.

URL que retorna 404 (não encontrada)

https://openlibrary.org/works/ID_INVALIDO.json
Objetivo: Escreva uma função buscarComSeguranca que:

Faz a requisição para a URL recebida como parâmetro
Verifica se response.ok é true
Se não for, lança um Error com a mensagem "Recurso não encontrado: <status>"
Se der certo, retorna o JSON
Envolve tudo em try/catch e imprime o erro no console caso ocorra */


async function safeFetch(url) {
    try {
        const response = await fetch (url);
        if (response.ok)
        {
            const jsonResponse = await response.json();
            return jsonResponse;
        }
        throw new Error(`Resource not found: ${response.status}`);
    } catch (error) {
        console.log(error);
    }
}

//Test 1: valid URL
safeFetch("https://openlibrary.org/works/OL20734329W.json")
.then((data) => console.log("Sucesso:", data?.title));

//Test 2: URL inválida
safeFetch("https://openlibrary.org/works/ID_INVALIDO.json")
.then((data) => console.log("Resultado:", data));