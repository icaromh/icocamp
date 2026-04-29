/*
Objetivo: Escreva uma função buscarVarios que:

Recebe um array de URLs
Faz todas as requisições em paralelo usando Promise.all
Retorna um array com os títulos (title) de cada livro */

const urls = [
    "https://openlibrary.org/works/OL20734329W.json",
    "https://openlibrary.org/works/OL30845046W.json",
    "https://openlibrary.org/works/OL24801992W.json",
];

async function multipleBooks(urls) {
    try {
        const books = urls.map(url=> 
        fetch(url).then((response) => {
            if (response.ok) {
            return response.json();
        }
        throw new Error("Error");
    })
);
                
const results = await Promise.all(books); // Garante que seu código só continue para a próxima linha quando todas as tarefas terminarem.
const titles = results.map((book) => book.title);
return titles;
} catch (error) {
console.log(error)
return [];
}
}

multipleBooks(urls).then((titles) => {
console.log("Books found:");
titles.forEach((title) => console.log("-", title));
});