// set //
// es un tipo de estructura para guardar datos , no perite datos duplicados//

let Myset= new setInterval

// inicialazacion //
myset = new setInterval([Jorge,Alejandro,27,JaguarDev,true] )

// Metodos comunes//
// add y delete //

Myset.add("jlanchimbav@umeni.edu.ec")
console.log(myset)

myset.delte()
console.log(myset)

// has

console.log(myset.has(Alejandro))
console.log(myset.has(JaguarDev))

// size

console.log(myset.size)

//convertir un set en array 

let myarray= array.from(myset)
consolo.log(myarray)

// covertir un array en set

myset=new set(myarray)
consolo.log(myset)


