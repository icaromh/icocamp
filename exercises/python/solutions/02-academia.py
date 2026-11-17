import math


class Academia:
    """Representa uma unidade de academia e calcula seus custos operacionais."""

    def __init__(self, nome: str, num_alunos: int, num_maquinas: int, area_m2: float):
        self.__nome = nome
        self.__num_alunos = num_alunos
        self.__num_maquinas = num_maquinas
        self.__area_m2 = area_m2

    def get_nome(self) -> str:
        return self.__nome

    def get_num_alunos(self) -> int:
        return self.__num_alunos

    def get_num_maquinas(self) -> int:
        return self.__num_maquinas

    def get_area_m2(self) -> float:
        return self.__area_m2

    def set_num_alunos(self, valor: int) -> None:
        if valor >= 0:
            self.__num_alunos = valor

    def set_num_maquinas(self, valor: int) -> None:
        if valor >= 0:
            self.__num_maquinas = valor

    def set_area_m2(self, valor: float) -> None:
        if valor > 0:
            self.__area_m2 = valor

    def calcular_custo_operacional(self) -> None:
        instrutores = math.ceil(self.__num_alunos / 25)
        custo_instrutores = instrutores * 2000
        custo_maquinas = self.__num_maquinas * 50
        custo_total = custo_instrutores + custo_maquinas
        print(f"Instrutores necessários: {instrutores}")
        print(f"Custo total mensal: {custo_total:.2f} €")


def buscar_academia(academias: list[Academia], nome: str) -> Academia | None:
    for academia in academias:
        if academia.get_nome().lower() == nome.lower():
            return academia
    return None


def criar_academia(academias: list[Academia]) -> None:
    nome = input("Nome da academia: ")
    if buscar_academia(academias, nome):
        print("Já existe uma academia com esse nome.")
        return
    alunos = int(input("Número de alunos: "))
    maquinas = int(input("Número de máquinas: "))
    area = float(input("Área total (m²): "))
    academias.append(Academia(nome, alunos, maquinas, area))
    print("Academia cadastrada com sucesso!")


def ver_academia(academias: list[Academia]) -> None:
    nome = input("Nome da academia para consultar: ")
    academia = buscar_academia(academias, nome)
    if not academia:
        print("Academia não encontrada no sistema.")
        return
    print(f"\nAcademia: {academia.get_nome()}")
    print(f"Alunos: {academia.get_num_alunos()}")
    print(f"Máquinas: {academia.get_num_maquinas()}")
    print(f"Área: {academia.get_area_m2()} m²")
    academia.calcular_custo_operacional()


def modificar_academia(academias: list[Academia]) -> None:
    nome = input("Nome da academia para modificar: ")
    academia = buscar_academia(academias, nome)
    if not academia:
        print("Academia não encontrada no sistema.")
        return

    print("1 - Alterar número de alunos")
    print("2 - Alterar número de máquinas")
    print("3 - Alterar área (m²)")
    opcao = input("Escolha o campo: ")

    if opcao == "1":
        academia.set_num_alunos(int(input("Novo número de alunos: ")))
    elif opcao == "2":
        academia.set_num_maquinas(int(input("Novo número de máquinas: ")))
    elif opcao == "3":
        academia.set_area_m2(float(input("Nova área (m²): ")))
    else:
        print("Opção inválida.")
        return
    print("Academia atualizada com sucesso!")


def remover_academia(academias: list[Academia]) -> None:
    nome = input("Nome da academia para remover: ")
    academia = buscar_academia(academias, nome)
    if not academia:
        print("Academia não encontrada no sistema.")
        return
    academias.remove(academia)
    print(f"Academia '{nome}' removida com sucesso!")


def menu() -> None:
    academias: list[Academia] = []
    while True:
        print("\n=== Gestão de Academias ===")
        print("1 - Criar academia")
        print("2 - Ver academia")
        print("3 - Modificar academia")
        print("4 - Remover academia")
        print("0 - Sair")
        opcao = input("Opção: ")

        if opcao == "1":
            criar_academia(academias)
        elif opcao == "2":
            ver_academia(academias)
        elif opcao == "3":
            modificar_academia(academias)
        elif opcao == "4":
            remover_academia(academias)
        elif opcao == "0":
            break
        else:
            print("Opção inválida.")


if __name__ == "__main__":
    menu()
