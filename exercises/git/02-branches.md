## 📝 02 - Trabalhando com Branches

Você já tem um projeto e quer testar uma nova funcionalidade que altera as cores do site. Como é apenas um teste, você não quer mexer na versão principal (branch `main`). 

**Objetivo**: Criar uma nova branch, fazer uma modificação nela, commitar e em seguida fazer o merge (junção) com a `main`.

1. Certifique-se de que está dentro de um repositório Git. (Você pode usar o `projeto-secreto` do exercício anterior).
2. Crie uma nova branch chamada `teste-cores` e mude para ela.
3. Modifique um arquivo existente (ex: coloque a tag `<style>body { background: blue; }</style>` no `index.html`) ou crie um arquivo `style.css`.
4. Adicione as mudanças e faça um commit com a mensagem "adiciona fundo azul".
5. Volte para a branch `main`. Se você olhar o arquivo que tinha modificado, vai notar que as mudanças de cor não estão lá! Magia do Git. 🪄
6. Junte as alterações da branch `teste-cores` na branch `main` usando o comando de merge.

**Saída esperada após o merge (`git log --oneline`)**

```
xxxxxxx (HEAD -> main, teste-cores) adiciona fundo azul
yyyyyyy primeiro commit: adiciona index.html
```

<details>
  <summary>🫣 Spoiler (Comandos base)</summary>

> 1. Verifique onde você está com `git status`.
> 2. Lembre-se do atalho incrível `git checkout -b nome-da-branch`.
> 3. Altere usando seu editor.
> 4. `git add .` seguido de `git commit -m "..."`
> 5. Para voltar, use `git checkout main`.
> 6. O comando para juntar é `git merge nome-da-branch`.

</details>
