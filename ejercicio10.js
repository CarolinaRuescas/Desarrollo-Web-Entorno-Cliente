/*
Mostrar los primeros 100 números primos.
*/

for (let i = 2; i <= 100; i++) {
   let primo = true;
   for (let j = i - 1; j > 1; j--) {
       if (i % j === 0) {
           primo = false;
           break;
       }
   }
   if (primo) {
       console.log(i);
   }
}

