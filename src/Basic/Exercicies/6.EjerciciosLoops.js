// ejercicios loops

// 1 crea un bucle que imprima los numeros del 1 al 20

for (let i=1; i<=20; i++) {
    console.log(i)
}

//2 crea un bucle que sume los numeros del 1 al 100 y muestre el resultado en consola
let suma=0
for (let i=1; i<=100; i++) {
    suma+=i
}
console.log(suma)

//3 crea un bucle que imprima los numeros pares del 1 al 50
for (let i=1; i<=50; i++) {
    if(i%2===0) {
        console.log(i)
    }
}

//4 crea un array de nombres y utiliza un bucle para imprimir cada nombre en consola
const nombres=["jorge","alejandro","darwin","javier"]
for (let i=0; i<nombres.length; i++) {
    console.log(nombres[i])
}

//5 dado un array de numeros ,usa un bucle para multiplicarlos y montrar el resultado en consola
const numeros=[1,2,3,4,5,6,7,8,9,0]
let producto=1
for (let i=0; i<numeros.length; i++) {
    producto*=numeros[i]
}
console.log(producto)

//6 Crea un bucle que imprima los 15 primeros numeros de la serie de Fibonacci
let a=0
let b=1
console.log(a)
console.log(b)
for (let i=0; i<13; i++) {
    let c=a+b
    console.log(c)
    a=b
    b=c
}