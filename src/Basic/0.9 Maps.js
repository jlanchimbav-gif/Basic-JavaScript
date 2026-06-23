// Maps //
// esta estructura se crea por el metedo (ki,value)dato y valor 
// para cada dato una clave unica

// declaracion 
let mymap=new Map

// inicializacion

mymap=new Map([
    ["nombre","Alejandro"],
    ["nombre2","Jorge"],
    ["edad","27"],
    ["Alias","JaguarDev"],
])

console.log(mymap)

// set agrega valores o actualiza valores 

mymap.set("nombre","George")
mymap.set("Alias","JaguarKing")

// get sirve para recuperar el valor 

console.log(Mymap.get(nombre))
console.log(Mymap.get(Alias))

// has comprueba si existe un valor en el mapa

console.log(Mymap.has(nombre))
console.log(Mymap.has(Alias))

// keys and values

console.log(Mymap.keys())
console.log(Mymap.values())

// size

comsole.log(Mymap.size)

// delete un elemento del mapa

Mymap.delete(age)


// clear elimina todos los elementos del mapa

// Mymap.clear()