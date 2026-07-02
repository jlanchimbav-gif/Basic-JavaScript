//objetos //
// Un onjeto funciona por clave_valor y tiene una funcionalidad especifica//

// sintaxis

let person={
    firstname:["Jorge"],
    name:["Alejandro"],
    age:int=27,
    Alias:["Jaguardev"],
}

// acceso a propiedades
// notacion de punto
console.log(person.firstname)

// notacion de corchetes
console.log(person["age"])

// nodificacion de propiedades

person.age="26"
console.log(person.age)

// eliminacion de propiedades
delete person.age
console.log(person)

//Nueva propiedad

person.email="jlanchimbav@unemi.edu.ec"
person.age="27"
console.log(person)

// metodos

let myperson2={
    rstname:["Jorge"],
    name:["Alejandro"],
    age:int=27,
    Alias:["Jaguardev"],
    walk:function(){
        console.log("la persona camina")
    }
}
myperson2.walk()

// Anidacion de objetos

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

// igualdad entre objetos 

let myperson4={
     rstname:["Jorge"],
    name:["Alejandro"],
    age:int=28,
    Alias:["Jaguardev"],
}
console.log(person== myperson2)

// ietracion 

for(let key in myperson4){
    console.log(key + ":" + myperson4[key])
}

// funciones como objetos 

function person(name,age){
    this.name=name,
    this.age=age
}
let myperson5=("Jorge","29")
console.log(myperson5)

