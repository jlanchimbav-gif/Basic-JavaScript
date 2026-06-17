// Ejercicios con condicionales //

// 1 imprime por consola un mensaje si el usuario y contraseña coinsiden con unos establecidos//
let usuario="jaguar";
let contraseña="9512"
if (usuario=="jaguar" && contraseña=="9512"){
    console.log("bienvenido al sistema")
}else if (usuario==false || contraseña==true){
    console.log(" usuario incorecto")
}else if(usuario==true || contraseña==false){
    console.log("contraseña incorrecta")
}else{
    console.log("usuario y contraseña incorrectos")
}


// 2  verifica si alguien puede votar y cuantos años le faltan //
let age=17
if (age <=18){
    console.log("No puede votar")
}else if(age>=18){
    console.log("Puedes votar")
}
else if (edad < 18) {
    console.log(`Te faltan ${18 - edad} años para poder votar.`);
} else {
    console.log("Ya puedes votar.");
}

// 3 verifica en que estacion del año estamos a partir de una variable mes //
let mes= "marzo"
if (mes=="diciembre" || mes=="enero" || mes=="febrero"){
    console.log("Estamos en invierno")
}else if (mes=="marzo" || mes=="abril" || mes=="mayo"){
    console.log("Estamos en primavera")
}else if (mes=="junio" || mes=="julio" || mes=="agosto"){
    console.log("Estamos en verano")
}else if (mes=="septiembre" || mes=="octubre" || mes=="noviembre"){
    console.log("Estamos en otoño")
}   else{
    console.log("Mes no valido")
}


//4 usa un swich para imprimir un saludo diferente dependiendo del idioma seleccionado //
let idioma= "frances"   
switch (idioma) {
    case "español":
        console.log("Hola")
        break;  
    case "ingles":
        console.log("Hello")
        break;
    case "frances":
        console.log("Bonjour")
        break;
    case "italiano":
        console.log("Ciao")
        break;
    default:
        console.log("Idioma no soportado")
        break;
}