# 📘 Lição 1 — Por que precisamos de Git?

## 🎯 Objetivo desta lição

Entender o problema que o Git resolve e criar o primeiro repositório da Estante Virtual com seus primeiros commits.

---

## O problema que você provavelmente já viveu

Você já fez isso?

```txt
estante.js
estante_v2.js
estante_final.js
estante_FINAL_de_verdade.js
estante_copia_antes_de_mudar.js
```

Ou pior: editou algo, quebrou tudo, e não conseguiu voltar para como estava antes?

Isso é o que acontece **sem controle de versão**. O Git resolve exatamente esse problema — mas de um jeito muito mais poderoso do que copiar arquivos.

---

## Antes e depois

O Git muda completamente a forma como você trabalha:

```txt
Antes: você tem medo de mudar código porque pode quebrar tudo
Agora: você muda código com confiança porque pode voltar a qualquer ponto
```

---

## O que é Git (de verdade)

Git é um **sistema de controle de versão**. Ele salva o histórico completo do seu projeto, não só os arquivos — cada mudança, quem fez, quando fez e por quê.

> **Git não é backup.** Backup é uma cópia passiva. Git é uma **linha do tempo ativa** do seu código, onde cada ponto é uma decisão consciente.

Pense assim: Git é como o histórico de edições do Google Docs, mas para código — e muito mais poderoso.

---

## Seus primeiros comandos

### 1. Configuração inicial (só uma vez por computador)

Antes de tudo, diga ao Git quem você é:

```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu-email@exemplo.com"
```

Você pode verificar se funcionou:

```bash
git config --global user.name
# Seu Nome
```

### 2. Inicializando o repositório

Entre na pasta da Estante Virtual e rode:

```bash
git init
```

Isso cria uma pasta oculta `.git/` que guarda **todo o histórico** do projeto. Você nunca precisará mexer nela diretamente.

### 3. Verificando o estado atual

```bash
git status
```

O Git vai te mostrar todos os arquivos que ainda não estão sendo rastreados. A saída será algo como:

```txt
On branch main

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        index.html
        style.css
        app.js

nothing added to commit but untracked files present
```

> 💡 **Dica de ouro:** rode `git status` antes e depois de qualquer outro comando. O Git sempre te diz o que fazer a seguir.

### 4. Adicionando arquivos ao "estágio"

Para incluir arquivos no próximo commit:

```bash
git add index.html
git add style.css
git add app.js
```

Ou adicionar tudo de uma vez:

```bash
git add .
```

### 5. Criando o primeiro commit

Um commit é uma "foto" do estado atual do projeto. Cada commit tem uma mensagem que explica o que mudou:

```bash
git commit -m "Adiciona estrutura inicial da Estante Virtual"
```

Verifique que funcionou:

```bash
git log
```

A saída mostra seu primeiro commit com hash, autor, data e mensagem:

```txt
commit a3f8c91d4e... (HEAD -> main)
Author: Seu Nome <seu-email@exemplo.com>
Date:   Mon Apr 27 2026

    Adiciona estrutura inicial da Estante Virtual
```

---

## Boas mensagens de commit

A mensagem do commit é uma comunicação — para você do futuro, para colegas de equipe, para entrevistadores que vão ler seu GitHub.

| ❌ Mensagem ruim | ✅ Mensagem boa |
|---|---|
| `"salvo"` | `"Adiciona formulário de cadastro de livros"` |
| `"mudei coisas"` | `"Corrige bug de duplicação ao adicionar livro"` |
| `"commit"` | `"Estiliza cards de livro com CSS Grid"` |
| `"final"` | `"Persiste livros no LocalStorage"` |

**Convenção:** verbo no presente, em inglês ou português (escolha um e mantenha), descrevendo **o que** foi feito.

---

## ✍️ Exercício rápido

1. Entre na pasta da Estante Virtual (ou crie uma pasta `estante-virtual/` com um arquivo `index.html` simples)
2. Rode `git init`
3. Rode `git status` e leia a saída com atenção
4. Adicione todos os arquivos com `git add .`
5. Crie o primeiro commit: `git commit -m "Adiciona estrutura inicial da Estante Virtual"`
6. Rode `git log` para ver seu primeiro commit

---

## Próxima lição

[Lição 2 — O ciclo de vida de uma mudança →](./02-ciclo-de-vida.md)
