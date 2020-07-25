//Escribe un programa que muestre los N primeros números primos y la suma de los mismos.
var NumeroPrimo=10;
var contandor=0;
var sumatorio=0;
while(NumeroPrimo>0){
  for (var i=1;i <= NumeroPrimo;i++){
    if(NumeroPrimo % i==0){
      contandor++;
    }
    if(contandor==2 && i==NumeroPrimo){
      sumatorio+= NumeroPrimo; 
      punto.innerHTML+=`
      <h3>${NumeroPrimo}</h3>`
    }
    if(i==NumeroPrimo){
      contandor=0;
    }
  }
  NumeroPrimo--;
}
punto.innerHTML+=`
      <h3>La suma es de: ${sumatorio}</h3>`

      

