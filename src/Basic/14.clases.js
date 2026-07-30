//clases //
// sirve para crear objetos y propiedades y metodos de esos objetos//

mymap=new Map([
    ["nombre","Alejandro"],
    ["nombre2","Jorge"],
    ["edad","27"],
    ["Alias","JaguarDev"],

])

class Persona{
    constructor(nombre,apellido,edad,alias){
        this.nombre=nombre
        this.apellido=apellido
        this.edad=edad
        this.alias=alias
    }
}

//sintaxis//

let persona1=new Persona("Jorge","Lanchimba",27,"JaguarDev")
console.log(persona1)
console.log(typeof persona1) // object

//valores por defecto//
class Persona2{
    constructor(nombre="Jorge",apellido="Lanchimba",edad=27,alias="JaguarDev"){
        this.nombre=nombre
        this.apellido=apellido
        this.edad=edad
        this.alias=alias
    }
}

// acesso a propiedades//
console.log(persona1.nombre)

//propiedades privadaas//
class PrivatePersona3{

#bank

    constructor(nombre,apellido,edad,alias,bank){
        this.nombre=nombre
        this.apellido=apellido
        this.edad=edad
        this.alias=alias
        this.#bank=bank
    }
    pay(){
        console.log(`Payment processed for ${this.#nombre} with account ${this.#bank}`)
    }
}

let persona3=new PrivatePersona3("Jorge","Lanchimba",27,"JaguarDev", "121213")
console.log(persona3) // PrivatePersona3 {}
console.log(persona3.#nombre)

//las propiedades privadas no se muestran ni se cambian desde fuera de la clase, solo se pueden acceder desde dentro de la clase//


// getters y  setters//

class getPersona{
#nombre
#apellido
#edad
#alias

    constructor(nombre="Jorge",apellido="Lanchimba",edad=27,alias="JaguarDev"){
        this.#nombre=nombre
        this.#apellido=apellido
        this.#edad=edad
        this.#alias=alias
    }
    get nombre(){
        return this.#nombre
    }
    set bank(newbank){
        this.#bank=newbank
    }
}

persona4=new getPersona("Jorge","Lanchimba",27,"JaguarDev")
console.log(persona4.nombre) // Jorge
persona4.nombre="Jorge2"
console.log(persona4.nombre) // Jorge2

// herencia de clases//

class Empleado extends Persona{
    constructor(nombre, apellido, edad, alias, salario){
        super(nombre, apellido, edad, alias);
        this.salario=salario;
    }
}

//metodos estaticos//
class MathUtils{
    static add(a,b){
        return a + b;
    }
}
console.log(MathUtils.add(2,3)) 