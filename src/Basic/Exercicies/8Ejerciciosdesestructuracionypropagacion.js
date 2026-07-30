// Ejercicios de desestructuracion y propagacion //

// 1 usa deconstruccion para extraer los 2 primeros elementos de un array//

let myarray=["ecuador","colombia","peru","bolivia"]
const [pais1,pais2,pais3,pais4]=myarray
console.log(pais1,pais2)

//2 usa desestructuracion para extraer dos propiedades de un objeto//
let myobject={nombre:"juan",edad:30,ciudad:"lima"}
const {nombre,edad}=myobject
console.log(nombre,edad)

//3 usa desestructuracion para exraer dos propiedades de un arra y asignar a nuevas variables con nombres diferentes//
let myarray2=[1,2,3,4,5]
const [valor1,valor2]=myarray2
console.log(valor1,valor2)

// 4 usa propagacion para combinar dos arrays en uno nuevo//
let array1=[1,2,3]
let array2=[4,5,6]
let combinedArray=[...array1,...array2]
console.log(combinedArray)

// 5 usa propagacion para combinar dos objetos en uno nuevo//
let object1={a:1,b:2}
let object2={c:3,d:4}
let combinedObject={...object1,...object2}
console.log(combinedObject)

//6 usa propagacion para crear copia de un objeto// 
let object3={e:5,f:6}
let copyObject={...object3}
console.log(copyObject)

//7 haz un ejercicio que combine desestructuracion y propagacion//
let myarray3=[7,8,9,10]
const [num1,num2,...rest]=myarray3
console.log(num1,num2)
console.log(rest)
