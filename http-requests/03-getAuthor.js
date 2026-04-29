/*A Open Library permite buscar livros por título ou autor.

URL de busca: https://openlibrary.org/search.json?q=emily+henry&limit=10

A resposta tem um campo docs, que é um array de livros. Cada livro possui:

title — título
author_name — array com nomes dos autores
first_publish_year — ano da primeira publicação

Objetivo: Escreva uma função buscarAutor que:

1. Recebe um nome de autor como parâmetro - ok
2. Busca livros na Open Library usando esse nome - ok
3. Retorna um array de objetos { titulo, ano } — apenas dos livros que têm first_publish_year definido
4. Ordena o resultado do mais antigo para o mais recente */

async function getAuthor(author) {
const query = author.split(" ").join("+"); //isso faz o nome virar uma url, tipo "Emily Henry" vira Emily+Henry
const url = `https://openlibrary.org/search.json?q=author:${query}&limit=10`;


try {
        const response = await fetch (url);
        if (response.ok)
        {   
            const jsonResponse = await response.json();
            const books = jsonResponse.docs
            .filter((b) => b.first_publish_year && b.author_name?.includes(author))
            .map((b)=> ({
                title: b.title,
                releasedYear: b.first_publish_year
            }))
            .sort((a, b) => a.releasedYear - b.releasedYear);
            return books;
        }
        throw new Error("Resource not found!");
} 
catch (error) {
        console.log(error);
    }
}


getAuthor("Emily Henry").then((books) => {
books.forEach((b) => console.log(`${b.releasedYear} — ${b.title}`));
});