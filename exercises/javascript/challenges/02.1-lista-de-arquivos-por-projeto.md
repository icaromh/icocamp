## Desafio 2: Agrupamento por Projeto

### O Objetivo

Agora, crie um **objeto** onde a **chave** é o nome do projeto e o **valor** dessa propriedade é uma lista (array) contendo todos os caminhos de arquivos pertencentes a esse projeto.

### Saída esperada no console

```javascript
{
  "loja-cliente": [
    "apps/loja-cliente/src/components/Button/PrimaryButton.js",
    "apps/loja-cliente/src/pages/Home/HeroSection.js",
    "apps/loja-cliente/src/hooks/useCart.js"
  ],
  "painel-admin": [
    "apps/painel-admin/src/api/auth.ts",
    "apps/painel-admin/src/utils/formatters.ts"
  ],
  "checkout-api": [
    "apps/checkout-api/src/services/payment-gateway.js"
  ],
  "ui-kit": [
    "packages/ui-kit/src/Header/Navbar.tsx",
    "packages/ui-kit/src/Footer/Links.tsx"
  ],
  "design-tokens": [
    "packages/design-tokens/colors.json",
    "packages/design-tokens/typography.json"
  ],
  "auth-lib": [
    "packages/auth-lib/index.js"
  ],
  "mobile-app": [
    "apps/mobile-app/src/screens/Login.tsx"
  ]
}

```

<details>
<summary>Dicas para Resolução</summary>

Para resolver este exercício, você precisará:

- Criar um objeto vazio para iniciar.
- Durante a iteração, verificar se a chave (nome do projeto) já existe no seu objeto.
- Se não existir, crie a chave e atribua um array vazio `[]`.
- Adicione o caminho atual ao array correspondente usando `.push()`.

</details>
