const user:string = "André Braga";
let age:number = 15;
let isActive:boolean = true;

console.log("User:" + user + " Age: " + age + "Ativo: " + isActive);

// Utilizando union type para declarar assumir valores null ou undefined:
let text:string | undefined;
let message:string | null;

//  Declarando arrays de duas formas diferentes:
const listaNumerica:Array<number> = [1, 2, 3];
const listaNumericaDois:number[] = [4, 5, 6];

// Declarando objetos:
const pessoa: {"nome":string, "idade":number} = {
    nome: "Astrodev",
    idade: 24
}

// Para evitar repetição de código, é possível declarar variáveis de tipo da seguinte forma:
type person = {
    "name":string,
    "age":number
}

const Astrodev:person = {
    name:"Astrodev",
    age:20
}

// O tipo Any deve ser evitado, inclusive no tscofing eu habilitei para lançar um erro em caso de sua existência.
let aux:any
aux = "aux"
aux = 0
aux = true

// Exercício
type carro = {
    "marca": string,
    "volumeDoTanque":number,
    "temMotorFlex":boolean
}

const mustang:carro = {
	marca: "Ford",
	volumeDoTanque: 61,
	temMotorFlex: false
}

const gol:carro = {
	marca: "VolksWagen",
	volumeDoTanque: 55,
	temMotorFlex: true
}

const civic:carro = {
    marca:"Honda",
    volumeDoTanque: 58,
    temMotorFlex:true
}

const listaCarros:Array<carro> = [civic, gol, mustang];
console.log(listaCarros)