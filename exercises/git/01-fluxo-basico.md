## 📝 01 - O Fluxo Básico

Você está começando um projeto novo no seu computador chamado `projeto-secreto`. Sua tarefa é inicializar o repositório, criar um arquivo e fazer o primeiro commit.

**Objetivo**: Realizar o ciclo completo de versionamento (`init`, `status`, `add`, `commit`) de um novo arquivo em um repositório vazio.

1. Crie uma pasta chamada `projeto-secreto` e entre nela.
2. Inicie um novo repositório Git nessa pasta.
3. Crie um arquivo chamado `index.html` (não precisa colocar nada dentro dele, se não quiser, ou coloque apenas a estrutura básica do HTML).
4. Verifique o estado do repositório.
5. Adicione o arquivo `index.html` à staging area (área de preparação).
6. Faça um commit com a mensagem "primeiro commit: adiciona index.html".
7. Verifique o histórico para confirmar que o commit foi feito.

**Saída esperada ao verificar o histórico (`git log`)**

```
commit xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx (HEAD -> main)
Author: Seu Nome <seu.email@exemplo.com>
Date:   Data e Hora

    primeiro commit: adiciona index.html
```

<details>
  <summary>🫣 Spoiler (Comandos base)</summary>

> 1. Use `mkdir` e `cd` no terminal.
> 2. Lembre-se do comando que tem `init`.
> 3. Use `touch index.html` ou crie no seu editor.
> 4. É aquele comando que a gente usa o tempo todo para ver como as coisas estão (`status`).
> 5. Use o `add`.
> 6. O comando de salvar a "foto" (`commit -m "mensagem"`).
> 7. `log`.

</details>
