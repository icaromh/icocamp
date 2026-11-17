from abc import ABC, abstractmethod


class Obra(ABC):
    """Classe base abstrata para obras de entretenimento."""

    def __init__(self, titulo: str, ano_lancamento: int, genero: str):
        self.__titulo = titulo
        self.__ano_lancamento = ano_lancamento
        self.__genero = genero

    def get_titulo(self) -> str:
        return self.__titulo

    def get_ano_lancamento(self) -> int:
        return self.__ano_lancamento

    def get_genero(self) -> str:
        return self.__genero

    @abstractmethod
    def calcular_tempo_consumo(self) -> float:
        pass


class Livro(Obra):
    def __init__(self, titulo: str, ano_lancamento: int, genero: str, num_paginas: int):
        super().__init__(titulo, ano_lancamento, genero)
        self.__num_paginas = num_paginas

    def get_num_paginas(self) -> int:
        return self.__num_paginas

    def calcular_tempo_consumo(self) -> float:
        return (self.__num_paginas * 2) / 60

    def eh_longo(self) -> bool:
        return self.__num_paginas > 400


class Novela(Obra):
    def __init__(
        self,
        titulo: str,
        ano_lancamento: int,
        genero: str,
        num_capitulos: int,
        duracao_capitulo_min: int,
    ):
        super().__init__(titulo, ano_lancamento, genero)
        self.__num_capitulos = num_capitulos
        self.__duracao_capitulo_min = duracao_capitulo_min

    def get_num_capitulos(self) -> int:
        return self.__num_capitulos

    def get_duracao_capitulo_min(self) -> int:
        return self.__duracao_capitulo_min

    def calcular_tempo_consumo(self) -> float:
        return (self.__num_capitulos * self.__duracao_capitulo_min) / 60

    def calcular_semanas_exibicao(self) -> float:
        return self.__num_capitulos / 6


class Filme(Obra):
    def __init__(
        self,
        titulo: str,
        ano_lancamento: int,
        genero: str,
        duracao_min: int,
        eh_adaptacao: bool,
    ):
        super().__init__(titulo, ano_lancamento, genero)
        self.__duracao_min = duracao_min
        self.__eh_adaptacao = eh_adaptacao

    def get_duracao_min(self) -> int:
        return self.__duracao_min

    def is_adaptacao(self) -> bool:
        return self.__eh_adaptacao

    def calcular_tempo_consumo(self) -> float:
        return self.__duracao_min / 60

    def calcular_ingresso_clube(self, preco_base: float) -> float:
        return preco_base * 0.80 if self.__eh_adaptacao else preco_base


def buscar_obra(catalogo: list[Obra], titulo: str) -> Obra | None:
    for obra in catalogo:
        if obra.get_titulo().lower() == titulo.lower():
            return obra
    return None


def menu() -> None:
    catalogo: list[Obra] = []
    while True:
        print("\n=== Catálogo de Adaptações ===")
        print("1 - Cadastrar obra")
        print("2 - Consultar obra")
        print("3 - Remover obra")
        print("0 - Sair")
        opcao = input("Opção: ")

        if opcao == "1":
            tipo = input("Formato (1-Livro, 2-Novela, 3-Filme): ")
            titulo = input("Título: ")
            if buscar_obra(catalogo, titulo):
                print("Obra já cadastrada.")
                continue
            ano = int(input("Ano de lançamento: "))
            genero = input("Gênero: ")

            if tipo == "1":
                paginas = int(input("Número de páginas: "))
                catalogo.append(Livro(titulo, ano, genero, paginas))
            elif tipo == "2":
                caps = int(input("Número de capítulos: "))
                dur_cap = int(input("Duração por capítulo (min): "))
                catalogo.append(Novela(titulo, ano, genero, caps, dur_cap))
            elif tipo == "3":
                duracao = int(input("Duração do filme (min): "))
                adapt = input("É adaptação literária (s/n)? ").strip().lower() == "s"
                catalogo.append(Filme(titulo, ano, genero, duracao, adapt))
            else:
                print("Formato inválido.")
                continue
            print("Obra cadastrada!")

        elif opcao == "2":
            titulo = input("Título da obra: ")
            obra = buscar_obra(catalogo, titulo)
            if not obra:
                print("Obra não encontrada.")
                continue
            print(
                f"\n{obra.get_titulo()} ({obra.get_ano_lancamento()}) - {obra.get_genero()}"
            )
            print(f"Tempo total de consumo: {obra.calcular_tempo_consumo():.2f} horas")
            if isinstance(obra, Livro):
                print(f"Páginas: {obra.get_num_paginas()} | É longo? {obra.eh_longo()}")
            elif isinstance(obra, Novela):
                print(
                    f"Capítulos: {obra.get_num_capitulos()} | "
                    f"Semanas no ar: {obra.calcular_semanas_exibicao():.1f}"
                )
            elif isinstance(obra, Filme):
                print(
                    f"Duração: {obra.get_duracao_min()} min | "
                    f"Ingresso clube (base 15€): {obra.calcular_ingresso_clube(15.0):.2f} €"
                )

        elif opcao == "3":
            titulo = input("Título da obra para remover: ")
            obra = buscar_obra(catalogo, titulo)
            if obra:
                catalogo.remove(obra)
                print("Obra removida.")
            else:
                print("Obra não encontrada.")

        elif opcao == "0":
            break
        else:
            print("Opção inválida.")


if __name__ == "__main__":
    menu()
