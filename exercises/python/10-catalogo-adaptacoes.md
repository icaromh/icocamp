# 🎭 Exercício 10 — Catálogo de Adaptações

**Objetivo:** Praticar classe base (não instanciada diretamente), herança, polimorfismo e métodos específicos por subclasse.

## Enunciado

Uma plataforma de entretenimento quer catalogar **Obras** de romance e drama em diferentes formatos. Não deve ser instanciado nenhum objeto da classe base `Obra`, apenas das subclasses: `Livro`, `Novela` e `Filme`.

- **Classe base `Obra`:**
  - **Atributos comuns (somente leitura via *getters*):** `titulo`, `ano_lancamento`, `genero`.
  - **Método `calcular_tempo_consumo()`:** retorna o tempo total em horas para consumir a obra (sobrescrito nas subclasses).

- **Subclasses e regras:**
  - **`Livro`:** possui o atributo adicional `num_paginas`. `calcular_tempo_consumo()` considera **2 minutos por página** (retornando em horas). Possui o método `eh_longo()` que retorna `True` se tiver mais de 400 páginas.
  - **`Novela`:** possui os atributos adicionais `num_capitulos` e `duracao_capitulo_min`. `calcular_tempo_consumo()` retorna o total de horas para maratonar todos os capítulos. Possui o método `calcular_semanas_exibicao()` considerando **6 capítulos por semana**.
  - **`Filme`:** possui os atributos adicionais `duracao_min` e `eh_adaptacao` (booleano). `calcular_tempo_consumo()` retorna a duração em horas. Possui o método `calcular_ingresso_clube(preco_base)` que aplica **20% de desconto** se `eh_adaptacao` for `True`.

- **Aplicação:**
  - Menu para cadastrar obra (escolhendo o formato), consultar todos os dados pelo título (chamando todos os métodos da respectiva subclasse) e remover obra.

<details>
  <summary>📐 Ver Diagrama UML</summary>

```mermaid
classDiagram
    class Obra {
        <<abstract>>
        -str titulo
        -int ano_lancamento
        -str genero
        +__init__(titulo, ano_lancamento, genero)
        +get_titulo() str
        +get_ano_lancamento() int
        +get_genero() str
        +calcular_tempo_consumo()* float
    }

    class Livro {
        -int num_paginas
        +__init__(titulo, ano_lancamento, genero, num_paginas)
        +get_num_paginas() int
        +calcular_tempo_consumo() float
        +eh_longo() bool
    }

    class Novela {
        -int num_capitulos
        -int duracao_capitulo_min
        +__init__(titulo, ano_lancamento, genero, num_capitulos, duracao_capitulo_min)
        +get_num_capitulos() int
        +get_duracao_capitulo_min() int
        +calcular_tempo_consumo() float
        +calcular_semanas_exibicao() float
    }

    class Filme {
        -int duracao_min
        -bool eh_adaptacao
        +__init__(titulo, ano_lancamento, genero, duracao_min, eh_adaptacao)
        +get_duracao_min() int
        +is_adaptacao() bool
        +calcular_tempo_consumo() float
        +calcular_ingresso_clube(preco_base) float
    }

    Obra <|-- Livro
    Obra <|-- Novela
    Obra <|-- Filme
```

</details>
