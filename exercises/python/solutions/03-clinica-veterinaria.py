class Pet:
    """Representa um animal cadastrado na clínica veterinária."""

    def __init__(self, codigo: str, nome: str, especie: str):
        self.__codigo = codigo
        self.__nome = nome
        self.__especie = especie
        self.__vacinado = False

    def get_codigo(self) -> str:
        return self.__codigo

    def get_nome(self) -> str:
        return self.__nome

    def get_especie(self) -> str:
        return self.__especie

    def is_vacinado(self) -> bool:
        return self.__vacinado

    def vacinar(self) -> None:
        self.__vacinado = True

    def registrar_atendimento(self) -> str:
        status = "Vacinado" if self.__vacinado else "Não vacinado"
        return f"Atendimento de {self.__nome} ({self.__especie}) - Status: {status}"


class Tutor:
    """Representa um tutor responsável por um ou mais pets."""

    def __init__(self, nome: str, cpf: str):
        self.__nome = nome
        self.__cpf = cpf
        self.__pets: list[Pet] = []

    def get_nome(self) -> str:
        return self.__nome

    def get_cpf(self) -> str:
        return self.__cpf

    def get_pets(self) -> list[Pet]:
        return self.__pets

    def adicionar_pet(self, pet: Pet) -> None:
        self.__pets.append(pet)

    def remover_pet(self, codigo_pet: str) -> bool:
        for pet in self.__pets:
            if pet.get_codigo() == codigo_pet:
                self.__pets.remove(pet)
                return True
        return False


def buscar_tutor(tutores: list[Tutor], cpf: str) -> Tutor | None:
    for tutor in tutores:
        if tutor.get_cpf() == cpf:
            return tutor
    return None


def buscar_pet(tutores: list[Tutor], codigo: str) -> Pet | None:
    for tutor in tutores:
        for pet in tutor.get_pets():
            if pet.get_codigo() == codigo:
                return pet
    return None


def menu() -> None:
    tutores: list[Tutor] = []
    while True:
        print("\n=== Clínica Veterinária ===")
        print("1 - Cadastrar tutor")
        print("2 - Remover tutor")
        print("3 - Cadastrar pet para um tutor")
        print("4 - Vacinar pet")
        print("5 - Listar pets de um tutor")
        print("6 - Sair")
        opcao = input("Opção: ")

        if opcao == "1":
            nome = input("Nome do tutor: ")
            cpf = input("CPF/DNI do tutor: ")
            if buscar_tutor(tutores, cpf):
                print("Tutor já cadastrado.")
            else:
                tutores.append(Tutor(nome, cpf))
                print("Tutor cadastrado com sucesso!")

        elif opcao == "2":
            cpf = input("CPF/DNI do tutor para remover: ")
            tutor = buscar_tutor(tutores, cpf)
            if tutor:
                tutores.remove(tutor)
                print("Tutor removido.")
            else:
                print("Tutor não encontrado.")

        elif opcao == "3":
            cpf = input("CPF/DNI do tutor: ")
            tutor = buscar_tutor(tutores, cpf)
            if not tutor:
                print("Tutor não encontrado.")
                continue
            codigo = input("Código do pet: ")
            if buscar_pet(tutores, codigo):
                print("Já existe um pet com esse código.")
                continue
            nome_pet = input("Nome do pet: ")
            especie = input("Espécie: ")
            tutor.adicionar_pet(Pet(codigo, nome_pet, especie))
            print("Pet cadastrado e associado ao tutor!")

        elif opcao == "4":
            codigo = input("Código do pet para vacinar: ")
            pet = buscar_pet(tutores, codigo)
            if pet:
                pet.vacinar()
                print(pet.registrar_atendimento())
            else:
                print("Pet não encontrado.")

        elif opcao == "5":
            cpf = input("CPF/DNI do tutor: ")
            tutor = buscar_tutor(tutores, cpf)
            if not tutor:
                print("Tutor não encontrado.")
                continue
            pets = tutor.get_pets()
            if not pets:
                print("Este tutor não possui pets cadastrados.")
            else:
                print(f"Pets de {tutor.get_nome()}:")
                for pet in pets:
                    print(" -", pet.registrar_atendimento())

        elif opcao == "6":
            break
        else:
            print("Opção inválida.")


if __name__ == "__main__":
    menu()
