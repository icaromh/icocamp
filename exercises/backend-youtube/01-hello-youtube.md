## 📝 01. Hello YouTube

Todo canal tem um começo! Antes de gravarmos nosso primeiro vídeo, precisamos preparar a câmera e o estúdio. Aqui, nosso estúdio é um servidor HTTP.

**Dado inicial**

```javascript
// Nenhum código inicial para este!
// Lembre-se de importar o express, inicializar o app e ouvir numa porta.
```

**Objetivo**: Criar o servidor Express básico e uma rota `GET /` que retorna uma mensagem de boas-vindas.

1. Importe o `express`.
2. Inicialize o aplicativo com `express()`.
3. Crie uma rota `GET` no caminho raiz (`/`) que responda com a string: `"Bem-vindo ao meu canal!"`.
4. Inicie o servidor na porta `3000`.

**Template**

```javascript
const express = require('express');
const app = express();

// Seu código aqui (Definição da rota GET /)

// Seu código aqui (Iniciar o servidor na porta 3000)
```

**Saída esperada**

Ao acessar `http://localhost:3000` no navegador, você deve ver:
```
Bem-vindo ao meu canal!
```

<details>
  <summary>🫣 Spoiler</summary>

> 1. Use `app.get('/', (req, res) => { ... })` para definir a rota principal.
> 2. Use `res.send("mensagem")` para enviar a resposta.
> 3. Use `app.listen(3000, () => { ... })` para ligar o servidor.

</details>
