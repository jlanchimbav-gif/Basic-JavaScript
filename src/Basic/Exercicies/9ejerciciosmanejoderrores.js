// ejercicio 9: manejo de errores //

// 1. crea una exepcion usando try y catch

let myset = [1, 2, 3, 4, 5.0];

try {
    console.log(myset[5]);
} catch (error) {
    console.log("EL set solo contiene numeros enteros");
}

console.log(myset);

//2 lanza una exepcion generica//

function suma(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        throw new Error("Los argumentos deben ser numeros");
    }   
    return a + b;
}

//3 creaa una ecepcion personalizada//

class SumaError extends Error { 
    constructor(message, a, b) {
        super(message);
        this.a = a;
        this.b = b;
    }

    printNumbers() {
        console.log("Número a: " + this.a);
        console.log("Número b: " + this.b);
    }
}

//4 captura varios tipos de errores//

try {
    console.log(suma(10, "5"));
} catch (error) {
    if (error instanceof SumaError) {
        console.log("Error: " + error.message);
        error.printNumbers();
    } else {
        console.log("Ocurrio un error desconocido: " + error.message);
    }
}

//5 crea un bucle que tramsforme a float 3 numros y capture y muestre los errores//

let numbers = ["10", "20", "30", "abc", "40"];

for (let i = 0; i < numbers.length; i++) {
    try {
        let num = parseFloat(numbers[i]);
        if (isNaN(num)) {
            throw new Error("El valor no es un número válido: " + numbers[i]);
        }
        console.log("Número convertido: " + num);
    } catch (error) {
        console.log("Ocurrio un error: " + error.message);
    }
}

// cea una funcion que realize intentos en caso de error hasta maximo 10 veces//

function attemptOperation(operation, maxAttempts) {
    let attempts = 0;
    while (attempts < maxAttempts) {
        try {
            operation();
            console.log("Operación exitosa");
            return;
        } catch (error) {
            attempts++;
            console.log("Ocurrio un error: " + error.message);
            console.log("Intento " + attempts + " de " + maxAttempts);
        }
    }
    console.log("Se alcanzó el número máximo de intentos");
}
