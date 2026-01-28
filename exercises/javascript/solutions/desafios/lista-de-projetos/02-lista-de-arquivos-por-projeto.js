/**
 * DADOS DE ENTRADA
 */
const caminhosArquivos = [
  "apps/loja-cliente/src/components/Button/PrimaryButton.js",
  "apps/loja-cliente/src/pages/Home/HeroSection.js",
  "apps/painel-admin/src/api/auth.ts",
  "apps/painel-admin/src/utils/formatters.ts",
  "apps/checkout-api/src/services/payment-gateway.js",
  "packages/ui-kit/src/Header/Navbar.tsx",
  "packages/ui-kit/src/Footer/Links.tsx",
  "packages/design-tokens/colors.json",
  "packages/design-tokens/typography.json",
  "apps/loja-cliente/src/hooks/useCart.js",
  "packages/auth-lib/index.js",
  "apps/mobile-app/src/screens/Login.tsx",
];

const arquivosPorProjeto = {};

caminhosArquivos.forEach((caminho) => {
  const partes = caminho.split("/");
  const nomeProjeto = partes[1];

  // Verificamos se o objeto 'arquivosPorProjeto' já tem uma "gaveta" (chave)
  // com o nome desse projeto.
  if (arquivosPorProjeto[nomeProjeto] === undefined) {
    // Se estiver undefined, significa que é a primeira vez que vemos este projeto.
    // Então, criamos um array vazio para ele.
    arquivosPorProjeto[nomeProjeto] = [];
  }

  // Agora que garantimos que a chave existe e é um array,
  // basta adicionar o caminho atual dentro dela.
  arquivosPorProjeto[nomeProjeto].push(caminho);
});

console.log("Arquivos agrupados:", arquivosPorProjeto);

/*
  DICA PARA O ALUNO:
  No Desafio 2, usamos o conceito de "Dicionário". 
  A estrutura arquivosPorProjeto[nomeProjeto] permite acessar o valor
  diretamente pelo nome, sem precisar percorrer listas inteiras.
*/
