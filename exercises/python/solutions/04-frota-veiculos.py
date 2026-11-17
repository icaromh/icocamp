from abc import ABC, abstractmethod


class Veiculo(ABC):
    """Classe base abstrata para veículos da frota."""

    def __init__(self, placa: str, marca: str, quilometragem: float):
        self.__placa = placa
        self.__marca = marca
        self.__quilometragem = quilometragem

    def get_placa(self) -> str:
        return self.__placa

    def get_marca(self) -> str:
        return self.__marca

    def get_quilometragem(self) -> float:
        return self.__quilometragem

    @abstractmethod
    def calcular_custo_revisao(self) -> float:
        pass


class Caminhao(Veiculo):
    def __init__(self, placa: str, marca: str, quilometragem: float, eixos: int):
        super().__init__(placa, marca, quilometragem)
        self.__eixos = eixos

    def get_eixos(self) -> int:
        return self.__eixos

    def calcular_custo_revisao(self) -> float:
        return 500.0 + (150.0 * self.__eixos)

    def calcular_pedagio(self, distancia_km: float) -> float:
        return 0.20 * distancia_km * self.__eixos


class Van(Veiculo):
    def __init__(self, placa: str, marca: str, quilometragem: float, capacidade_passageiros: int):
        super().__init__(placa, marca, quilometragem)
        self.__capacidade_passageiros = capacidade_passageiros

    def get_capacidade_passageiros(self) -> int:
        return self.__capacidade_passageiros

    def calcular_custo_revisao(self) -> float:
        return 300.0 + (20.0 * self.__capacidade_passageiros)

    def verificar_lotacao(self, passageiros: int) -> bool:
        return 0 <= passageiros <= self.__capacidade_passageiros


class Moto(Veiculo):
    def __init__(self, placa: str, marca: str, quilometragem: float, cilindradas: int):
        super().__init__(placa, marca, quilometragem)
        self.__cilindradas = cilindradas

    def get_cilindradas(self) -> int:
        return self.__cilindradas

    def calcular_custo_revisao(self) -> float:
        return 120.0 if self.__cilindradas <= 250 else 250.0


def buscar_veiculo(frota: list[Veiculo], placa: str) -> Veiculo | None:
    for veiculo in frota:
        if veiculo.get_placa().upper() == placa.upper():
            return veiculo
    return None


def menu() -> None:
    frota: list[Veiculo] = []
    while True:
        print("\n=== Frota de Veículos ===")
        print("1 - Cadastrar veículo")
        print("2 - Mostrar veículo")
        print("3 - Remover veículo")
        print("0 - Sair")
        opcao = input("Opção: ")

        if opcao == "1":
            tipo = input("Tipo (1-Caminhão, 2-Van, 3-Moto): ")
            placa = input("Placa: ")
            if buscar_veiculo(frota, placa):
                print("Placa já cadastrada.")
                continue
            marca = input("Marca: ")
            km = float(input("Quilometragem: "))

            if tipo == "1":
                eixos = int(input("Quantidade de eixos: "))
                frota.append(Caminhao(placa, marca, km, eixos))
            elif tipo == "2":
                capacidade = int(input("Capacidade de passageiros: "))
                frota.append(Van(placa, marca, km, capacidade))
            elif tipo == "3":
                cilindradas = int(input("Cilindradas: "))
                frota.append(Moto(placa, marca, km, cilindradas))
            else:
                print("Tipo inválido.")
                continue
            print("Veículo cadastrado!")

        elif opcao == "2":
            placa = input("Placa para consulta: ")
            veiculo = buscar_veiculo(frota, placa)
            if not veiculo:
                print("Veículo não encontrado.")
                continue
            print(f"Placa: {veiculo.get_placa()} | Marca: {veiculo.get_marca()} | KM: {veiculo.get_quilometragem()}")
            print(f"Custo de revisão: {veiculo.calcular_custo_revisao():.2f} €")
            if isinstance(veiculo, Caminhao):
                print(f"Eixos: {veiculo.get_eixos()} | Pedágio (100 km): {veiculo.calcular_pedagio(100):.2f} €")
            elif isinstance(veiculo, Van):
                print(f"Capacidade: {veiculo.get_capacidade_passageiros()} | Cabe 10? {veiculo.verificar_lotacao(10)}")
            elif isinstance(veiculo, Moto):
                print(f"Cilindradas: {veiculo.get_cilindradas()} cc")

        elif opcao == "3":
            placa = input("Placa para remover: ")
            veiculo = buscar_veiculo(frota, placa)
            if veiculo:
                frota.remove(veiculo)
                print("Veículo removido.")
            else:
                print("Veículo não encontrado.")

        elif opcao == "0":
            break
        else:
            print("Opção inválida.")


if __name__ == "__main__":
    menu()
