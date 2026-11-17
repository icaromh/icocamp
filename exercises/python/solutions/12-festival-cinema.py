import random


class Critico:
    """Representa um crítico ou convidado da pré-estreia VIP."""

    def __init__(self, nome: str, idade: int, tem_credencial: bool, veiculo_imprensa: str):
        self.__nome = nome
        self.__idade = idade
        self.__tem_credencial = tem_credencial
        self.__veiculo_imprensa = veiculo_imprensa

    def get_nome(self) -> str:
        return self.__nome

    def get_idade(self) -> int:
        return self.__idade

    def possui_credencial(self) -> bool:
        return self.__tem_credencial

    def get_veiculo_imprensa(self) -> str:
        return self.__veiculo_imprensa


class Poltrona:
    """Representa uma poltrona da sala VIP."""

    def __init__(self, etiqueta: str):
        self.__etiqueta = etiqueta
        self.__ocupada = False
        self.__convidado: Critico | None = None

    def get_etiqueta(self) -> str:
        return self.__etiqueta

    def is_ocupada(self) -> bool:
        return self.__ocupada

    def ocupar(self, critico: Critico) -> None:
        self.__ocupada = True
        self.__convidado = critico


class SalaVIP:
    """Gerencia a grade 4x5 de poltronas e as regras de acesso da pré-estreia."""

    def __init__(self, titulo_filme: str, classificacao_indicativa: int, requer_credencial: bool):
        self.__titulo_filme = titulo_filme
        self.__classificacao_indicativa = classificacao_indicativa
        self.__requer_credencial = requer_credencial
        self.__poltronas: list[Poltrona] = [
            Poltrona(f"{fila}{col}")
            for fila in range(1, 5)
            for col in ("A", "B", "C", "D", "E")
        ]

    def tem_poltrona_livre(self) -> bool:
        return any(not p.is_ocupada() for p in self.__poltronas)

    def acomodar(self, critico: Critico) -> bool:
        cred_txt = "Sim" if critico.possui_credencial() else "Não"
        print(
            f"\nAcomodando {critico.get_nome()} ({critico.get_idade()} anos, "
            f"{critico.get_veiculo_imprensa()}, credencial: {cred_txt})..."
        )

        if critico.get_idade() < self.__classificacao_indicativa:
            print("Entrada negada: não atende à classificação indicativa.")
            return False

        if self.__requer_credencial and not critico.possui_credencial():
            print("Entrada negada: sem credencial de imprensa.")
            return False

        if not self.tem_poltrona_livre():
            print("Sala VIP lotada!")
            return False

        poltrona = random.choice(self.__poltronas)
        if poltrona.is_ocupada():
            print(f"Poltrona {poltrona.get_etiqueta()} ocupada, buscando outra...")
            livres = [p for p in self.__poltronas if not p.is_ocupada()]
            poltrona = random.choice(livres)

        poltrona.ocupar(critico)
        print(f"Sentado(a) na poltrona {poltrona.get_etiqueta()}.")
        return True


def simular_festival() -> None:
    sala = SalaVIP("Amores de Outono", classificacao_indicativa=16, requer_credencial=True)
    nomes = [
        "Marina", "Lucas", "Helena", "Gabriel", "Sofia", "Mateus",
        "Clara", "Diego", "Laura", "Arthur", "Beatriz", "Rafael",
        "Alice", "Henrique", "Valentina",
    ]
    veiculos = ["CineRevista", "Folha Cultural", "Podcast Tela", "Blog Sétima Arte"]

    qtd = random.randint(8, 15)
    selecionados = random.sample(nomes, qtd)

    print(f"Iniciando pré-estreia VIP de 'Amores de Outono' com {qtd} convidados...")
    for nome in selecionados:
        idade = random.randint(13, 55)
        credencial = random.choice([True, True, False])
        veiculo = random.choice(veiculos)
        sala.acomodar(Critico(nome, idade, credencial, veiculo))

    print("\nTodos os convidados foram gerenciados!")


if __name__ == "__main__":
    simular_festival()
