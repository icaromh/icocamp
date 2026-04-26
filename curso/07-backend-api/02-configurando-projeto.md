# 📘 Lição 2 — Configurando o projeto

## 🎯 Objetivo desta lição

Criar a estrutura de um projeto Node.js do zero, instalar o Express e entender o que cada arquivo faz.

---

## Estrutura final do projeto

Ao final desta semana, o projeto terá essa estrutura:

```
estante-api/
├── package.json
├── package-lock.json
├── node_modules/       ← criado automaticamente, não editar
└── server.js
```

---

## Passo 1 — Criar a pasta do projeto

Abra o terminal e crie uma pasta nova:

```bash
mkdir estante-api
cd estante-api
```

> **Por que uma pasta separada?** Cada projeto Node.js tem suas próprias dependências. Manter projetos separados evita conflitos entre pacotes.

---

## Passo 2 — Inicializar o npm

O **npm** (Node Package Manager) é o gerenciador de pacotes do Node.js. Ele é responsável por:

- registrar quais bibliotecas seu projeto usa
- instalar e atualizar essas bibliotecas
- definir scripts úteis (como `npm start`)

Para inicializar:

```bash
npm init -y
```

O `-y` responde "sim" para todas as perguntas automaticamente.

Isso cria o arquivo `package.json`:

```json
{
  "name": "estante-api",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

---

## O que é o `package.json`?

É o **documento de identidade** do projeto. Ele registra:

- o nome e versão do projeto
- as dependências (bibliotecas que o projeto precisa)
- scripts úteis

Pense nele como o `localStorage` do seu projeto — um lugar centralizado onde ficam as informações importantes.

---

## Passo 3 — Habilitar ES Modules

Por padrão, o Node.js usa o sistema `require()` para importar arquivos. Mas neste bootcamp usamos a sintaxe moderna `import/export`, a mesma que você usará no React.

Adicione `"type": "module"` no `package.json`:

```json
{
  "name": "estante-api",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "start": "node server.js",
    "dev": "node --watch server.js"
  }
}
```

> O script `"dev": "node --watch server.js"` faz o servidor reiniciar automaticamente quando você salva o arquivo. Disponível no Node.js v18+.

---

## Passo 4 — Instalar o Express

O **Express** é uma biblioteca que facilita a criação de servidores HTTP. Sem ele, teríamos que escrever muito mais código para fazer a mesma coisa.

```bash
npm install express
```

Isso faz três coisas:

1. Baixa o Express e suas dependências para a pasta `node_modules/`
2. Adiciona o Express no `package.json` como dependência
3. Cria o `package-lock.json` (registro exato das versões instaladas)

Após instalar, o `package.json` ficará assim:

```json
{
  "name": "estante-api",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "start": "node server.js",
    "dev": "node --watch server.js"
  },
  "dependencies": {
    "express": "^5.0.1"
  }
}
```

---

## O que é `node_modules`?

É a pasta onde o npm baixa todas as bibliotecas instaladas. Ela pode conter centenas de arquivos — mas você **nunca edita nada dentro dela**.

> **Regra importante**: o `node_modules` nunca vai para o GitHub.

Para isso, crie um arquivo `.gitignore` na raiz do projeto:

```bash
# Crie o arquivo .gitignore
echo "node_modules" > .gitignore
```

Conteúdo do `.gitignore`:

```
node_modules
```

Quando outra pessoa clonar o projeto, ela roda `npm install` e o npm baixa tudo novamente a partir do `package.json`.

---

## Passo 5 — Criar o arquivo principal

Crie o arquivo `server.js` (vazio por enquanto):

```bash
touch server.js
```

---

## Resumo dos comandos desta lição

```bash
mkdir estante-api        # cria a pasta
cd estante-api           # entra na pasta
npm init -y              # inicializa o projeto
npm install express      # instala o Express
echo "node_modules" > .gitignore   # ignora node_modules no git
touch server.js          # cria o arquivo principal
```

---

## ✍️ Checklist antes de continuar

- [ ] A pasta `estante-api` existe
- [ ] O `package.json` foi criado com `"type": "module"`
- [ ] O Express foi instalado (`node_modules/express` existe)
- [ ] O `.gitignore` contém `node_modules`
- [ ] O `server.js` foi criado (pode estar vazio)

---

## Próxima lição

[Lição 3 — Criando o servidor Express →](./03-servidor-express.md)
