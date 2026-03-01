enum cores {
    PRETO = "Preto",
    BRANCO = "Branco",
    AZUL = "Azul",
    AMARELO = "Amarelo"
}

type Pessoa = {
    "nome":string,
    "idade":number,
    "corFavorita":cores
}

const andre:Pessoa = {
    nome: "André",
    idade: 20,
    corFavorita: cores.PRETO
}

const anaClara:Pessoa = {
    nome: "Ana Clara",
    idade: 20,
    corFavorita: cores.BRANCO
}

const jorge:Pessoa = {
    nome:"Jorge Felipe",
    idade:0,
    corFavorita:cores.AZUL
}

const mariaTeresa:Pessoa = {
    nome:"Maria Teresa",
    idade:0,
    corFavorita:cores.AMARELO
}
