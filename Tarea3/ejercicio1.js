/*
1.Se le pide al usuario el número de valores a introducir. 
Posteriormente se le van pidiendo.Se le devuelven ordenados. ¿Cómo?
*/

var cantidad = Number(prompt("¿Cúnatos números quieres introducir?"));

let valores = [];
let i = 0;

while (i < cantidad) {
  let valor = parseFloat(prompt("Introduce el valor #" + (i + 1)));
  
  if (!isNaN(valor)) {
    valores.push(valor);
    i++;
  } else {
    alert("Eso no es un número. Intenta otra vez.");
  }
}

valores.sort(function(a, b) { return a - b; });

alert("Valores ordenados: " + valores.join(", "));
