from livro_romance import LivroRomance


def registrar_leituras() -> None:
    livros = []
    for i in range(1, 3):
        print(f"\n--- Livro {i} ---")
        titulo = input("Título: ")
        autor = input("Autor(a): ")
        paginas = int(input("Número de páginas: "))
        livros.append(LivroRomance(titulo, autor, paginas))

    print("\n--- Testando leituras e avaliações ---")
    for livro in livros:
        print(livro.ler_paginas(50))
        print(livro.avaliar(4.5))
        print(livro.ler_paginas(livro.get_num_paginas()))
        print(livro.avaliar(4.8))
        print(livro)


if __name__ == "__main__":
    registrar_leituras()
