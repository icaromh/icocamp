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

const projetosEncontrados = [];

caminhosArquivos.forEach((caminho) => {
  // 1. Quebramos a string em partes usando a barra como divisor
  const partes = caminho.split("/");

  // 2. O nome do projeto está na posição de índice 1 (segundo item)
  const nomeProjeto = partes[1];

  // 3. Verificamos se o projeto já está no array para evitar duplicatas
  if (!projetosEncontrados.includes(nomeProjeto)) {
    projetosEncontrados.push(nomeProjeto);
  }
});

console.log("Projetos encontrados:", projetosEncontrados);
