import random


class Capitulo:
    """Representa a configuração de exibição e audiência de um capítulo."""

    def __init__(self, numero: int, pontos_base: int, chance_plot_twist: int):
        self.numero = numero
        self.pontos_base = pontos_base
        self.chance_plot_twist = chance_plot_twist

    def exibir(self) -> int:
        pontos = random.randint(self.pontos_base - 3, self.pontos_base + 5)
        if random.randint(1, 100) <= self.chance_plot_twist:
            print("  -> Plot twist bombástico no ar! (+10 pontos)")
            pontos += 10
        self.numero += 1
        return max(0, pontos)


class Novela:
    """Representa uma novela competindo pelo horário nobre."""

    def __init__(self, titulo: str, emissora: str, capitulo_config: Capitulo):
        self.titulo = titulo
        self.emissora = emissora
        self.audiencia_acumulada = 0
        self.ativa = True
        self.capitulo_config = capitulo_config

    def transmitir_capitulo(self) -> int:
        if not self.ativa:
            return 0
        pontos = self.capitulo_config.exibir()
        self.audiencia_acumulada += pontos
        return pontos

    def encerrar(self) -> None:
        self.ativa = False


class DisputaHorario:
    """Gerencia a batalha semanal de audiência entre novelas."""

    def __init__(self, novelas: list[Novela], total_semanas: int = 6):
        if not (2 <= len(novelas) <= 3):
            print("Quantidade inválida; ajustando para 2 novelas por padrão.")
            novelas = novelas[:2]
        self.novelas = novelas
        self.total_semanas = total_semanas
        self.semana_atual = 1

    def simular_semana(self) -> None:
        print(f"\n--- Semana {self.semana_atual} ---")
        for novela in self.novelas:
            if not novela.ativa:
                continue
            pontos = novela.transmitir_capitulo()
            print(
                f"{novela.titulo} ({novela.emissora}): "
                f"+{pontos} pts | Total: {novela.audiencia_acumulada} pts"
            )
            if pontos < 15:
                novela.encerrar()
                print(f"  -> {novela.titulo} foi cancelada por baixa audiência!")
        self.semana_atual += 1

    def fim_da_temporada(self) -> bool:
        ativas = [n for n in self.novelas if n.ativa]
        if self.semana_atual > self.total_semanas or len(ativas) <= 1:
            candidatas = ativas if ativas else self.novelas
            campea = max(candidatas, key=lambda n: n.audiencia_acumulada)
            print(
                f"\n🏆 Campeã de audiência: {campea.titulo} ({campea.emissora}) "
                f"com {campea.audiencia_acumulada} pontos!"
            )
            return True
        return False


def executar_disputa() -> None:
    qtd = int(input("Quantas novelas na disputa (2 ou 3)? "))
    if qtd not in (2, 3):
        qtd = 2

    novelas = []
    for i in range(1, qtd + 1):
        titulo = input(f"Título da Novela {i}: ")
        emissora = input(f"Emissora da Novela {i}: ")
        novelas.append(Novela(titulo, emissora, Capitulo(1, 20, 25)))

    disputa = DisputaHorario(novelas, total_semanas=6)
    while not disputa.fim_da_temporada():
        disputa.simular_semana()


if __name__ == "__main__":
    executar_disputa()
