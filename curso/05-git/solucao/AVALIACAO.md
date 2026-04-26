# Solução de Referência — Desafio Semana 5

Este diretório contém exemplos de referência para o desafio da Semana 5.

## Conteúdo

- **`README-exemplo.md`**: Exemplo de README profissional para o repositório da Estante Virtual

## Sequência de commits de referência

Esta é a sequência de commits que demonstra o histórico esperado:

```
git log --oneline

7a3c9f1 Adiciona busca por título em tempo real
4b2e8d0 Merge branch 'feature/busca-por-titulo'
3f1a2c9 Estiliza campo de busca
2d9b7e8 Implementa lógica de filtro por título
1c8a6f5 Atualiza README com instruções completas
0b7f5d4 Adiciona .gitignore
e6d4c3b Persiste livros no LocalStorage
d5c3b2a Implementa cadastro de livros via formulário
c4b2a1f Estiliza header e cards de livros
b3a1f0e Adiciona estrutura HTML da estante
a2f0e9d Adiciona estrutura inicial do projeto
```

## O que avaliar no desafio

### ✅ Critérios obrigatórios

1. **Mínimo 5 commits** com mensagens claras e descritivas
2. **Branch `feature/nova-secao`** criada, com mudanças e mergeada na `main`
3. **`.gitignore`** presente com `node_modules/` e `.env`
4. **`README.md`** com descrição, funcionalidades e como rodar

### 🌟 Diferenciais (extras)

- PR aberto no GitHub em vez de merge local
- Segundo conflito de merge simulado e resolvido
- Screenshot do projeto no README
- Branch `main` protegida nas configurações do GitHub

## Perguntas para a apresentação

A aluna deve conseguir responder:

1. "O que acontece entre `git add` e `git commit`? Para que serve esse intervalo?"
2. "Por que você criou uma branch separada para a feature em vez de editar direto na `main`?"
3. "Se você e uma colega editassem a mesma linha do `app.js` ao mesmo tempo, o que aconteceria?"
