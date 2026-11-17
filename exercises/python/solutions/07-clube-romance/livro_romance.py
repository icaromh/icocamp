class LivroRomance:
    """Representa um livro de romance com controle de leitura e avaliação."""

    def __init__(self, titulo: str, autor: str, num_paginas: int):
        self.__titulo = titulo
        self.__autor = autor
        self.__num_paginas = num_paginas
        self.__paginas_lidas = 0
        self.__nota: float | None = None

    def get_titulo(self) -> str:
        return self.__titulo

    def get_autor(self) -> str:
        return self.__autor

    def get_num_paginas(self) -> int:
        return self.__num_paginas

    def get_paginas_lidas(self) -> int:
        return self.__paginas_lidas

    def get_nota(self) -> float | None:
        return self.__nota

    def set_paginas_lidas(self, valor: int) -> None:
        if valor < 0:
            self.__paginas_lidas = 0
        elif valor > self.__num_paginas:
            self.__paginas_lidas = self.__num_paginas
        else:
            self.__paginas_lidas = valor

    def set_nota(self, valor: float) -> None:
        if 0 <= valor <= 5:
            self.__nota = valor

    def ler_paginas(self, qtd: int) -> str:
        if qtd > 0:
            self.set_paginas_lidas(self.__paginas_lidas + qtd)
        progresso = (self.__paginas_lidas / self.__num_paginas) * 100
        return f"Leitura de '{self.__titulo}': {progresso:.1f}% concluída."

    def avaliar(self, nota: float) -> str:
        if self.__paginas_lidas < self.__num_paginas:
            return "Termine a leitura antes de avaliar o livro."
        if not (0 <= nota <= 5):
            return "A nota deve estar entre 0 e 5."
        self.set_nota(nota)
        return f"Livro '{self.__titulo}' avaliado com nota {self.__nota:.1f}/5."

    def __str__(self) -> str:
        nota_txt = f"{self.__nota:.1f}/5" if self.__nota is not None else "Sem avaliação"
        return (
            f"'{self.__titulo}' de {self.__autor} | "
            f"{self.__paginas_lidas}/{self.__num_paginas} páginas | "
            f"Nota: {nota_txt}"
        )
