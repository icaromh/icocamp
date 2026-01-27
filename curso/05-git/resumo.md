# Semana 5 – Git e GitHub: Controle de Versão e Fluxo de Trabalho

## O que é controle de versão

Controle de versão permite **registrar mudanças no código ao longo do tempo**, possibilitando:

- voltar a estados anteriores
- entender a evolução do projeto
- colaborar com outras pessoas

Git é o sistema de controle de versão mais usado no mercado.

---

## Conceitos fundamentais

- **Repositório**: histórico completo do projeto
- **Commit**: fotografia do estado do código
- **Branch**: linha paralela de desenvolvimento
- **Working directory**: arquivos locais
- **Staging area**: área de preparação para commit

---

## Criando um repositório

```bash
git init
```

Cria um repositório Git na pasta atual.

---

## Verificando o estado

```bash
git status
```

Mostra:

- arquivos modificados
- arquivos preparados
- arquivos não rastreados

---

## Adicionando arquivos ao stage

```bash
git add arquivo.js
git add .
```

- `git add .` adiciona tudo
- arquivos no stage estão prontos para commit

---

## Criando commits

```bash
git commit -m "Adiciona formulário de livros"
```

Boas mensagens de commit:

- verbo no presente
- descrevem o que foi feito
- claras e objetivas

---

## Histórico de commits

```bash
git log
```

Permite:

- ver histórico
- identificar mudanças
- entender evolução do código

---

## Ignorando arquivos

Arquivo `.gitignore` evita versionar:

- `node_modules`
- arquivos de ambiente
- builds

```gitignore
node_modules
.env
dist
```

---

## Branches

Branches permitem trabalhar em funcionalidades sem quebrar o código principal.

```bash
git branch nova-feature
git checkout nova-feature
```

Atalho:

```bash
git checkout -b nova-feature
```

---

## Merge

Une branches.

```bash
git checkout main
git merge nova-feature
```

---

## Conflitos

Ocorrem quando Git não sabe resolver diferenças automaticamente.

Fluxo:

1. Git avisa conflito
2. Desenvolvedor escolhe o código correto
3. Novo commit resolve o conflito

---

## GitHub

GitHub é uma plataforma para **hospedar repositórios Git**.

Funcionalidades:

- backup
- colaboração
- issues
- pull requests

---

## Repositório remoto

```bash
git remote add origin URL
git push -u origin main
```

---

## Push e Pull

```bash
git push
git pull
```

- `push`: envia commits
- `pull`: traz atualizações

---

## Pull Requests

Fluxo comum em times:

1. Criar branch
2. Fazer commits
3. Abrir Pull Request
4. Revisar
5. Fazer merge

---

## Fluxo mental recomendado

1. Criar feature
2. Alterar código
3. `git status`
4. `git add`
5. `git commit`
6. `git push`

---

## Erros comuns

- Commits grandes demais
- Mensagens vagas
- Trabalhar direto na `main`
- Esquecer `.gitignore`

---

## Boas práticas

- Commits pequenos e frequentes
- Uma mudança por commit
- Mensagens claras
- Usar branches
- Versionar todos os projetos

---

## Conexão com o mercado

Git é obrigatório para:

- trabalho em equipe
- revisão de código
- histórico profissional
- deploy automático
