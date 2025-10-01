/*
EJERCICIO 3
Crea un programa que “cuente” la cantidad de dígitos de un número (sin funciones).
*/

var number = Number(prompt("Intorduce un número con varios dígitos"));
var digito = number.toString().length;

alert("El numero tiene " + digito + " dígitos.");

var number;
cont =1;
control = 10;
number = Number(prompt("Intorduce un número"));

while (control <= number){
    cont++;
    control *= 10;
}

alert("La cantidad de digitos es" + cont);