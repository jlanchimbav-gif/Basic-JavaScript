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


//  verifica si alguien puede votar y cuantos años le faltan //
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





    
