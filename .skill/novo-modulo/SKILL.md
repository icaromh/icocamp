---
name: novo-modulo
description: "Cria novos módulos e exercícios para o bootcamp IcoCamp mantendo a consistência pedagógica e estrutural. Use when instructed to create a new module, week, or set of exercises for IcoCamp."
license: MIT
---

## 🎯 Público-Alvo e Filosofia Pedagógica

- **Público**: Engenheiras(os) Júnior.
- **Abordagem**: Incremental e prática. Evite abstrações prematuras. Introduza conceitos apenas quando a dor de fazer "manualmente" for sentida.
- **Projeto Base**: **Minha Estante Virtual**. O projeto evolui a cada semana, servindo como fio condutor para todos os novos conceitos.
- **Linguagem**: Comunicação direta, encorajadora, utilizando emojis para organização visual, analogias claras e código mínimo para explicar conceitos.

## 📂 Estrutura de Diretórios

O IcoCamp separa a teoria/projeto principal dos exercícios de fixação isolados:

1. **`curso/XX-slug-do-modulo/`**: Contém o conteúdo da semana, as lições passo a passo, o desafio que evolui o projeto principal e o FAQ da semana.
2. **`exercises/slug-do-tema/`**: Contém exercícios práticos isolados sobre um tema específico (ex: `http`, `javascript/iterators`), com suas respectivas soluções.

## 🧱 Componentes de um Novo Módulo (`curso/XX-slug/`)

Ao criar uma nova semana no diretório `curso/`, você deve seguir esta estrutura baseada nos templates em `.templates/modulo/`:

1. **`README.md`**: A visão geral da semana. Contém links em vídeo curtos (5-10 min), o objetivo da semana, o conceito central, e a lista de lições. Deve linkar o `FAQ.md` no topo.
2. **`0X-slug-da-licao.md`**: Lições incrementais (geralmente de 1 a 5). Cada lição deve focar em **um único conceito novo**, mostrando o "Antes e Depois" e exemplos práticos. A última lição deve preparar para o desafio.
3. **`desafio.md`**: O projeto prático da semana, evoluindo a "Minha Estante Virtual". Deve ter um objetivo claro, contexto narrativo, requisitos obrigatórios divididos em partes, requisitos extras, critérios de aceite (código e apresentação) e sequência de testes.
4. **`FAQ.md`**: Um documento proativo com as dúvidas e fricções mais comuns que um desenvolvedor júnior encontraria ao tentar implementar o conteúdo daquela semana. Dividido em seções (Configuração, Conceitos, Dados, Erros).
5. **`solucao/`**: Diretório contendo a solução de referência completa para o `desafio.md`.

## 🏋️ Componentes de Novos Exercícios (`exercises/slug/`)

Quando um tema precisar de fixação isolada (ex: `fetch`, `filter`, `map`), crie um diretório em `exercises/` seguindo os templates em `.templates/exercicios/`:

1. **`README.md`**: Lista de exercícios com tabela indicando dificuldade (🟢, 🟡, 🔴) e links para os arquivos e soluções.
2. **`0X-slug-do-exercicio.md`**: Arquivo do exercício com: contexto, objetivo, código inicial/template, saída esperada e uma seção "Spoiler/Dicas" oculta em um `<details>`.
3. **`solutions/0X-slug-do-exercicio.js`**: O código limpo com a solução ideal para o exercício.

## 📋 Passo a Passo para Criar um Novo Módulo

Quando for solicitado a criar um novo módulo (ex: Semana 8 - Bancos de Dados, Semana 9 - React Básico), siga este roteiro:

1. **Planejamento e Escopo**:
   - Analise os módulos anteriores e posteriores na ementa (`docs/curriculum_gap_analysis.md`).
   - Defina os 3-5 conceitos essenciais que precisam ser ensinados para que a aluna consiga fazer o desafio.
   - Planeje como o projeto "Minha Estante Virtual" evoluirá nesta semana.

2. **Criação da Estrutura Base (`curso/XX-slug/`)**:
   - Crie a pasta.
   - Escreva o `README.md` copiando o formato do template e definindo o índice das lições.

3. **Criação das Lições (`01-..., 02-...`)**:
   - Desenvolva cada lição de forma incremental. Não pule etapas lógicas.
   - Se for ensinar uma ferramenta nova (ex: React, PostgreSQL), explique *por que* ela existe e como testá-la de forma isolada primeiro.

4. **Criação do Desafio (`desafio.md`) e Solução (`solucao/`)**:
   - Escreva o desafio aplicando os conceitos ensinados nas lições na "Minha Estante Virtual".
   - Crie a solução de referência na pasta `solucao/` (ex: `server.js`, `App.jsx`, `schema.sql`) para garantir que o desafio é factível com o conhecimento dado.

5. **Criação do FAQ (`FAQ.md`)**:
   - Pense criticamente: "Onde uma pessoa júnior vai travar ao seguir essas lições e tentar fazer o desafio?".
   - Antecipe erros comuns (`Cannot read properties of undefined`, `CORS error`, etc.) e forneça soluções claras.
   - Adicione o link para o FAQ no `README.md`.

6. **(Opcional) Criação de Exercícios de Fixação**:
   - Se o conceito for muito denso ou requerer memória muscular (ex: sintaxe SQL, hooks do React), crie exercícios em `exercises/` utilizando os templates de exercício.
   - Linke estes exercícios no `README.md` do módulo principal da semana.
