// Manej de errores //
// sirve para manejar errores en el codigo y evitar que se rompa//

let myobject = { name: "John" };
console.log(myobject.name); // esto va a dar error porque myobject es undefined

//Tratamento de errores//

// try catch //
try {
  console.log(myobject.name);
} catch (error) {
  console.log("Ocurrio un error: " + error.message);
}

//finally //
try {
  console.log(myobject.name);
} catch (error) {
  console.log("Ocurrio un error: " + error.message);
} finally {
  console.log("Este código se ejecuta siempre");
}

//lanzanmiento de errores//
//throw//

function divide(a, b) {
  if (b === 0) {
    if (typeof a !== "number" || typeof b !== "number") {
      throw new Error("Los argumentos deben ser números");  
    }
    throw new Error("No se puede dividir por cero");
  } 

return a / b;
} 

console.log(divide(10, 2)); // 5
console.log(divide(10, 0));

// Capturar varios tipos de errores //

try{
  console.log(divide(10, 0));
}
catch(error){
  if (error.message === "No se puede dividir por cero") {
    console.log("Error: No se puede dividir por cero");
  } else if (error.message === "Los argumentos deben ser números") {
    console.log("Error: Los argumentos deben ser números");
  } else {
    console.log("Ocurrio un error desconocido: " + error.message);
  }
}

// crear una excepcion personalizada //

class divideError extends Error {
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

try {
  console.log(divide(10, 0));
} catch (error) {
  if (error instanceof divideError) {
    console.log("Error: " + error.message);
    error.printNumbers();
  } else {
    console.log("Ocurrio un error desconocido: " + error.message);
  }
}