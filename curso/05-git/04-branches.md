# 📘 Lição 4 — Branches: trabalhando sem medo

## 🎯 Objetivo desta lição

Entender o que são branches, por que elas existem e como criar, trocar e mergear branches — incluindo como resolver seu primeiro conflito de merge.

---

## O problema que branches resolvem

Imagine que a Estante Virtual está funcionando perfeitamente na `main`. Você quer adicionar uma nova funcionalidade: um campo de busca por título.

Sem branches, você editaria o `app.js` diretamente. Se algo der errado no meio do caminho, o código na `main` fica quebrado.

**Branches** resolvem isso: você trabalha em uma cópia paralela, e só mistura com a `main` quando tiver certeza que está funcionando.

> **Analogia**: pense em uma branch como um rascunho de um capítulo de livro. Você escreve no rascunho, revisa, e só passa a limpo quando está pronto. A versão "a limpo" (main) nunca fica bagunçada durante o processo.

---

## Antes e depois

```txt
Antes: você edita direto na main, código quebra, não tem como isolar o problema
Agora: você cria uma branch por feature, trabalha com segurança, e mergeia só quando pronto
```

---

## Criando e usando branches

### Ver as branches existentes

```bash
git branch
```

```txt
* main
```

O `*` indica em qual branch você está.

### Criar uma nova branch

```bash
git branch feature/busca-por-titulo
```

Isso **cria** a branch, mas você ainda está na `main`.

### Trocar de branch

```bash
git checkout feature/busca-por-titulo
```

Ou faça os dois de uma vez (atalho mais comum):

```bash
git checkout -b feature/busca-por-titulo
```

Confirme em qual branch você está:

```bash
git branch
```

```txt
  main
* feature/busca-por-titulo
```

---

## O fluxo completo de uma feature

```txt
1. Você está na main (código estável)
       ↓
2. git checkout -b feature/busca-por-titulo  (cria e muda para nova branch)
       ↓
3. Edita arquivos, faz commits normalmente
       ↓
4. Feature pronta e testada
       ↓
5. git checkout main  (volta para a main)
       ↓
6. git merge feature/busca-por-titulo  (traz as mudanças para a main)
       ↓
7. git branch -d feature/busca-por-titulo  (deleta a branch — já foi mergeada)
```

### Exemplo prático com comandos

```bash
# 1. Cria a branch e muda para ela
git checkout -b feature/busca-por-titulo

# 2. Edita arquivos e commita
git add app.js
git commit -m "Adiciona campo de busca por título"

git add style.css
git commit -m "Estiliza campo de busca"

# 3. Volta para a main
git checkout main

# 4. Mergeia a feature
git merge feature/busca-por-titulo

# 5. Deleta a branch (opcional, mas boa prática)
git branch -d feature/busca-por-titulo
```

---

## Merge sem conflito vs. com conflito

### Merge sem conflito (fast-forward)

Se a `main` não teve commits novos enquanto você estava na feature, o Git simplesmente avança o ponteiro:

```txt
main:    A → B
feature:          C → D

Depois do merge:
main:    A → B → C → D  ✅
```

### Merge com conflito

Conflito acontece quando **a mesma linha** foi editada em dois lugares diferentes:

```txt
main:    ... editou linha 42 de app.js
feature: ... também editou linha 42 de app.js
```

O Git para e avisa:

```txt
CONFLICT (content): Merge conflict in app.js
Automatic merge failed; fix conflicts and then commit the result.
```

O arquivo vai conter os dois lados marcados:

```js
<<<<<<< HEAD
// versão que está na main
const titulo = "Estante Virtual";
=======
// versão que está na feature
const titulo = "Minha Estante Virtual";
>>>>>>> feature/busca-por-titulo
```

**Como resolver:**

1. Abra o arquivo no editor (VS Code mostra um helper visual)
2. Escolha qual versão manter (ou combine as duas)
3. **Remova** as marcações `<<<<<<<`, `=======`, `>>>>>>>`
4. Salve o arquivo
5. `git add app.js`
6. `git commit -m "Resolve conflito de merge em app.js"`

> 💡 O VS Code tem uma interface gráfica para resolver conflitos. Quando aparecer um conflito, ele vai mostrar botões "Accept Current Change" / "Accept Incoming Change" / "Accept Both Changes".

---

## Convenção de nomes para branches

Boas equipes usam prefixos para organizar:

| Prefixo | Uso | Exemplo |
|---------|-----|---------|
| `feature/` | Nova funcionalidade | `feature/busca-por-titulo` |
| `fix/` | Correção de bug | `fix/duplicacao-livros` |
| `chore/` | Tarefas de manutenção | `chore/atualiza-dependencias` |
| `docs/` | Documentação | `docs/atualiza-readme` |

---

## ✍️ Exercício rápido

1. Na Estante Virtual, crie a branch `feature/about-page`
2. Nessa branch, crie um arquivo `about.html` com uma linha `<h1>Sobre o projeto</h1>`
3. Faça um commit: `"Adiciona página sobre o projeto"`
4. Volte para a `main` e verifique que o `about.html` **não existe** lá
5. Faça o merge da `feature/about-page` na `main`
6. Verifique que o `about.html` agora **existe** na `main`
7. Delete a branch: `git branch -d feature/about-page`

---

## Próxima lição

[Lição 5 — Fluxo profissional com Pull Requests →](./05-pull-requests.md)
