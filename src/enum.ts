// Enums são estruturas de dados que permitem a declaração de tipos de variáveis quando elas podem assumir valores restritos pré-definidos (Dados que não mudam:
enum CesarSquads {
    UM = "André",
    DOIS = "Roberto",
    TRES = "Turing"
}

type CesarTeacher = {
    class: CesarSquads
}

const andre: CesarTeacher = {
    class: CesarSquads.UM
}

