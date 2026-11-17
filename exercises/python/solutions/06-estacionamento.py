import random


class Motorista:
    """Representa um motorista tentando estacionar."""

    def __init__(self, nome: str, dinheiro: float, altura_veiculo: float):
        self.__nome = nome
        self.__dinheiro = dinheiro
        self.__altura_veiculo = altura_veiculo

    def get_nome(self) -> str:
        return self.__nome

    def get_dinheiro(self) -> float:
        return self.__dinheiro

    def get_altura_veiculo(self) -> float:
        return self.__altura_veiculo


class Vaga:
    """Representa uma vaga identificada por fila e coluna."""

    def __init__(self, etiqueta: str):
        self.__etiqueta = etiqueta
        self.__ocupada = False
        self.__motorista: Motorista | None = None

    def get_etiqueta(self) -> str:
        return self.__etiqueta

    def is_ocupada(self) -> bool:
        return self.__ocupada

    def ocupar(self, motorista: Motorista) -> None:
        self.__ocupada = True
        self.__motorista = motorista


class Estacionamento:
    """Gerencia a grade 3x4 de vagas e a entrada de motoristas."""

    def __init__(self, valor_diaria: float, altura_maxima: float):
        self.__valor_diaria = valor_diaria
        self.__altura_maxima = altura_maxima
        self.__vagas: list[Vaga] = [
            Vaga(f"{fila}{col}")
            for fila in range(1, 4)
            for col in ("A", "B", "C", "D")
        ]

    def tem_vaga_livre(self) -> bool:
        return any(not vaga.is_ocupada() for vaga in self.__vagas)

    def estacionar(self, motorista: Motorista) -> bool:
        print(
            f"\nTentando estacionar {motorista.get_nome()} "
            f"(altura {motorista.get_altura_veiculo():.2f}m, {motorista.get_dinheiro():.2f} €)..."
        )

        if motorista.get_dinheiro() < self.__valor_diaria:
            print("Não tem dinheiro suficiente para a diária.")
            return False

        if motorista.get_altura_veiculo() > self.__altura_maxima:
            print("Veículo excede a altura máxima permitida.")
            return False

        if not self.tem_vaga_livre():
            print("Estacionamento lotado!")
            return False

        vaga_sorteada = random.choice(self.__vagas)
        if vaga_sorteada.is_ocupada():
            print(f"Vaga {vaga_sorteada.get_etiqueta()} ocupada, buscando outra...")
            vagas_livres = [v for v in self.__vagas if not v.is_ocupada()]
            vaga_sorteada = random.choice(vagas_livres)

        vaga_sorteada.ocupar(motorista)
        print(f"Estacionado na vaga {vaga_sorteada.get_etiqueta()}.")
        return True


def simular_estacionamento() -> None:
    estacionamento = Estacionamento(valor_diaria=15.0, altura_maxima=2.2)
    nomes = [
        "Carlos", "Ana", "Bruno", "Fernanda", "Lucas", "Mariana",
        "Rafael", "Juliana", "Pedro", "Camila", "Thiago", "Beatriz",
    ]
    qtd_motoristas = random.randint(6, 12)
    selecionados = random.sample(nomes, qtd_motoristas)

    print(f"Iniciando simulação com {qtd_motoristas} motoristas...")
    for nome in selecionados:
        dinheiro = round(random.uniform(5.0, 40.0), 2)
        altura = round(random.uniform(1.4, 2.5), 2)
        estacionamento.estacionar(Motorista(nome, dinheiro, altura))

    print("\nSimulação finalizada.")


if __name__ == "__main__":
    simular_estacionamento()
