# ❓ FAQ — Semana 5: Git e GitHub

Dúvidas comuns de quem está aprendendo Git pela primeira vez.

---

## 🔧 Configuração e Instalação

### "Como sei se o Git está instalado no meu computador?"

No terminal, rode:

```bash
git --version
```

Se aparecer `git version 2.x.x`, está instalado. Se aparecer um erro, acesse [git-scm.com](https://git-scm.com) para instalar.

---

### "Preciso configurar o Git toda vez?"

Não. A configuração com `--global` é feita **uma vez por computador**:

```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu-email@exemplo.com"
```

Para verificar o que está configurado:

```bash
git config --global --list
```

---

### "GitHub pede senha mas não aceita a minha senha normal"

O GitHub **removeu o suporte a senha** para operações Git em 2021. Você precisa usar uma das opções:

**Opção 1: Token de acesso pessoal (mais simples)**
1. GitHub → Settings → Developer settings → Personal access tokens
2. Gere um token com permissão `repo`
3. Use esse token como senha quando o Git pedir

**Opção 2: SSH (recomendado para longo prazo)**
```bash
# Gera par de chaves SSH
ssh-keygen -t ed25519 -C "seu-email@exemplo.com"

# Exibe a chave pública (copie tudo)
cat ~/.ssh/id_ed25519.pub
```
Cole a chave pública em: GitHub → Settings → SSH and GPG keys → New SSH key

---

## ⚙️ Conceitos

### "Qual é a diferença entre Git e GitHub?"

| Git | GitHub |
|-----|--------|
| Ferramenta de linha de comando | Plataforma web |
| Roda no seu computador | Roda nos servidores do GitHub |
| Guarda o histórico local | Hospeda repositórios na nuvem |
| Existe desde 2005 | Existe desde 2008 |
| Gratuito e open source | Gratuito (com planos pagos) |

Git é como o Word. GitHub é como o Google Drive — um lugar para guardar e compartilhar os documentos Word.

---

### "O que é exatamente a Staging Area? Por que ela existe?"

A Staging Area é uma zona intermediária entre os arquivos que você editou e o commit.

Ela existe para que você possa modificar vários arquivos mas commitar apenas os que fazem parte de uma mudança lógica:

```bash
# Você editou: app.js, style.css, README.md
# Mas só quer commitar a mudança de estilo:

git add style.css
git commit -m "Ajusta espaçamento dos cards"

# Depois commita as outras mudanças separadas
git add app.js
git commit -m "Corrige bug no filtro de livros"

git add README.md
git commit -m "Atualiza instruções de instalação"
```

---

### "Qual a diferença entre `git fetch` e `git pull`?"

```bash
git fetch  # Baixa as mudanças do remoto, mas NÃO aplica no seu código local
git pull   # Baixa E aplica as mudanças (equivale a fetch + merge)
```

Em geral, use `git pull` no dia a dia. `git fetch` é útil quando você quer ver o que mudou antes de decidir se aplica.

---

### "Devo usar `git checkout` ou `git switch`?"

São equivalentes para trocar de branch. O `git switch` é mais moderno (introduzido no Git 2.23):

```bash
git checkout feature/busca   # forma antiga, ainda funciona
git switch feature/busca     # forma nova, mais clara
```

O `git checkout -b` equivale a `git switch -c`:

```bash
git checkout -b feature/busca   # cria e troca
git switch -c feature/busca     # idem, forma moderna
```

Qualquer uma funciona. Escolha uma e seja consistente.

---

## 🔀 Branches e Conflitos

### "Como sei em qual branch estou?"

```bash
git branch          # lista branches, a atual tem *
git status          # mostra a branch atual na primeira linha
```

---

### "O conflito de merge está assustador, como resolvo?"

Respira. O Git não apagou nada — ele apenas marcou onde há ambiguidade. Veja um conflito típico:

```js
<<<<<<< HEAD
// o que está na main (branch atual)
const titulo = "Estante Virtual";
=======
// o que está vindo da branch que você está mergeando
const titulo = "Minha Estante Virtual";
>>>>>>> feature/nova-secao
```

**Passos para resolver:**

1. Escolha qual versão manter (ou combine as duas)
2. Delete as linhas `<<<<<<<`, `=======` e `>>>>>>>`
3. Salve o arquivo
4. `git add app.js`
5. `git commit -m "Resolve conflito de merge em app.js"`

O VS Code tem uma interface visual que facilita muito — aparece como "Accept Current Change / Accept Incoming Change / Accept Both Changes".

---

### "Posso deletar uma branch depois de mergear?"

Sim, e é uma boa prática! Depois que a branch foi mergeada, ela não tem mais utilidade:

```bash
git branch -d feature/busca   # deleta localmente (só funciona se foi mergeada)
git push origin --delete feature/busca  # deleta no GitHub também
```

---

## 🐛 Erros Comuns e Como Resolver

### `error: failed to push some refs`

Isso acontece quando o repositório remoto tem commits que você não tem localmente.

```bash
# Solução: primeiro traz as mudanças, depois faz push
git pull
git push
```

---

### `You are in 'detached HEAD' state`

Você navegou para um commit específico em vez de uma branch. Isso acontece com `git checkout HASH_DO_COMMIT`.

```bash
# Para voltar ao normal:
git checkout main
```

---

### `nothing to commit, working tree clean`

Não é um erro — é o Git dizendo que não há nada para commitar porque não houve mudanças desde o último commit. Tudo certo!

---

### `fatal: not a git repository`

Você está tentando usar um comando Git fora de uma pasta com repositório inicializado.

```bash
# Verifique em qual pasta você está:
pwd

# Navegue para a pasta do projeto:
cd caminho/para/estante-virtual

# Ou inicialize um repositório:
git init
```

---

### `Please tell me who you are` (na hora do commit)

O Git não sabe seu nome e email. Configure:

```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu-email@exemplo.com"
```

---

### `Your branch is ahead of 'origin/main' by X commits`

Você tem commits locais que ainda não foram enviados ao GitHub. Nenhum problema, apenas faça:

```bash
git push
```
