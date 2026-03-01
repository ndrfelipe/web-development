"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var marca;
(function (marca) {
    marca["FORD"] = "Ford";
    marca["VOLKSWAGEN"] = "VolksWagen";
    marca["HONDA"] = "Honda";
})(marca || (marca = {}));
const mustang = {
    marca: marca.FORD,
    volumeDoTanque: 61,
    temMotorFlex: false,
    calcDistancia(qtdCombustivel) {
        return qtdCombustivel / 15;
    },
};
const gol = {
    marca: marca.VOLKSWAGEN,
    volumeDoTanque: 55,
    temMotorFlex: true,
    calcDistancia(qtdCombustivel) {
        return qtdCombustivel / 15;
    },
};
const civic = {
    marca: marca.HONDA,
    volumeDoTanque: 58,
    temMotorFlex: true,
    calcDistancia(qtdCombustivel) {
        return qtdCombustivel / 15;
    }
};
const listaCarros = [civic, gol, mustang];
const distanciaCarro = (_a = listaCarros[0]) === null || _a === void 0 ? void 0 : _a.calcDistancia(15);
console.log(distanciaCarro);
console.log("");
function buscarCarrosPorMarca(frota, marca) {
    if (marca == undefined) {
        return frota;
    }
    return frota.filter((carro) => {
        return carro.marca === marca;
    });
}
const carrosHonda = buscarCarrosPorMarca(listaCarros, "Honda");
console.log(carrosHonda);
//# sourceMappingURL=carros.js.map