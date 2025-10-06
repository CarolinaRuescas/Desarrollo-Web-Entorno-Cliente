/*
3.Crea una lista de notas. Calcula la media total y la media sólo de los aprobados. BONUS si se hace con y sin arrays.
*/

var notas = [9,5,6,7,8,4 ,3 ];
let suma = 0;
let sumaAprobados = 0;
let sumaSuspensos = 0;
let countAprobados = 0;
let countSuspenso = 0;





for(i = 0; i < notas.length ; i++){
    suma += notas [i];
    if  (notas[i] < 5){
    sumaSuspensos += notas[i];
    countSuspensos++;

    }else{
    sumaAprobados += notas[i];
    countAprobados++;

    }
    
}
let media = suma/notas.length;
let mediaAprobados = sumaAprobados /countAprobados
let mediaSuspensos= sumaSuspensos /countSuspensos

alert("La media total de los aprobados es " + mediaAprobados + ". La media total de los suspensos es " + mediaSuspensos);
