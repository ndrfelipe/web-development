function sum (a: number, b:number): number {
    return a + b;
}

// Parâmetros opcionais:
function sayHello(name?:string):void {
    console.log("Hello, ", name || "World");    
}

sayHello();