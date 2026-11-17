class Filme:
    """Representa um lançamento cinematográfico e calcula seu retorno semanal."""

    def __init__(self, titulo: str, orcamento: float, duracao_min: int, num_salas_exibicao: int):
        self.__titulo = titulo
        self.__orcamento = orcamento
        self.__duracao_min = duracao_min
        self.__num_salas_exibicao = num_salas_exibicao

    def get_titulo(self) -> str:
        return self.__titulo

    def get_orcamento(self) -> float:
        return self.__orcamento

    def get_duracao_min(self) -> int:
        return self.__duracao_min

    def get_num_salas_exibicao(self) -> int:
        return self.__num_salas_exibicao

    def set_orcamento(self, valor: float) -> None:
        if valor >= 0:
            self.__orcamento = valor

    def set_duracao_min(self, valor: int) -> None:
        if valor > 0:
            self.__duracao_min = valor

    def set_num_salas_exibicao(self, valor: int) -> None:
        if valor >= 0:
            self.__num_salas_exibicao = valor

    def calcular_retorno_estimado(self) -> None:
        receita = self.__num_salas_exibicao * 4 * 80 * 12 * 7
        saldo = receita - self.__orcamento
        print(f"Receita estimada (7 dias): {receita:.2f} €")
        if saldo >= 0:
            print(f"Lucro estimado: {saldo:.2f} €")
        else:
            print(f"Prejuízo estimado: {abs(saldo):.2f} €")


def buscar_filme(filmes: list[Filme], titulo: str) -> Filme | None:
    for filme in filmes:
        if filme.get_titulo().lower() == titulo.lower():
            return filme
    return None


def cadastrar_filme(filmes: list[Filme]) -> None:
    titulo = input("Título do filme: ")
    if buscar_filme(filmes, titulo):
        print("Filme já cadastrado.")
        return
    orcamento = float(input("Orçamento (€): "))
    duracao = int(input("Duração (minutos): "))
    salas = int(input("Número de salas de exibição: "))
    filmes.append(Filme(titulo, orcamento, duracao, salas))
    print("Filme cadastrado com sucesso!")


def ver_filme(filmes: list[Filme]) -> None:
    titulo = input("Título do filme para consultar: ")
    filme = buscar_filme(filmes, titulo)
    if not filme:
        print("Filme não encontrado no catálogo.")
        return
    print(f"\nTítulo: {filme.get_titulo()}")
    print(f"Orçamento: {filme.get_orcamento():.2f} €")
    print(f"Duração: {filme.get_duracao_min()} min")
    print(f"Salas: {filme.get_num_salas_exibicao()}")
    filme.calcular_retorno_estimado()


def modificar_filme(filmes: list[Filme]) -> None:
    titulo = input("Título do filme para modificar: ")
    filme = buscar_filme(filmes, titulo)
    if not filme:
        print("Filme não encontrado no catálogo.")
        return
    print("1 - Orçamento | 2 - Duração | 3 - Salas de exibição")
    opcao = input("Campo a alterar: ")
    if opcao == "1":
        filme.set_orcamento(float(input("Novo orçamento (€): ")))
    elif opcao == "2":
        filme.set_duracao_min(int(input("Nova duração (min): ")))
    elif opcao == "3":
        filme.set_num_salas_exibicao(int(input("Novo número de salas: ")))
    else:
        print("Opção inválida.")
        return
    print("Filme atualizado!")


def remover_filme(filmes: list[Filme]) -> None:
    titulo = input("Título do filme para remover: ")
    filme = buscar_filme(filmes, titulo)
    if not filme:
        print("Filme não encontrado no catálogo.")
        return
    filmes.remove(filme)
    print(f"Filme '{titulo}' removido.")


def menu() -> None:
    filmes: list[Filme] = []
    while True:
        print("\n=== Produtora de Cinema ===")
        print("1 - Cadastrar filme")
        print("2 - Ver filme")
        print("3 - Modificar filme")
        print("4 - Remover filme")
        print("0 - Sair")
        opcao = input("Opção: ")

        if opcao == "1":
            cadastrar_filme(filmes)
        elif opcao == "2":
            ver_filme(filmes)
        elif opcao == "3":
            modificar_filme(filmes)
        elif opcao == "4":
            remover_filme(filmes)
        elif opcao == "0":
            break
        else:
            print("Opção inválida.")


if __name__ == "__main__":
    menu()
