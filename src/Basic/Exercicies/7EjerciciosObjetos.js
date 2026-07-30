// crear un objeto con tre pñropiedades//

let avion={
    modelo:["carga pesada"],
    age: [2026],
    peso:["10 toneladas"]

}
// agrega una nueva propiedad//
avion.placa="hjk012"
console.log(avion)
// agregar una funcion y imprimir//
let avion={
    modelo:["carga pesada"],
    age: [2026],
    peso:["10 toneladas"],
    placa:["hjk012"],
    fly:function(){
        console.log("El avion esta volando")
    }
}
// iterar las propiedades del objeto //
for (let key in avion){
    console.log(key + ":" + avion[key])
}
// craer un objeto anidado //
let avion={
    modelo:["carga pesada"],
    age: [2026],
    peso:["10 toneladas"],
    placa:["hjk012"],
    fly:function(){
        console.log("El avion esta volando")
    },
    "ruta":{
        "comsumo_combustible":["20 galnes"],
        "distancia":["100 km"],
        "carga":["250 toneladas"],
        ruta:function(){
            console.log("El avion con placa " + this.placa + " ha cumplido la ruta")
        }
    }
}
console.log(avion.ruta);
avion.ruta.ruta();