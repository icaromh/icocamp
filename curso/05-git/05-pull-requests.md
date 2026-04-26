# 📘 Lição 5 — Fluxo profissional com Pull Requests

## 🎯 Objetivo desta lição

Entender o que é um Pull Request, como abrir um no GitHub, como escrever uma boa descrição e como revisar o código de outra pessoa — o fluxo usado em 99% dos times de tecnologia.

---

## Por que Pull Requests existem

Na lição anterior você aprendeu a criar branches e mergear localmente. Em times reais, porém, **ninguém mergeia diretamente na `main` sem revisão**. O processo passa por um Pull Request (PR).

Um PR é um pedido formal para que as mudanças de uma branch sejam revisadas e mergeadas em outra. Ele serve para:

- **Revisão de código**: outro dev lê e comenta suas mudanças antes de entrarem
- **Discussão**: time debate abordagens e pede ajustes
- **Documentação**: o histórico de PRs explica por que cada decisão foi tomada
- **Proteção da `main`**: código não testado ou problemático não entra sem aprovação

> **Analogia**: um PR é como enviar um texto para um editor antes de publicar. Você escreve o rascunho (branch), manda para revisão (PR), o editor comenta (code review), você ajusta, e só então vai ao ar (merge na main).

---

## Antes e depois

```txt
Antes: você trabalha sozinha, mergeando diretamente. Sem revisão, sem documentação.
Agora: cada mudança passa por um PR — rastreável, comentável, aprovável.
```

---

## O fluxo completo de um PR

```txt
1. Cria uma branch local:        git checkout -b feature/minha-feature
       ↓
2. Faz commits na branch:        git commit -m "..."
       ↓
3. Publica a branch no GitHub:   git push -u origin feature/minha-feature
       ↓
4. Abre o PR no GitHub (interface web)
       ↓
5. Outros devs revisam e comentam
       ↓
6. Você responde, ajusta e faz novos commits (eles aparecem automaticamente no PR)
       ↓
7. PR aprovado → merge no GitHub
       ↓
8. Atualiza seu local:           git checkout main && git pull
```

---

## Abrindo um PR no GitHub

Depois de fazer `git push -u origin feature/minha-feature`, o GitHub vai mostrar um banner amarelo:

> "You recently pushed branches: **feature/minha-feature** — Compare & pull request"

Clique no botão. Você vai ver o formulário de criação do PR:

### Título do PR

Deve descrever a mudança de forma clara e concisa:

| ❌ Ruim | ✅ Bom |
|---------|--------|
| `"atualização"` | `"Adiciona busca por título na estante"` |
| `"fix"` | `"Corrige duplicação de livros ao recarregar a página"` |
| `"wip"` | `"[WIP] Implementa paginação na listagem"` |

### Descrição do PR

Uma boa descrição responde três perguntas:

```markdown
## O que foi feito
Adicionei um campo de busca que filtra livros pelo título em tempo real,
sem precisar recarregar a página.

## Por que foi feito
A aluna pediu como melhoria de UX. Antes, precisava rolar a lista inteira
para encontrar um livro específico.

## Como testar
1. Abra o index.html
2. Digite parte de um título no campo de busca
3. A lista deve filtrar em tempo real
```

---

## Revisando o código de outra pessoa

No GitHub, na aba **"Files changed"** do PR, você pode:

- **Comentar em linhas específicas**: clique no `+` ao lado da linha
- **Sugerir mudanças**: use o botão "Suggestion" para propor uma edição inline
- **Aprovar ou pedir mudanças**: ao final, selecione:
  - ✅ **Approve**: está bom para mergear
  - 💬 **Comment**: tem observações, mas não bloqueia
  - ❌ **Request changes**: precisa de ajustes antes de mergear

### Boas práticas ao revisar

- **Seja específica e construtiva**: "Essa variável poderia se chamar `livrosFiltrados` para deixar mais claro o que ela contém" — não "nome ruim"
- **Separe preferências pessoais de problemas reais**: "Eu faria diferente, mas funciona" ≠ "Isso vai causar um bug"
- **Faça perguntas**: "Por que você escolheu usar `filter` aqui em vez de um `for`?" — demonstra curiosidade, não crítica

---

## Mergeando o PR

Quando aprovado, clique em **"Merge pull request"** → **"Confirm merge"**.

O GitHub cria um commit de merge automaticamente. Depois:

```bash
# Volta para a main localmente e atualiza
git checkout main
git pull

# Deleta a branch local (já foi mergeada)
git branch -d feature/minha-feature
```

---

## Convenções de PR em times reais

| Prática | Por quê |
|---------|---------|
| PR pequeno (< 400 linhas) | Mais fácil de revisar, menos chance de conflito |
| Uma feature por PR | Foco, rastreabilidade |
| Nunca mergear o próprio PR | Outro par de olhos sempre pega algo |
| Responder todos os comentários | Seja concordando ou explicando |
| Branch deletada após merge | Mantém o repositório limpo |

---

## ✍️ Exercício rápido

1. No repositório da Estante Virtual no GitHub, crie uma branch `feature/melhorar-readme`
2. Edite o `README.md` (adicione uma seção "Como contribuir")
3. Faça commit e push: `git push -u origin feature/melhorar-readme`
4. Abra um Pull Request no GitHub com título e descrição completos
5. Leia o "Files changed" como se fosse revisar o código de outra pessoa
6. Mergeia o PR pelo GitHub
7. Faça `git checkout main && git pull` para sincronizar o local

---

## 🎉 Você chegou ao fim das lições desta semana!

Agora você conhece o fluxo completo de trabalho com Git e GitHub que times profissionais usam todos os dias:

```txt
branch → commits → push → PR → review → merge → pull
```

Está pronta para o desafio da semana!

[🏁 Desafio da semana →](./desafio.md)
