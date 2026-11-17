from smartphone import Smartphone


def criar_smartphones() -> None:
    smartphones = []

    for i in range(1, 3):
        print(f"\n--- Cadastro do Smartphone {i} ---")
        marca = input("Marca: ")
        modelo = input("Modelo: ")
        armazenamento = int(input("Armazenamento (GB): "))
        bateria = int(input("Bateria inicial (0 a 100): "))
        smartphones.append(Smartphone(marca, modelo, armazenamento, bateria))

    print("\n--- Testando métodos ---")
    for celular in smartphones:
        print(celular)
        celular.ligar_desligar()
        print(celular.usar_app("Instagram", 15))
        celular.set_armazenamento_gb(celular.get_armazenamento_gb() + 64)
        print("Após uso e upgrade:", celular)
        celular.ligar_desligar()


if __name__ == "__main__":
    criar_smartphones()
