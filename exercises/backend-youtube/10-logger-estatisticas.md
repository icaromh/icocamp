## 📝 10. Logger de Estatísticas

Todo servidor profissional precisa de *logs* (registros de atividades). O YouTube precisa saber quem acessa o quê e quando.

**Objetivo**: Criar um *Middleware Global* (`app.use`) que loga no console cada requisição feita ao servidor no formato `[DATA] MÉTODO /rota`.

1. Logo no começo do arquivo (após inicializar o `app`), crie um middleware com `app.use()`.
2. Essa função deve receber `req, res, next`.
3. Pegue a data atual (Dica: `new Date().toISOString()`).
4. Pegue o método (`req.method`) e a rota (`req.url`).
5. Faça um `console.log` com essas informações.
6. **Não esqueça de chamar `next()`** para que as rotas originais voltem a funcionar!

**Template**

```javascript
app.use((req, res, next) => {
  // 1. Logar informacoes da requisicao
  // 2. Chamar o proximo da fila
});
```

**Saída esperada**

No seu terminal (onde o Node está rodando), toda vez que você fizer uma requisição no navegador/Insomnia, deve aparecer algo como:
```
[2024-05-10T14:32:00.000Z] GET /videos
[2024-05-10T14:33:05.123Z] POST /videos
[2024-05-10T14:34:10.999Z] DELETE /videos/1
```

<details>
  <summary>🫣 Spoiler</summary>

> 1. O código fica assim: `console.log(\`[${new Date().toISOString()}] ${req.method} ${req.url}\`);`
> 2. Se a sua requisição ficar carregando eternamente, é porque você esqueceu do `next()`. O Express precisa dessa permissão para prosseguir.

</details>
