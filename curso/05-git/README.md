# 📚 Bootcamp Marcie — Semana 5

> 💬 Ficou travada? Consulte o **[FAQ](./FAQ.md)** com os erros e dúvidas mais comuns antes de pedir ajuda.

## Git e GitHub: versionamento, branches e fluxo profissional

Projeto em evolução: **Minha Estante Virtual**

## 🎯 Objetivo da semana

Ao final desta semana, a aluna será capaz de:

- Entender **o que é Git** e por que ele existe (não é backup — é história)
- Versionar o projeto da Estante Virtual localmente com commits claros
- Publicar o projeto no **GitHub** com um README profissional
- Criar e mergear **branches** para trabalhar sem quebrar o código principal
- Abrir e descrever um **Pull Request** como faz uma dev em um time real

> Nesta semana, **não há código novo da aplicação**.
> O foco é **organização, histórico e colaboração** — habilidades que separam uma dev júnior de uma dev contratável.

## 🧠 Conceito central da semana

> Git não é backup.
> Git é **a história do código** — e Pull Requests são como times de desenvolvimento conversam sobre mudanças.

Todo projeto profissional usa Git. Toda entrevista técnica vai perguntar sobre isso. E quando algo quebrar em produção, o Git será a sua ferramenta para entender o que mudou e quando.

## 🧩 Domínio do problema: versionar e colaborar na Estante Virtual

Na Semana 4 você construiu a Estante Virtual com DOM e LocalStorage. Agora vamos garantir que esse projeto nunca seja perdido, que tenha um histórico legível, e que esteja publicado no GitHub como portfólio.

---

## 📘 Conteúdos da semana (passo a passo)

### 1️⃣ Por que precisamos de Git?

[Lição 1 →](./01-por-que-git.md)

Motivação real + seus primeiros comandos: `git init`, `git add`, `git commit`. Você vai versionar a Estante Virtual pela primeira vez.

### 2️⃣ O ciclo de vida de uma mudança

[Lição 2 →](./02-ciclo-de-vida.md)

O modelo mental de Working Directory → Staging Area → Repositório. `git status`, `git log`, `git restore` e como fazer commits atômicos e legíveis.

### 3️⃣ Conectando ao GitHub

[Lição 3 →](./03-github-remoto.md)

Por que o GitHub existe, como criar um repositório remoto, subir o projeto com `git push` e proteger arquivos sensíveis com `.gitignore`.

### 4️⃣ Branches — trabalhando sem medo

[Lição 4 →](./04-branches.md)

O que são branches, por que elas existem e como criar, trocar e mergear. Você vai resolver seu primeiro conflito de merge.

### 5️⃣ Fluxo profissional com Pull Requests

[Lição 5 →](./05-pull-requests.md)

O que é um PR, como abrir um no GitHub, como escrever uma descrição útil e como revisar o código de outra pessoa. O fluxo usado em 99% dos times de tecnologia.

---

## 🏁 Desafio da semana

[Desafio →](./desafio.md)

Versionar a Estante Virtual com histórico legível, criar uma branch de feature, mergear e publicar o projeto no GitHub com um README profissional.

## ✅ Critérios de conclusão

- [ ] Repositório no GitHub com mínimo 5 commits com mensagens claras
- [ ] Branch `feature/nova-secao` criada, com mudança e mergeada na `main`
- [ ] README.md descritivo no repositório
- [ ] Consegue explicar a diferença entre `git add`, `git commit` e `git push`
- [ ] Consegue explicar o que é um Pull Request e quando usá-lo

## 📋 Conceitos da semana

- Controle de versão e por que ele existe
- Repositórios locais vs remotos
- Working Directory, Staging Area e Repositório
- `git init`, `git status`, `git add`, `git commit`, `git log`
- `git remote`, `git push`, `git pull`, `.gitignore`
- Branches: criar, trocar e mergear
- Conflitos de merge: como ocorrem e como resolver
- Pull Requests: fluxo e boas práticas
- Mensagens de commit: convenção e legibilidade

## 🛠️ Material de Apoio

- 🚀 [Cheat Sheet: Comandos Mais Utilizados do Git](./comandos.md)
- 🏋️ [Exercícios Práticos de Git](../../exercises/git/README.md)
