/*POST https://jsonplaceholder.typicode.com/posts
Ele espera um body JSON com qualquer objeto, e retorna o objeto criado com um id adicionado.

Objetivo: Escreva uma função criarPost que:

1. Recebe um objeto { title, body, userId } como parâmetro - ok
2. Faz uma requisição POST para o endpoint acima - ok
3. Envia o objeto como JSON no corpo da requisição - ok
4. Inclui o header Content-Type: application/json - ok
5. Retorna o objeto criado (com o id que o servidor adicionou) */


async function newPost (post) {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(post)
        })

        if(response.ok)
        {
            const jsonResponse = await response.json();
            return jsonResponse;
        }
        throw new Error ("Error!");
    }
    catch(error) {
        console.log (error);
    }
} 

newPost({
    title: "Minha Estante Virtual",
    body: "Uma aplicação para organizar livros lidos e não lidos.",
    userId: 1,
    }).then((post) => {
    console.log("Post criado com id:", post.id);
    console.log("Título:", post.title);
});