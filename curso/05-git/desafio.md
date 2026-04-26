# Desafio — Semana 5: Estante Virtual no GitHub

## 🎯 Objetivo

Versionar a Estante Virtual com um histórico legível, criar e mergear uma branch de feature, e publicar o projeto no GitHub com um README profissional.

---

## Contexto

A Marcie finalmente tem uma aplicação funcionando — a Estante Virtual com DOM e LocalStorage da Semana 4. Mas o projeto ainda existe só no computador dela. Sem versionamento, sem portfólio, sem histórico.

Esta semana, a missão é transformar a Estante Virtual em um **projeto profissional no GitHub**: com commits organizados, uma feature desenvolvida em branch separada, e um README que qualquer pessoa possa ler e entender.

---

## Estrutura esperada do repositório

```
estante-virtual/
├── index.html
├── style.css
├── app.js
├── .gitignore
└── README.md
```

---

## Parte 1 — Versionando o projeto (obrigatório)

### Inicializando o repositório

Dentro da pasta da Estante Virtual:

1. Inicialize o repositório com `git init`
2. Crie o arquivo `.gitignore` com pelo menos `node_modules/` e `.env`
3. Faça o **primeiro commit** com todos os arquivos existentes

### Histórico de commits legível

Faça pelo menos **5 commits com mensagens claras** que documentem a evolução do projeto.

Sugestões de commits significativos:
- `"Adiciona estrutura HTML da estante"`
- `"Estiliza header e cards de livros"`
- `"Implementa cadastro de livros via formulário"`
- `"Persiste livros no LocalStorage"`
- `"Adiciona .gitignore e configuração inicial"`

> 💡 Se você já tem o projeto pronto, pense em como **reconstruir** a história: quebre o projeto em partes lógicas e commite cada uma separadamente. O objetivo é a mensagem, não refazer o código.

---

## Parte 2 — Feature em branch (obrigatório)

### Criando uma nova funcionalidade

1. Crie uma branch `feature/nova-secao` a partir da `main`
2. Nessa branch, adicione **uma melhoria real** no projeto. Sugestões:
   - Seção "Livros favoritos" que destaca livros marcados como favoritos
   - Campo de busca por título na listagem
   - Contador de livros lidos vs. não lidos no topo da página
   - Botão de "limpar estante" com confirmação
3. Faça pelo menos **2 commits** nessa branch com mensagens descritivas
4. Volte para a `main` e faça o **merge** da feature
5. Verifique que a funcionalidade está na `main`

### Publicando no GitHub

1. Crie um repositório `estante-virtual` no GitHub
2. Conecte com `git remote add origin URL`
3. Faça `git push -u origin main`
4. Confirme no GitHub que todos os commits aparecem

---

## Parte 3 — README profissional (obrigatório)

Escreva um `README.md` que qualquer pessoa possa entender. O README deve conter:

```markdown
# Minha Estante Virtual

[Breve descrição do projeto]

## Funcionalidades

- [lista das funcionalidades]

## Tecnologias

- [lista das tecnologias usadas]

## Como rodar localmente

[passo a passo]

## Screenshots

[opcional, mas valoriza muito]
```

Depois de escrever, commite e faça push:

```bash
git add README.md
git commit -m "Adiciona README com descrição e instruções do projeto"
git push
```

---

## Parte 4 — Extras (escolha pelo menos 1)

- [ ] Abrir um **Pull Request** no GitHub em vez de mergear localmente (crie a branch, faça push, abra o PR pela interface)
- [ ] Criar uma **segunda feature** em outra branch e simular um conflito de merge ao mergear
- [ ] Adicionar uma **imagem/screenshot** do projeto no README (usando `![alt](imagem.png)`)
- [ ] Proteger a branch `main` nas configurações do GitHub (Settings → Branches → Add rule)

---

## ✅ Critérios de conclusão

### Entrega (código)

- [ ] Repositório público no GitHub com link compartilhável
- [ ] Mínimo de 5 commits com mensagens claras e descritivas
- [ ] Branch `feature/nova-secao` criada e mergeada na `main`
- [ ] Arquivo `.gitignore` no repositório
- [ ] `README.md` com descrição, funcionalidades e como rodar

### Explicação (apresentação)

Prepare uma explicação curta (3–5 minutos) cobrindo:

- [ ] O que é a diferença entre `git add`, `git commit` e `git push`
- [ ] Por que você criou uma branch separada para a feature
- [ ] O que aconteceria se dois devs editassem a mesma linha ao mesmo tempo

---

## Sequência recomendada

```txt
1. git init → .gitignore → primeiro commit
2. Commits incrementais documentando o projeto existente
3. git remote add origin URL → git push -u origin main
4. git checkout -b feature/nova-secao
5. Implementar feature → commits na branch
6. git checkout main → git merge feature/nova-secao
7. Escrever README.md → commit → push
8. Verificar o repositório no GitHub
```
