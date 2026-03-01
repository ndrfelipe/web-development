
type dadosEstatistica = {
    "maior":number,
    "menor":number,
    "media":number
}

type amostraDados = {
    "numeros" : number[],
    obterEstatisticas:(numeros:number[]) => dadosEstatistica
}

const amostraDeIdades:amostraDados = {
    numeros: [21, 18, 65, 44, 15, 18],
    obterEstatisticas(numeros) {
        if (numeros.length === 0) {
            throw new Error("erro: Array vazio.")
        }

        const numerosOrdenados:Array<number> = numeros.sort(
            (a, b) => a - b
        );

        console.log("Numeros ordenados: ", numerosOrdenados);

        let soma:number = 0;

        for (let num of numeros) {
            soma += num;
        }

        const estatisticas:dadosEstatistica = {
            maior: numerosOrdenados[numeros.length - 1]!,
            menor: numerosOrdenados[0]!,
            media: soma / numeros.length
        };

        return estatisticas;
    },
}

const resultado = amostraDeIdades.obterEstatisticas(amostraDeIdades.numeros);
console.log(resultado);