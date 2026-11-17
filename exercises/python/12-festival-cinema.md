# 🎟️ Exercício 12 — Pré-estreia no Festival de Cinema

**Objetivo:** Praticar matrizes/grades, geração aleatória de dados e busca por posição livre.

## Enunciado

Crie um simulador de **Pré-estreia VIP em um Festival de Cinema** com uma sala organizada em **4 filas por 5 colunas** (`1A` até `4E`).

- **Classe `Poltrona`:**
  - Possui `etiqueta` (`1A`, `1B`... `4E`), status `ocupada` (`True/False`) e `convidado` (inicia `None`).
- **Classe `SalaVIP`:**
  - Armazena o `titulo_filme`, a `classificacao_indicativa` (ex.: `16` anos) e `requer_credencial` (booleano, ex.: `True`).
- **Classe `Critico`:**
  - Atributos: `nome`, `idade`, `tem_credencial` (`True/False`), `veiculo_imprensa`.

- **Simulação:**
  - Gere aleatoriamente entre **8 e 15 críticos/convidados** com nomes, idades, veículos e credenciais aleatórios.
  - Tente acomodar um por um em uma poltrona sorteada aleatoriamente:
    - O convidado só pode sentar se tiver **idade maior ou igual à classificação indicativa**, possuir **credencial** (caso a sessão exija) e houver **poltrona livre**.
    - Se a poltrona sorteada já estiver ocupada, o sistema deve procurar outra poltrona livre automaticamente.
  - Imprima no console cada passo da simulação (ex.: *"Acomodando Marina (22 anos, credencial: Sim)..."*, *"Poltrona 2C ocupada, buscando outra..."*, *"Sentada na poltrona 3A"* ou *"Entrada negada: sem credencial de imprensa"*).

<details>
  <summary>📐 Ver Diagrama UML</summary>

```mermaid
classDiagram
    class SalaVIP {
        -str titulo_filme
        -int classificacao_indicativa
        -bool requer_credencial
        -list~Poltrona~ poltronas
        +__init__(titulo_filme, classificacao_indicativa, requer_credencial)
        +tem_poltrona_livre() bool
        +acomodar(critico) bool
    }

    class Poltrona {
        -str etiqueta
        -bool ocupada
        -Critico convidado
        +__init__(etiqueta)
        +is_ocupada() bool
        +ocupar(critico) void
    }

    class Critico {
        -str nome
        -int idade
        -bool tem_credencial
        -str veiculo_imprensa
        +__init__(nome, idade, tem_credencial, veiculo_imprensa)
        +get_nome() str
        +get_idade() int
        +possui_credencial() bool
        +get_veiculo_imprensa() str
    }

    SalaVIP "1" *-- "20" Poltrona : contém
    Poltrona "0..1" --> "0..1" Critico : ocupa
    SalaVIP ..> Critico : valida
```

</details>

---

**Solução:** [Ver código da solução](./solutions/12-festival-cinema.py)

