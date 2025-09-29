/*
El adivinador: Crear un código que adivine un número del 1 al 100.
El usuario piens un número y el ordenador es el que pregunta si es o no el número 
y lo va acotando preguntando
*/

const adivinador = Math.floor(Math.random() * 100) +1;
var intentos;

do{
    intentos  = Number(prompt("Introduce un número del 1 al 100"));

    if (intentos > 100){
        alert ("El número que debes introducir debe ser menor de 100. Intentalo de nuevo");
    }else if(intentos < 0){
        alert ("El número debe ser a partir del 1. Vuelve a intentarlo");
    }else if (intentos > adivinador){
        alert("Introduce un número menor");
    }else if (intentos < adivinador ){
        alert ("Introduce un número mayor");
    }else{
        alert("CORRECTO");
    }
}
while (adivinador != intentos);

