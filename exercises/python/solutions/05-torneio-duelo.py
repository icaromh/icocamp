import random


class Arma:
    """Representa uma arma usada por um guerreiro no torneio."""

    def __init__(self, nome: str, dano_min: int, dano_max: int, chance_critico: int):
        self.nome = nome
        self.dano_min = dano_min
        self.dano_max = dano_max
        self.chance_critico = chance_critico

    def atacar(self) -> int:
        dano = random.randint(self.dano_min, self.dano_max)
        if random.randint(1, 100) <= self.chance_critico:
            print(f"  -> Acerto CRÍTICO com {self.nome}!")
            dano *= 2
        return dano


class Guerreiro:
    """Representa um competidor do torneio."""

    def __init__(self, id_guerreiro: int, nome: str, vida: int, arma: Arma):
        self.id = id_guerreiro
        self.nome = nome
        self.vida = vida
        self.arma = arma
        self.vivo = True

    def receber_dano(self, valor: int) -> None:
        self.vida = max(0, self.vida - valor)
        if self.vida == 0:
            self.vivo = False

    def atacar_oponente(self, outro_guerreiro: "Guerreiro") -> None:
        if not self.vivo or not outro_guerreiro.vivo:
            return
        dano = self.arma.atacar()
        outro_guerreiro.receber_dano(dano)
        print(
            f"{self.nome} atacou {outro_guerreiro.nome} causando {dano} de dano "
            f"(Vida restante de {outro_guerreiro.nome}: {outro_guerreiro.vida})"
        )
        if not outro_guerreiro.vivo:
            print(f"  -> {outro_guerreiro.nome} foi derrotado!")


class Torneio:
    """Controla as rodadas e o vencedor do duelo."""

    def __init__(self, guerreiros: list[Guerreiro]):
        if not (2 <= len(guerreiros) <= 4):
            print("Quantidade inválida; ajustando para 2 guerreiros por padrão.")
            guerreiros = guerreiros[:2]
        self.guerreiros = guerreiros

    def iniciar_rodada(self) -> None:
        vivos = [g for g in self.guerreiros if g.vivo]
        for i, atacante in enumerate(vivos):
            if not atacante.vivo:
                continue
            alvos = [g for g in self.guerreiros if g.vivo and g is not atacante]
            if not alvos:
                break
            alvo = alvos[0]
            atacante.atacar_oponente(alvo)

    def fim_de_jogo(self) -> bool:
        vivos = [g for g in self.guerreiros if g.vivo]
        if len(vivos) <= 1:
            if vivos:
                print(f"\n🏆 Campeão do torneio: {vivos[0].nome}!")
            return True
        return False


def executar_torneio() -> None:
    qtd = int(input("Quantos guerreiros (2 a 4)? "))
    if not (2 <= qtd <= 4):
        qtd = 2

    armas_disponiveis = [
        Arma("Espada Longa", 12, 22, 25),
        Arma("Machado de Guerra", 15, 25, 15),
        Arma("Adagas Duplas", 8, 18, 40),
        Arma("Lança Real", 10, 20, 30),
    ]

    guerreiros = []
    for i in range(1, qtd + 1):
        nome = input(f"Nome do Guerreiro {i}: ")
        guerreiros.append(Guerreiro(i, nome, 100, armas_disponiveis[i - 1]))

    torneio = Torneio(guerreiros)
    rodada = 1
    while not torneio.fim_de_jogo():
        print(f"\n--- Rodada {rodada} ---")
        torneio.iniciar_rodada()
        rodada += 1


if __name__ == "__main__":
    executar_torneio()
