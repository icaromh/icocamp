class Personagem:
    """Representa um personagem do elenco de uma novela."""

    def __init__(self, codigo: str, nome: str, ator: str, papel: str):
        self.__codigo = codigo
        self.__nome = nome
        self.__ator = ator
        self.__papel = papel
        self.__em_cena = True

    def get_codigo(self) -> str:
        return self.__codigo

    def get_nome(self) -> str:
        return self.__nome

    def get_ator(self) -> str:
        return self.__ator

    def get_papel(self) -> str:
        return self.__papel

    def is_em_cena(self) -> bool:
        return self.__em_cena

    def sair_de_cena(self) -> None:
        self.__em_cena = False

    def voltar_a_cena(self) -> None:
        self.__em_cena = True


class Novela:
    """Representa uma novela e seu elenco de personagens."""

    def __init__(self, titulo: str, emissora: str, capitulos_previstos: int):
        self.__titulo = titulo
        self.__emissora = emissora
        self.__capitulos_previstos = capitulos_previstos
        self.__personagens: list[Personagem] = []

    def get_titulo(self) -> str:
        return self.__titulo

    def get_emissora(self) -> str:
        return self.__emissora

    def get_capitulos_previstos(self) -> int:
        return self.__capitulos_previstos

    def get_personagens(self) -> list[Personagem]:
        return self.__personagens

    def adicionar_personagem(self, personagem: Personagem) -> None:
        self.__personagens.append(personagem)

    def remover_personagem(self, codigo_personagem: str) -> bool:
        for personagem in self.__personagens:
            if personagem.get_codigo() == codigo_personagem:
                self.__personagens.remove(personagem)
                return True
        return False


def buscar_novela(novelas: list[Novela], titulo: str) -> Novela | None:
    for novela in novelas:
        if novela.get_titulo().lower() == titulo.lower():
            return novela
    return None


def buscar_personagem(novelas: list[Novela], codigo: str) -> Personagem | None:
    for novela in novelas:
        for personagem in novela.get_personagens():
            if personagem.get_codigo() == codigo:
                return personagem
    return None


def menu() -> None:
    novelas: list[Novela] = []
    while True:
        print("\n=== Elenco de Novelas ===")
        print("1 - Cadastrar novela")
        print("2 - Remover novela")
        print("3 - Cadastrar personagem em uma novela")
        print("4 - Tirar ou retornar personagem de cena")
        print("5 - Listar elenco de uma novela")
        print("6 - Sair")
        opcao = input("Opção: ")

        if opcao == "1":
            titulo = input("Título da novela: ")
            if buscar_novela(novelas, titulo):
                print("Novela já cadastrada.")
                continue
            emissora = input("Emissora: ")
            capitulos = int(input("Capítulos previstos: "))
            novelas.append(Novela(titulo, emissora, capitulos))
            print("Novela cadastrada!")

        elif opcao == "2":
            titulo = input("Título da novela para remover: ")
            novela = buscar_novela(novelas, titulo)
            if novela:
                novelas.remove(novela)
                print("Novela removida.")
            else:
                print("Novela não encontrada.")

        elif opcao == "3":
            titulo = input("Título da novela: ")
            novela = buscar_novela(novelas, titulo)
            if not novela:
                print("Novela não encontrada.")
                continue
            codigo = input("Código do personagem: ")
            if buscar_personagem(novelas, codigo):
                print("Já existe um personagem com esse código.")
                continue
            nome = input("Nome do personagem: ")
            ator = input("Ator/Atriz: ")
            papel = input("Papel (Protagonista/Vilão/Coadjuvante): ")
            novela.adicionar_personagem(Personagem(codigo, nome, ator, papel))
            print("Personagem adicionado à novela!")

        elif opcao == "4":
            codigo = input("Código do personagem: ")
            personagem = buscar_personagem(novelas, codigo)
            if not personagem:
                print("Personagem não encontrado.")
                continue
            if personagem.is_em_cena():
                personagem.sair_de_cena()
                print(f"{personagem.get_nome()} saiu de cena.")
            else:
                personagem.voltar_a_cena()
                print(f"{personagem.get_nome()} voltou à cena.")

        elif opcao == "5":
            titulo = input("Título da novela: ")
            novela = buscar_novela(novelas, titulo)
            if not novela:
                print("Novela não encontrada.")
                continue
            em_cena = [p for p in novela.get_personagens() if p.is_em_cena()]
            fora = [p for p in novela.get_personagens() if not p.is_em_cena()]
            print(f"\nElenco de '{novela.get_titulo()}' ({novela.get_emissora()}):")
            print("Em cena:")
            for p in em_cena:
                print(f" - [{p.get_codigo()}] {p.get_nome()} ({p.get_papel()}) - {p.get_ator()}")
            print("Fora de cena:")
            for p in fora:
                print(f" - [{p.get_codigo()}] {p.get_nome()} ({p.get_papel()}) - {p.get_ator()}")

        elif opcao == "6":
            break
        else:
            print("Opção inválida.")


if __name__ == "__main__":
    menu()
