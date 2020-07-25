//Se les pide a los usuarios el último digito del factorial, el que este más a la derecha.

var N=2;

    if (N == 0 ){
        punto.innerHTML+=`
<h3>  La suma es ${1} </h3>`
    }
    else if(N==1){
        punto.innerHTML+=`
        <h3>  La suma es ${1} </h3>`
    }
    else if(N==2){
        punto.innerHTML+=`
        <h3>  La suma es ${2} </h3>`
    }
    else if(N==3){
        punto.innerHTML+=`
        <h3>  La suma es ${6} </h3>`
    }
    else if(N==4){
        punto.innerHTML+=`
        <h3>  La suma es ${4} </h3>`
    }
    else{        
    punto.innerHTML+=`
    <h3>  La suma es ${0} </h3>`    
    }
