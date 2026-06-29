// Loops o bucles con JavaScript //
// son estructuras de control que sirven para repetir una parte del codigo
//mientras la estructura cumpla algo verdadero o falso 
// ayudan a automatizar procesos con grandes volumenes de datos.

// for 

for(let i=0; i<5; i++ ) {
    console.log(`hola javascript ${i}`)
}
const numeros=[1,2,3,4,5]
for(let i=0; i<5; i++ ) {
    console.log(`hola javascript: ${numeros[i]}`)
}

// while 
let i=4
while(i>=4 && i<5) {
    console.log(`hola javascript: ${numeros[i]}`)
    i++
}

// do while
let j=0 
do {
    console.log(`hola javascript: ${numeros[j]}`)
    j++
}while(j<5) 

// for of
let myarray=[1,2,3,4,5]
for (const iterator of myarray) {
    console.log(`hola javascript: ${iterator}`)
}
 
let myset=new Set([1,2,3,4,5])
for (const iterator of myset) {
    console.log(`hola javascript: ${iterator}`)
}

let mymap=new Map([["a",1],["b",2],["c",3]])
for (const [key, value] of mymap) {
    console.log(`hola javascript: ${key} ${value}`)
}

// break y continue
for(let i=0; i<10; i++ ) {
    if(i===5) {
        break
    }
    console.log(`hola javascript: ${i}`)
} 

for(let i=0; i<10; i++ ) {
    if(i===5) {
        continue
    }   
    console.log(`hola javascript: ${i}`)
}
