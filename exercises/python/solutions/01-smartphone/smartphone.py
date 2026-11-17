class Smartphone:
    """Representa um smartphone com controles de bateria e estado."""

    def __init__(self, marca: str, modelo: str, armazenamento_gb: int, bateria_percentual: int):
        self.__marca = marca
        self.__modelo = modelo
        self.__armazenamento_gb = armazenamento_gb
        self.__bateria_percentual = 0
        self.set_bateria_percentual(bateria_percentual)
        self.__ligado = False

    def get_marca(self) -> str:
        return self.__marca

    def get_modelo(self) -> str:
        return self.__modelo

    def get_armazenamento_gb(self) -> int:
        return self.__armazenamento_gb

    def get_bateria_percentual(self) -> int:
        return self.__bateria_percentual

    def is_ligado(self) -> bool:
        return self.__ligado

    def set_armazenamento_gb(self, valor: int) -> None:
        if valor > 0:
            self.__armazenamento_gb = valor

    def set_bateria_percentual(self, valor: int) -> None:
        if valor < 0:
            self.__bateria_percentual = 0
        elif valor > 100:
            self.__bateria_percentual = 100
        else:
            self.__bateria_percentual = valor

    def ligar_desligar(self) -> None:
        if not self.__ligado:
            if self.__bateria_percentual > 0:
                self.__ligado = True
                print(f"{self.__marca} {self.__modelo} ligado.")
            else:
                print("Não é possível ligar: bateria zerada.")
        else:
            self.__ligado = False
            print(f"{self.__marca} {self.__modelo} desligado.")

    def usar_app(self, nome_app: str, consumo_bateria: int) -> str:
        if not self.__ligado:
            return "Aparelho desligado. Ligue-o antes de usar um app."
        if consumo_bateria <= 0:
            return "Consumo de bateria inválido."
        if self.__bateria_percentual < consumo_bateria:
            return "Bateria insuficiente para abrir este aplicativo."

        self.set_bateria_percentual(self.__bateria_percentual - consumo_bateria)
        if self.__bateria_percentual == 0:
            self.__ligado = False
        return f"Usando o app: {nome_app}"

    def __str__(self) -> str:
        estado = "Ligado" if self.__ligado else "Desligado"
        return (
            f"{self.__marca} {self.__modelo} | "
            f"{self.__armazenamento_gb} GB | "
            f"Bateria: {self.__bateria_percentual}% | "
            f"Estado: {estado}"
        )
