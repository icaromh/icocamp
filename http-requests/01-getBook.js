/* Você vai buscar informações de um livro usando a Open Library API.

A URL abaixo retorna dados sobre o livro "Beach Read": https://openlibrary.org/works/OL20734329W.json

Objetivo: Escreva uma função buscarLivro que:
    1) Faça uma requisição GET para a URL acima
    2) Converta a resposta para JSON
    3) Retorne o objeto com os dados
*/


async function getBook(url) {
    try {
        const response = await fetch(url);
        if(response.ok){
            const jsonResponse = await response.json();
            return jsonResponse;
        }
        throw new Error ('Request failure!');
    }
    catch (error) {
        console.log(error)
    }
}

getBook("https://openlibrary.org/works/OL20734329W.json")
.then((book) => console.log("Título:", book.title));

