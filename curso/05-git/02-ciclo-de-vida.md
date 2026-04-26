# 📘 Lição 2 — O ciclo de vida de uma mudança

## 🎯 Objetivo desta lição

Entender o modelo mental de três zonas do Git (Working Directory, Staging Area e Repositório) e fazer commits atômicos e legíveis com confiança.

---

## O modelo de três zonas

Na lição anterior você usou `git add` e `git commit` sem entender exatamente o que cada um faz. Agora vamos ver por baixo dos panos.

O Git divide o trabalho em **três zonas**:

```txt
┌─────────────────────┐    git add     ┌──────────────────┐    git commit    ┌─────────────────┐
│                     │ ────────────→  │                  │ ──────────────→  │                 │
│  Working Directory  │                │  Staging Area    │                  │   Repositório   │
│  (seus arquivos)    │ ←────────────  │  (área de        │                  │   (histórico)   │
│                     │   git restore  │   preparação)    │                  │                 │
└─────────────────────┘                └──────────────────┘                  └─────────────────┘
```

- **Working Directory**: onde você edita os arquivos normalmente
- **Staging Area**: onde você prepara o que vai entrar no próximo commit (como montar um pacote antes de enviar)
- **Repositório**: o histórico permanente de commits

> **Por que existe a Staging Area?** Para que você possa modificar 5 arquivos mas commitar apenas 2 deles — criando commits precisos que descrevem uma única mudança lógica.

---

## Antes e depois

```txt
Antes: git add . → git commit (tudo vai junto, difícil rastrear o que mudou)
Agora: selecionar arquivos → git add seletivo → commit atômico com propósito claro
```

---

## Os comandos do ciclo

### `git status` — seu GPS

Sempre use primeiro. Ele mostra em qual zona cada arquivo está:

```bash
git status
```

```txt
Changes not staged for commit:    ← Working Directory (modificado, mas não no stage)
  modified:   app.js

Changes to be committed:          ← Staging Area (pronto para commitar)
  modified:   style.css

Untracked files:                  ← Working Directory (arquivo novo, Git nunca viu)
  README.md
```

### `git add` seletivo

Você pode adicionar arquivos individualmente:

```bash
git add app.js          # apenas esse arquivo
git add style.css       # apenas esse arquivo
git add src/            # tudo dentro da pasta src/
git add .               # tudo de uma vez
```

### `git diff` — ver o que mudou antes de commitar

```bash
git diff            # mudanças no Working Directory (fora do stage)
git diff --staged   # mudanças que já estão no stage
```

Isso te ajuda a revisar o código antes de commitar — um hábito excelente.

### `git log` — a linha do tempo

```bash
git log
```

Para uma versão mais compacta e legível:

```bash
git log --oneline
```

```txt
a3f8c91 Persiste livros no LocalStorage
7bc2d44 Adiciona estilo responsivo aos cards
f1e9a33 Corrige duplicação ao adicionar livro
c0d5b12 Adiciona formulário de cadastro
e8f4a01 Adiciona estrutura inicial da Estante Virtual
```

Lendo de baixo para cima, você vê a história do projeto.

### `git restore` — desfazendo mudanças

Editou algo e quer voltar ao último commit? Sem pânico:

```bash
git restore app.js          # descarta mudanças no Working Directory
git restore --staged app.js # tira o arquivo do stage (mas mantém a edição)
```

> ⚠️ `git restore` em arquivos **não commitados** é irreversível. Use com cuidado.

---

## O que é um commit atômico?

Um commit atômico faz **uma coisa só** e descreve exatamente o que é.

Imagine que você passou a tarde codando e mudou:
- A estilização dos cards
- O formulário de cadastro
- Corrigiu um bug no filtro

❌ Commit ruim (tudo junto):
```bash
git add .
git commit -m "várias coisas"
```

✅ Commits bons (um por vez):
```bash
git add style.css
git commit -m "Estiliza cards com CSS Grid"

git add app.js components/form.js
git commit -m "Adiciona formulário de cadastro com validação"

git add app.js
git commit -m "Corrige bug de duplicação no filtro de livros"
```

Quando algo quebrar em produção daqui a 3 meses, você vai agradecer por ter commits precisos.

---

## Fluxo do dia a dia

```txt
1. Você edita arquivos (Working Directory)
       ↓
2. git status  →  entende o que mudou
       ↓
3. git diff    →  revisa as mudanças
       ↓
4. git add     →  move para o stage o que faz parte deste commit
       ↓
5. git commit  →  salva no histórico com mensagem clara
       ↓
6. Repete para o próximo conjunto de mudanças
```

---

## ✍️ Exercício rápido

Faça **3 commits separados** na Estante Virtual, cada um com uma mudança real:

1. Edite o `style.css` (qualquer mudança de cor ou fonte). Adicione **só** esse arquivo e commite: `"Ajusta paleta de cores da estante"`
2. Edite o `app.js` (adicione um `console.log` qualquer). Adicione **só** esse arquivo e commite: `"Adiciona log de debug temporário"`
3. Crie um arquivo `README.md` vazio. Adicione e commite: `"Cria README inicial do projeto"`

Depois rode `git log --oneline` e veja os 3 commits separados.

---

## Próxima lição

[Lição 3 — Conectando ao GitHub →](./03-github-remoto.md)
