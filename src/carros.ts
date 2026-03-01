// Exercício

enum marca {
    FORD = "Ford",
    VOLKSWAGEN = "VolksWagen",
    HONDA = "Honda"
}

type carro = {
    "marca": marca,
    "volumeDoTanque":number,
    "temMotorFlex":boolean,
    calcDistancia: (qtdCombustivel:number) => number
}

const mustang:carro = {
	marca: marca.FORD,
	volumeDoTanque: 61,
	temMotorFlex: false,
    calcDistancia(qtdCombustivel : number) {
        return qtdCombustivel / 15;
    },
}

const gol:carro = {
	marca: marca.VOLKSWAGEN,
	volumeDoTanque: 55,
	temMotorFlex: true,
    calcDistancia(qtdCombustivel:number) {
        return qtdCombustivel / 15;
    },
}

const civic:carro = {
    marca: marca.HONDA,
    volumeDoTanque: 58,
    temMotorFlex:true,
    calcDistancia(qtdCombustivel:number) {
        return qtdCombustivel / 15;
    }
}

const listaCarros:Array<carro> = [civic, gol, mustang];

const distanciaCarro = listaCarros[0]?.calcDistancia(15);
console.log(distanciaCarro);

console.log("")

function buscarCarrosPorMarca(
    frota:Array<carro>,
    marca?:string
): Array<carro> {
    if (marca == undefined) {
        return frota;
    }
    return frota.filter((carro) => {
        return carro.marca === marca;
    });
}

const carrosHonda = buscarCarrosPorMarca(listaCarros, "Honda");
console.log(carrosHonda);

