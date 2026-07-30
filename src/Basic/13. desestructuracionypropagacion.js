// desestructuracion //
//permite extraer valores de arreglos u objetos y asignarlos a variables individuales

miarrray=[Jorge,Alejandro,27,JaguarDev,true]
const [nombre1,nombre2,edad,alias,activo]=miarrray

mymap=new Map([
    ["nombre","Alejandro"],
    ["nombre2","Jorge"],
    ["edad","27"],
    ["Alias","JaguarDev"],
])
const [nombre,nombre2,edad,alias]=mymap.values()

//sintaxis de array//
let myvalue0, myvalue1=myarray
console.log(myvalue0) //undefined
console.log(myvalue1) // [Jorge,Alejandro,27,JaguarDev,true]

// array con valores predefinidos//
let myarray2=[1,2,3,4,5]
let [myvalue0=10,myvalue1=20,myvalue2=30,myvalue3=40,myvalue4=50]=myarray2
console.log(myvalue0) // 1

// sintaxis con objetos //
let myobject={nombre:"Jorge",apellido:"Alejandro",edad:27,alias:"JaguarDev"}
const {nombre,apellido,edad,alias}=myobject
console.log(nombre) // Jorge
console.log(apellido) // Alejandro
console.log(edad) // 27
console.log(alias) // JaguarDev

//objetos anidados//
let myperson3={
    rstname:["Jorge"],
    name:["Alejandro"],
    age:int=27,
    Alias:["Jaguardev"],
    walk:function(){
        console.log("la persona camina")
    },
    "university":{
        "name":["Universidad estatal de milagro"],
        "rama":["Ingenieria en TiSC"],
        student:function(){
            console.log("la persona estudia e la universidad")
        }
    }
}
console.log(myperson3)

let {rstname,name,age,Alias,university}=myperson3

// propagacion //
// permite combinar arreglos u objetos en uno solo

let myarray2=[...myarray1,...myarray2]=[1,2,3,4,5] // genera una copia
let myarray3=[...myarray1,...myarray2]=[1,2,3,4,5] // genera una copia

console.log(myarray2) // [1,2,3,4,5]
console.log(myarray3) // [1,2,3,4,5]

//sintaxis con objetos //
let myobject1={nombre:"Jorge",apellido:"Alejandro",edad:27,alias:"JaguarDev"}
let myobject2={...myobject1,ciudad:"Milagro"} // genera una copia y agrega una propiedad
console.log(myobject2) // {nombre:"Jorge",apellido:"Alejandro",edad:27,alias:"JaguarDev",ciudad:"Milagro"}

