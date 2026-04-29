# ❓ FAQ — Semana 7: Node.js e Express

Dúvidas comuns de quem está criando um servidor pela primeira vez.

---

## 🔧 Ambiente e configuração

### "Como sei se o Node.js está instalado?"

Abra o terminal e rode:

```bash
node --version
npm --version
```

Se aparecer algo como `v20.11.0` e `10.2.3`, está tudo certo. Se der `command not found`, acesse [nodejs.org](https://nodejs.org) e instale a versão **LTS**.

---

### "Qual versão do Node.js devo usar?"

Use a versão **LTS** (Long Term Support) mais recente. No momento da escrita deste material, é a v22.

**Por que LTS?** É a versão com suporte de longo prazo — mais estável, menos bugs, mais documentação. Versões ímpares (v19, v21) são experimentais.

O `--watch` (reinício automático) exige Node.js v18+. Se você tem v16 ou anterior, atualize ou instale o `nodemon`:

```bash
npm install --save-dev nodemon
# e no package.json: "dev": "nodemon server.js"
```

---

### "Por que preciso do `"type": "module"` no `package.json`?"

O Node.js tem dois sistemas de módulos:

- **CommonJS** (padrão antigo): usa `require()` e `module.exports`
- **ES Modules** (padrão moderno): usa `import` e `export`

Sem `"type": "module"`, o Node.js assume que você está usando CommonJS. Se tentar usar `import`, receberá um erro:

```
SyntaxError: Cannot use import statement in a module
```

Com `"type": "module"` no `package.json`, o Node.js entende todos os arquivos `.js` como ES Modules.

> Usamos ES Modules porque é o mesmo sistema usado no React (semana 9). Aprender uma coisa só.

---

### "O que é `package-lock.json`? Posso deletar?"

O `package-lock.json` registra as versões **exatas** de cada pacote instalado (e de todas as dependências das dependências).

- `package.json` diz: "preciso do express versão 5 ou compatível"
- `package-lock.json` diz: "instalei exatamente a versão 5.0.1, e ela usou o pacote X na versão 2.3.1..."

**Não delete.** Ele garante que outras pessoas instalem exatamente o que você testou. Deve ir para o Git (ao contrário do `node_modules`).

---

### "O que é `node_modules` e por que é tão grande?"

É onde o npm baixa as bibliotecas instaladas. O Express parece pequeno, mas ele depende de outras bibliotecas, que dependem de outras, e assim por diante.

**Regra**: nunca edite arquivos dentro de `node_modules`, nunca o envie para o Git.

Se deletar acidentalmente, basta rodar `npm install` para baixar tudo de novo com base no `package.json`.

---

### "Preciso rodar `npm install` toda vez?"

Não — só quando:

1. Você acabou de clonar o projeto (o `node_modules` não veio junto)
2. Alguém adicionou uma nova dependência e você atualizou o repositório
3. Você deletou o `node_modules` por algum motivo

Para o desenvolvimento do dia a dia, basta `npm run dev`.

---

## 🚀 Rodando o servidor

### "Como paro o servidor que está rodando?"

No terminal onde o servidor está rodando, pressione **Ctrl + C**.

---

### "Mudei o `server.js` mas o servidor não atualizou."

Você provavelmente iniciou com `npm start` (que usa `node server.js`) em vez de `npm run dev` (que usa `node --watch server.js`).

- `npm start` → inicia o servidor, não reinicia ao salvar
- `npm run dev` → reinicia automaticamente ao salvar o arquivo

Use `npm run dev` durante o desenvolvimento.

---

### "Erro: `address already in use :::3000`"

Outro processo já está usando a porta 3000. Soluções:

**Opção 1** — Encerrar o processo na porta 3000:

```bash
# Mac/Linux
lsof -ti:3000 | xargs kill

# Windows
netstat -ano | findstr :3000
# anote o PID e rode:
taskkill /PID <número> /F
```

**Opção 2** — Mudar a porta no `server.js`:

```js
const PORT = 3001; // use outra porta
```

---

### "O que é `localhost`? O que é `127.0.0.1`?"

São a mesma coisa — ambos apontam para **o próprio computador**.

Quando você roda um servidor na sua máquina e acessa `http://localhost:3000`, o browser está se comunicando com um programa rodando **no seu próprio computador**, não na internet.

---

### "Posso acessar o servidor de outro computador ou celular?"

Sim, se estiver na mesma rede Wi-Fi. Em vez de `localhost`, use o IP local da sua máquina:

```bash
# Mac
ipconfig getifaddr en0

# Windows
ipconfig
```

Supondo que seu IP seja `192.168.1.5`:

```
http://192.168.1.5:3000
```

---

## 📦 Express e rotas

### "Qual a diferença entre `import` e `require`?"

Fazem a mesma coisa (importar módulos), mas são sistemas diferentes:

```js
// CommonJS (antigo — não usamos aqui)
const express = require("express");

// ES Modules (moderno — o que usamos)
import express from "express";
```

Se usar `require` com `"type": "module"` no `package.json`, receberá um erro. Escolha um sistema e mantenha consistência no projeto.

---

### "O que é `app.use()` e quando uso em vez de `app.get()`?"

- `app.get()`, `app.post()`, `app.patch()`, `app.delete()` → registram rotas para **métodos HTTP específicos**
- `app.use()` → registra **middlewares** que rodam para **todas as requisições**, independente do método

```js
// Só roda em GET /livros
app.get("/livros", (req, res) => { ... });

// Roda em QUALQUER requisição que passar por aqui
app.use(express.json());
```

A ordem importa: `app.use(express.json())` deve vir **antes** das rotas que leem `req.body`.

---

### "Por que `req.body` é `undefined`?"

Porque você esqueceu de registrar o middleware `express.json()` antes das rotas:

```js
// ✅ Correto — middleware ANTES das rotas
app.use(express.json());

app.post("/livros", (req, res) => {
  console.log(req.body); // ← funciona
});
```

```js
// ❌ Errado — middleware DEPOIS da rota
app.post("/livros", (req, res) => {
  console.log(req.body); // ← undefined!
});

app.use(express.json()); // tarde demais
```

---

### "Qual a diferença entre `req.params`, `req.query` e `req.body`?"

São três lugares diferentes onde dados chegam numa requisição:

| Onde | Como chega | Exemplo de URL/código |
|------|-----------|----------------------|
| `req.params` | Parte da URL após `:` | `/livros/:id` → `/livros/1` → `req.params.id === "1"` |
| `req.query` | Após o `?` na URL | `/livros?lido=true` → `req.query.lido === "true"` |
| `req.body` | Corpo da requisição (POST/PATCH) | `fetch(..., { body: JSON.stringify({titulo: "..."}) })` |

```js
// GET /livros/3?lido=true
app.get("/livros/:id", (req, res) => {
  req.params.id    // → "3"  (string!)
  req.query.lido   // → "true"  (string!)
  req.body         // → undefined (GET não tem body)
});
```

---

### "Por que faço `Number(req.params.id)`? Não é já um número?"

Não! **Tudo que vem da URL é string.** Mesmo que o usuário acesse `/livros/1`, `req.params.id` será a string `"1"`, não o número `1`.

O problema aparece na comparação:

```js
const id = req.params.id; // → "1" (string)
const livro = livros.find((l) => l.id === id);
// → undefined! Porque 1 !== "1"
```

Por isso sempre converta:

```js
const id = Number(req.params.id); // → 1 (número)
const livro = livros.find((l) => l.id === id);
// → encontra corretamente ✅
```

---

### "Minha rota não está sendo chamada, o que pode ser?"

Causas comuns:

1. **Método errado**: você registrou `app.get()` mas está testando com POST, ou vice-versa
2. **URL errada**: tem um erro de digitação na URL (`/livrro` vs `/livro`)
3. **Ordem das rotas**: rotas mais específicas devem vir antes das mais genéricas (ex: `/livros/aleatorio` deve vir antes de `/livros/:id`, ou o `:id` captura "aleatorio")
4. **Servidor não foi reiniciado** com as mudanças mais recentes

---

### "O que é `return res.status(404).json(...)`? Por que o `return`?"

O `return` garante que a função para de executar **após enviar a resposta**. Sem ele, o código continua e tenta enviar uma segunda resposta — o que causa um erro:

```js
// ❌ Errado — pode tentar enviar duas respostas
app.get("/livros/:id", (req, res) => {
  const livro = livros.find((l) => l.id === id);
  if (!livro) {
    res.status(404).json({ error: "não encontrado" });
    // a função continua aqui!
  }
  res.json(livro); // ← segunda resposta = erro
});

// ✅ Correto — return interrompe a execução
app.get("/livros/:id", (req, res) => {
  const livro = livros.find((l) => l.id === id);
  if (!livro) {
    return res.status(404).json({ error: "não encontrado" }); // para aqui
  }
  res.json(livro); // só chega aqui se o livro foi encontrado
});
```

---

## 🗄️ Dados e memória

### "Por que os dados somem quando reinicio o servidor?"

Porque os livros estão salvos em uma variável JavaScript (`let livros = []`) que vive **na memória RAM** do processo. Quando o processo para, a memória é liberada.

Isso é **proposital** para esta semana — é mais simples e foca nos conceitos de HTTP e rotas. Na semana 8, os dados vão para um banco de dados que persiste no disco.

---

### "Qual a diferença entre `find` e `findIndex`?"

- `find` → retorna **o objeto** encontrado (ou `undefined`)
- `findIndex` → retorna **a posição** no array (ou `-1`)

```js
const livros = [
  { id: 1, titulo: "Beach Read" },
  { id: 2, titulo: "Book Lovers" },
];

livros.find((l) => l.id === 1);      // → { id: 1, titulo: "Beach Read" }
livros.findIndex((l) => l.id === 1); // → 0 (índice no array)
```

Use `find` quando quiser **ler** um livro. Use `findIndex` quando precisar **modificar ou deletar** (você precisa do índice para `splice` ou para editar `livros[indice]`).

---

### "O que é `splice`? Por que não uso `filter` para deletar?"

`splice` **modifica o array original** removendo elementos. `filter` cria um **novo array** sem o elemento.

```js
// Com splice — modifica o array livros (o que queremos)
livros.splice(indice, 1);

// Com filter — cria um novo array e reatribui (também funciona)
livros = livros.filter((l) => l.id !== id);
```

Ambas funcionam. O `splice` é mais eficiente em memória (não cria um array novo). O `filter` é mais legível para quem vem do estilo funcional da semana 1.

---

### "O que é `...livros[indice]` na atualização? O que `...` faz?"

O `...` (spread operator) **copia todas as propriedades** de um objeto para outro:

```js
const livroAtual = { id: 1, titulo: "Beach Read", lido: false };
const atualizacao = { lido: true };

const livroAtualizado = { ...livroAtual, ...atualizacao };
// → { id: 1, titulo: "Beach Read", lido: true }
```

As propriedades do segundo objeto **sobrescrevem** as do primeiro quando têm o mesmo nome. Isso permite atualizar apenas os campos enviados, sem tocar nos outros.

---

### "Qual a diferença entre `PATCH` e `PUT`?"

| Método | O que faz | Exemplo |
|--------|-----------|---------|
| `PUT` | Substitui o recurso **inteiro** | Se não enviar `titulo`, ele some |
| `PATCH` | Atualiza **apenas os campos enviados** | Os outros campos ficam intactos |

Para o nosso caso, `PATCH` é mais adequado — o usuário pode querer só marcar um livro como lido sem precisar reenviar título, autora e páginas.

---

## 🧪 Testando a API

### "O curl não funciona no Windows, o que faço?"

O `curl` existe no Windows 10+ (PowerShell ou CMD), mas a sintaxe de aspas pode ser diferente. Se tiver problemas, use o **Hoppscotch**:

1. Acesse [hoppscotch.io](https://hoppscotch.io)
2. Selecione o método (GET, POST, etc.)
3. Digite a URL (`http://localhost:3000/livros`)
4. Para POST/PATCH: vá em "Body" → selecione "JSON" → escreva o JSON
5. Clique em "Send"

É mais visual que o curl e não tem problemas de aspas.

---

### "O que é status `204 No Content`? Por que o DELETE retorna isso?"

`204` significa "deu certo, mas não tenho nada para te enviar".

O DELETE não precisa retornar os dados do livro deletado — ele já foi removido. Retornar um corpo vazio com status `204` é a convenção REST padrão para deleções bem-sucedidas.

Alguns desenvolvedores preferem retornar `200` com uma mensagem `{ "mensagem": "Livro removido" }`. Ambos são válidos — o importante é ser consistente.

---

### "Como vejo o que o servidor recebeu? Tipo um `console.log` do backend?"

Adicione `console.log` dentro das rotas. Tudo que você logar aparece no **terminal onde o servidor está rodando**, não no browser:

```js
app.post("/livros", (req, res) => {
  console.log("Body recebido:", req.body);     // ← aparece no terminal
  console.log("Headers:", req.headers);         // ← aparece no terminal
  res.status(201).json(novoLivro);
});
```

---

## 🐛 Erros comuns

### `Cannot find module 'express'`

O Express não foi instalado nesta pasta. Verifique se está na pasta certa e rode:

```bash
npm install express
```

---

### `SyntaxError: Cannot use import statement in a module`

Você usou `import` mas esqueceu de adicionar `"type": "module"` no `package.json`. Adicione e salve o arquivo.

---

### `SyntaxError: Named export 'Router' not found`

Você está misturando sintaxes. Com `"type": "module"`, use:

```js
import express from "express"; // ✅
```

E não:

```js
const express = require("express"); // ❌ — mistura CommonJS com ES Modules
```

---

### `TypeError: app.listen is not a function`

Você chamou `express` como função mas não criou o app corretamente:

```js
// ❌ Errado
import express from "express";
express.listen(3000); // listen não existe no módulo express

// ✅ Correto
import express from "express";
const app = express(); // cria a aplicação primeiro
app.listen(3000);      // aí sim
```

---

### O servidor inicia mas ao acessar no browser aparece "Cannot GET /"

Você não registrou a rota `/`. Isso é esperado se seu servidor só tem `/livros`. Acesse diretamente `http://localhost:3000/livros`.

Ou adicione uma rota inicial:

```js
app.get("/", (req, res) => {
  res.json({ mensagem: "API da Minha Estante Virtual" });
});
```
