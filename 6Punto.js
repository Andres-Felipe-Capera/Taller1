/*Llamamos suma descendente de un número cualquiera a la suma de los números
resultantes de ir quitando de forma reiterada el dígito más significativo de dicho número.
Por ejemplo, si tenemos un número de 6 dígitos, ABCDEF, entonces la suma
descendente será el resultado de la suma:
ABCDEF + BCDEF + CDEF + DEF + EF + F
Por ejemplo, la suma descendente del número 4.578 es igual a
4.578 + 578 + 78 + 8 = 5.242. Realiza un programa que calcule la suma descendente de un
número dado.*/

var entrada=0;
var suma=0;

    entrada=4578; //4578, 5083, 999 y 0. (opciones)
    if(entrada==0){
        punto.innerHTML+=`
        <h3> ...</h3>`
    }else{
        suma=calcularSuma(entrada);
        punto.innerHTML+=`
        <h3>  La suma es ${suma} </h3>`
    }


function calcularSuma(entrada){
    var total=0;
    var aux=entrada;
    var sumando=0;
    var m=10;
    var n= new String(entrada);
    for(var i=0; i<n.length;i++){
        sumando=aux%m;
        total+= sumando;
        m*=10;
    }
    return total;
}
   




