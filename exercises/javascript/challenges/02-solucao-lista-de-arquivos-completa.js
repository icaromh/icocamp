/*
Imagine que você está trabalhando em um sistema que utiliza uma estrutura de Monorepo. 
Isso significa que dentro de uma única pasta principal, existem várias sub-pastas que representam projetos independentes, 
divididos entre apps (aplicativos para o usuário) e packages (bibliotecas compartilhadas).

Sua tarefa é ler uma lista de caminhos de arquivos e identificar quais são os nomes dos projetos únicos que existem nesse repositório,
além de organizar os arquivos por projeto.

Desafio 1: Lista de Projetos Únicos
O Objetivo
Extrair o nome de cada projeto da lista e armazená-los em um array, garantindo que não existam nomes repetidos.

Extrair o Projeto: Para cada caminho na lista, o nome do projeto é sempre o segundo item da string (exemplo: em apps/loja-cliente/..., o projeto é loja-cliente).
Lista Única: Você deve criar um novo array chamado projetosEncontrados.
Sem Duplicatas: Mesmo que um projeto apareça em vários caminhos, ele deve constar apenas uma vez no seu array final.

*/

//lista de dados
const caminhosArquivos = [
    "apps/loja-cliente/src/components/Button/PrimaryButton.js",
    "apps/loja-cliente/src/components/Button/PrimaryButton.js",
    "apps/loja-cliente/src/pages/Home/HeroSection.js",
    "apps/painel-admin/src/api/auth.ts",
    "apps/painel-admin/src/utils/formatters.ts",
    "apps/checkout-api/src/services/payment-gateway.js",
    "apps/checkout-api/src/services/payment-gateway.js",
    "packages/ui-kit/src/Header/Navbar.tsx",
    "packages/ui-kit/src/Footer/Links.tsx",
    "packages/design-tokens/colors.json",
    "packages/design-tokens/typography.json",
    "apps/loja-cliente/src/hooks/useCart.js",
    "packages/auth-lib/index.js",
    "apps/mobile-app/src/screens/Login.tsx",
];

const projetosEncontrados = [];

caminhosArquivos.forEach((caminho) => {
    let projeto = caminho.split('/'); //variável para receber a URL (string) em um array picotado    
    if (!projetosEncontrados.includes(projeto[1])) {
        projetosEncontrados.push(projeto[1]);
    }
}
);

console.log(projetosEncontrados);

const listaProjetos = {};

for (let projeto of projetosEncontrados) {
    listaProjetos[projeto] = encontrarArquivos(projeto, caminhosArquivos);
}

function encontrarArquivos(projeto, caminhosArquivos) {
    return caminhosArquivos.filter(caminho => {
        return caminho.split("/")[1] === projeto;
    })
}

console.log(listaProjetos);