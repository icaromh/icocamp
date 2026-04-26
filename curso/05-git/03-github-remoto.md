# 📘 Lição 3 — Conectando ao GitHub

## 🎯 Objetivo desta lição

Publicar a Estante Virtual no GitHub, entender a diferença entre repositório local e remoto, e proteger arquivos sensíveis com `.gitignore`.

---

## Por que o GitHub existe?

Até agora o Git está guardando o histórico **só no seu computador**. Se seu computador morrer, o histórico some.

O GitHub resolve dois problemas:

1. **Segurança**: o código fica em um servidor na nuvem
2. **Portfólio**: qualquer pessoa pode ver seu projeto e histórico de trabalho
3. **Colaboração**: múltiplas pessoas podem trabalhar no mesmo repositório

> **Git ≠ GitHub**. Git é a ferramenta (roda no seu computador). GitHub é uma plataforma online que hospeda repositórios Git. Existem alternativas como GitLab e Bitbucket — mas o GitHub é o mais usado no mercado.

---

## Antes e depois

```txt
Antes: seu código existe só na sua máquina — risco de perda e sem portfólio
Agora: código publicado, histórico visível, link para compartilhar em entrevistas
```

---

## Criando o repositório no GitHub

1. Acesse [github.com](https://github.com) e faça login
2. Clique no botão **`+`** → **New repository**
3. Dê o nome `estante-virtual`
4. Deixe **público** (para portfólio)
5. **NÃO** marque "Add a README file" (você já tem um localmente)
6. Clique em **Create repository**

O GitHub vai mostrar as instruções. Você vai usar a opção **"push an existing repository from the command line"**.

---

## Conectando o repositório local ao GitHub

No terminal, dentro da pasta do projeto:

```bash
# 1. Adiciona o repositório remoto com o apelido "origin"
git remote add origin https://github.com/SEU_USUARIO/estante-virtual.git

# 2. Garante que a branch principal se chama "main"
git branch -M main

# 3. Envia os commits para o GitHub (o "-u" cria a ligação padrão)
git push -u origin main
```

Depois do primeiro push, para os próximos você só precisa:

```bash
git push
```

---

## Verificando o repositório remoto

Para ver quais repositórios remotos estão configurados:

```bash
git remote -v
```

```txt
origin  https://github.com/SEU_USUARIO/estante-virtual.git (fetch)
origin  https://github.com/SEU_USUARIO/estante-virtual.git (push)
```

---

## `git pull` — trazendo mudanças do remoto

Quando o repositório remoto tem commits que você não tem localmente (por exemplo, alguém editou pelo GitHub, ou você trabalhou em outra máquina):

```bash
git pull
```

O fluxo completo do dia a dia em equipe:

```txt
git pull            ← atualiza o local com o que está no GitHub
... edita arquivos ...
git add .
git commit -m "..."
git push            ← envia para o GitHub
```

---

## `.gitignore` — o que nunca versionar

Existem arquivos que **nunca devem ir para o repositório**:

- `node_modules/` — dependências pesadas que podem ser reinstaladas
- `.env` — variáveis de ambiente com senhas e chaves de API
- `dist/` ou `build/` — arquivos gerados automaticamente
- `.DS_Store` — arquivo de metadados do macOS

O `.gitignore` é um arquivo de texto onde você lista o que o Git deve ignorar:

```gitignore
# Dependências
node_modules/

# Variáveis de ambiente (NUNCA versionar senhas!)
.env
.env.local

# Builds gerados
dist/
build/

# Sistema operacional
.DS_Store
Thumbs.db
```

Crie esse arquivo na raiz do projeto e faça um commit:

```bash
# Crie o arquivo .gitignore com o conteúdo acima
git add .gitignore
git commit -m "Adiciona .gitignore"
git push
```

> ⚠️ **Regra de ouro:** se um arquivo `.env` com senha já foi commitado, simplesmente adicionar ao `.gitignore` não resolve — o histórico já tem o dado sensível. A solução é mais complexa. Faça certo desde o início.

---

## Tabela: local vs remoto

| Ação | Comando |
|------|---------|
| Criar repositório remoto | Interface do GitHub |
| Conectar local ao remoto | `git remote add origin URL` |
| Enviar commits para o GitHub | `git push` |
| Trazer commits do GitHub | `git pull` |
| Ver remotos configurados | `git remote -v` |

---

## ✍️ Exercício rápido

1. Crie um repositório chamado `estante-virtual` no GitHub
2. Conecte sua pasta local com `git remote add origin URL`
3. Faça `git push -u origin main`
4. Acesse o GitHub e confirme que seus commits aparecem
5. Crie um arquivo `.gitignore` com `node_modules/` e `.env`, commite e faça push
6. Veja no GitHub que o `.gitignore` aparece no repositório

---

## Próxima lição

[Lição 4 — Branches — trabalhando sem medo →](./04-branches.md)
