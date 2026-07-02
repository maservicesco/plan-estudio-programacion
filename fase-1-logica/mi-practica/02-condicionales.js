const edad = 20;

if (edad >= 18) {
    console.log ("Sos mayor de edad true");
}else {
    console.log ("Sos menor de edad false");
}

const temperatura = 25;
if (temperatura >= 30) {
    console.log ("hace calor");
} else if (temperatura >= 15) {
    console.log ("esta agradable");
}else{
    console.log("hace frio");
}

const TieneEntrada = false;

if (edad >= 18 && TieneEntrada) {
    console.log("Puede entrar al recital");
}else{
    console.log("Acceso Denegado");
}

