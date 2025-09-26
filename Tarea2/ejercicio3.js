/*
EJERCICIO 3
Crea un programa que “cuente” la cantidad de dígitos de un número (sin funciones).
*/

var number = Number(prompt("Intorduce un número con varios dígitos"));
var digito = number.toString().length;

alert("El numero tiene " + digito + " dígitos.");

