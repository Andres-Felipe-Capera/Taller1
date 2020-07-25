/*Hay una conjetura que dice que todas las abuelas del mundo cuando van a decir el
nombre de un nieto, dicen primero el nombre de muchos otros nietos antes de decir el
nombre correcto. El gobierno ha ideado una prueba para saber si una persona mayor
es abuela o no. La prueba consiste en enseñar una foto de un nieto y preguntar cómo
se llama ese nieto, anotando los nombres que dice la mujer. Si la mujer sólo ha dicho
el nombre del nieto al final de la lista de nombres se considera que es una abuela
verdadera, en caso contrario es una falsa abuela.*/

var casos, cont1;
casos=1;
while(casos--){
    var name, aux;
    var aux=1;
    name="mireia";
    cont1=5;
    if(cont1==1){
        aux=0;
    }
    for(var i=0;i<cont1-1;i++){
        cont="ximo vicente maria vicente mireia ";
        if(cont==name){
            aux=0;
        }
    }
    cont="mireia";
    if(cont!=name){
        aux=0;
    }
    if(aux==0){
    punto.innerHTML+=`
    <h3> Falsa</h3>`
    }else{
    punto.innerHTML+=`
    <h3> Verdadera</h3>`
    }
}


