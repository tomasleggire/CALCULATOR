const buttons = document.getElementsByClassName("button");
let arrButtons = [...buttons];

arrButtons.forEach((element, index) => {
    element.addEventListener("click", ()=>{
        element.style.opacity = "1";
        if (index == 0) {
            //document.getElementsByTagName("body")[0].style.backgroundColor = "hsl(222, 26%, 31%)";
            document.documentElement.className = "one";
        } else if (index == 1) {
            //document.getElementsByTagName("body")[0].style.backgroundColor = "hsl(0, 0%, 90%)";
            document.documentElement.className = "two";
        } else {
            //document.getElementsByTagName("body")[0].style.backgroundColor = "hsl(268, 75%, 9%)";
            document.documentElement.className = "three";
        };
    arrButtons
        .filter(function (item) {
            return item != element;
        })
        .forEach((item) => {
            item.style.opacity = "0";
        });
    });
});

let resultado = "0";
let funcion = false;
let resultadoFinal = 0;
let resultadoFuncion = "0";

const pantalla = document.querySelector(".pantalla");
pantalla.innerHTML = resultado;

const key7 = document.querySelector(".box7");
const key8 = document.querySelector(".box8");
const key9 = document.querySelector(".box9");
const key4 = document.querySelector(".box4");
const key5 = document.querySelector(".box5");
const key6 = document.querySelector(".box6");
const key1 = document.querySelector(".box1");
const key2 = document.querySelector(".box2");
const key3 = document.querySelector(".box3");
const key0 = document.querySelector(".box0");

const reset = document.querySelector(".box-reset");
const punto = document.querySelector(".box-punto");
const del = document.querySelector(".boxDel");

const suma = document.querySelector(".boxSuma");
const resta = document.querySelector(".boxResta");
const div = document.querySelector(".boxDiv");
const mult = document.querySelector(".boxMul");


const igual = document.querySelector(".box-igual");


let sumacion = false;
let restacion = false;
let multiplicacion = false;
let division = false;

const sumar = (num1,num2)=>{
    return num1 + num2;
}
const restar = (num1,num2)=>{
    return num1 - num2;
}
const dividir = (num1,num2)=>{
    return num1 / num2;
}
const multiplicar = (num1,num2)=>{
    return num1 * num2;
}

key7.addEventListener("click",()=>{
    if (funcion == false) {
        if (resultado == "0") {
            resultado = "7";
            pantalla.innerHTML = resultado;
        } else {
            resultado += "7";
            pantalla.innerHTML = resultado;
        } 
    } else {
        if (resultadoFuncion == "0") {
            resultadoFuncion = "7";
            pantalla.innerHTML = resultadoFuncion;
        } else {
            resultadoFuncion += "7";
            pantalla.innerHTML = resultadoFuncion;
        } 
    }
})
key8.addEventListener("click",()=>{
    if (funcion == false) {
        if (resultado == "0") {
            resultado = "8";
            pantalla.innerHTML = resultado;
        } else {
            resultado += "8";
            pantalla.innerHTML = resultado;
        } 
    } else {
        if (resultadoFuncion == "0") {
            resultadoFuncion = "8";
            pantalla.innerHTML = resultadoFuncion;
        } else {
            resultadoFuncion += "8";
            pantalla.innerHTML = resultadoFuncion;
        } 
    }
})
key9.addEventListener("click",()=>{
    if (funcion == false) {
        if (resultado == "0") {
            resultado = "9";
            pantalla.innerHTML = resultado;
        } else {
            resultado += "9";
            pantalla.innerHTML = resultado;
        } 
    } else {
        if (resultadoFuncion == "0") {
            resultadoFuncion = "9";
            pantalla.innerHTML = resultadoFuncion;
        } else {
            resultadoFuncion += "9";
            pantalla.innerHTML = resultadoFuncion;
        } 
    }
})


key4.addEventListener("click",()=>{
    if (funcion == false) {
        if (resultado == "0") {
            resultado = "4";
            pantalla.innerHTML = resultado;
        } else {
            resultado += "4";
            pantalla.innerHTML = resultado;
        } 
    } else {
        if (resultadoFuncion == "0") {
            resultadoFuncion = "4";
            pantalla.innerHTML = resultadoFuncion;
        } else {
            resultadoFuncion += "4";
            pantalla.innerHTML = resultadoFuncion;
        } 
    }
})
key5.addEventListener("click",()=>{
    if (funcion == false) {
        if (resultado == "0") {
            resultado = "5";
            pantalla.innerHTML = resultado;
        } else {
            resultado += "5";
            pantalla.innerHTML = resultado;
        } 
    } else {
        if (resultadoFuncion == "0") {
            resultadoFuncion = "5";
            pantalla.innerHTML = resultadoFuncion;
        } else {
            resultadoFuncion += "5";
            pantalla.innerHTML = resultadoFuncion;
        } 
    }
})
key6.addEventListener("click",()=>{
    if (funcion == false) {
        if (resultado == "0") {
            resultado = "6";
            pantalla.innerHTML = resultado;
        } else {
            resultado += "6";
            pantalla.innerHTML = resultado;
        } 
    } else {
        if (resultadoFuncion == "0") {
            resultadoFuncion = "6";
            pantalla.innerHTML = resultadoFuncion;
        } else {
            resultadoFuncion += "6";
            pantalla.innerHTML = resultadoFuncion;
        } 
    }
})
key1.addEventListener("click",()=>{
    if (funcion == false) {
        if (resultado == "0") {
            resultado = "1";
            pantalla.innerHTML = resultado;
        } else {
            resultado += "1";
            pantalla.innerHTML = resultado;
        } 
    } else {
        if (resultadoFuncion == "0") {
            resultadoFuncion = "1";
            pantalla.innerHTML = resultadoFuncion;
        } else {
            resultadoFuncion += "1";
            pantalla.innerHTML = resultadoFuncion;
        } 
    }
})
key2.addEventListener("click",()=>{
    if (funcion == false) {
        if (resultado == "0") {
            resultado = "2";
            pantalla.innerHTML = resultado;
        } else {
            resultado += "2";
            pantalla.innerHTML = resultado;
        } 
    } else {
        if (resultadoFuncion == "0") {
            resultadoFuncion = "2";
            pantalla.innerHTML = resultadoFuncion;
        } else {
            resultadoFuncion += "2";
            pantalla.innerHTML = resultadoFuncion;
        } 
    }
})
key3.addEventListener("click",()=>{
    if (funcion == false) {
        if (resultado == "0") {
            resultado = "3";
            pantalla.innerHTML = resultado;
        } else {
            resultado += "3";
            pantalla.innerHTML = resultado;
        } 
    } else {
        if (resultadoFuncion == "0") {
            resultadoFuncion = "3";
            pantalla.innerHTML = resultadoFuncion;
        } else {
            resultadoFuncion += "3";
            pantalla.innerHTML = resultadoFuncion;
        } 
    }
})
key0.addEventListener("click",()=>{
    if (funcion == false) {
        if (resultado == "0") {
            resultado = "0";
            pantalla.innerHTML = resultado;
        } else {
            resultado += "0";
            pantalla.innerHTML = resultado;
        } 
    } else {
        if (resultadoFuncion == "0") {
            resultadoFuncion = "0";
            pantalla.innerHTML = resultadoFuncion;
        } else {
            resultadoFuncion += "0";
            pantalla.innerHTML = resultadoFuncion;
        } 
    }
})
punto.addEventListener("click",()=>{
    if (funcion == false) {
        if (resultado.includes(".")){
        } else {
            resultado += ".";
            pantalla.innerHTML = resultado;
        }
    } else {
        if (resultadoFuncion.includes(".")){
        } else {
            resultadoFuncion += ".";
            pantalla.innerHTML = resultadoFuncion;
        }
    }
})
reset.addEventListener("click",()=>{
    resultado = "0";
    resultadoFuncion = "0";
    resultadoFinal = 0;
    pantalla.innerHTML = resultado;
})
del.addEventListener("click",()=>{
    if (funcion == false) {
        if (resultado == "0"){
        } else {
            resultado = resultado.substring(0, resultado.length-1);
            pantalla.innerHTML = resultado;
        }
        if (resultado == "") {
            resultado = "0";
            pantalla.innerHTML = resultado;
        }
    } else {
        if (resultadoFuncion == "0"){
        } else {
            resultadoFuncion = resultadoFuncion.substring(0, resultadoFuncion.length-1);
            pantalla.innerHTML = resultadoFuncion;
        }
        if (resultadoFuncion == "") {
            resultadoFuncion = "0";
            pantalla.innerHTML = resultadoFuncion;
        }
    }
})


suma.addEventListener("click",()=>{
    funcion = true;
    resultado = parseFloat(resultado);
    pantalla.innerHTML = resultadoFuncion;
    sumacion = true;
})
resta.addEventListener("click",()=>{
    funcion = true;
    resultado = parseFloat(resultado);
    pantalla.innerHTML = resultadoFuncion;
    restacion = true;
})
div.addEventListener("click",()=>{
    funcion = true;
    resultado = parseFloat(resultado);
    pantalla.innerHTML = resultadoFuncion;
    division = true;
})
mult.addEventListener("click",()=>{
    funcion = true;
    resultado = parseFloat(resultado);
    pantalla.innerHTML = resultadoFuncion;
    multiplicacion = true;
})


igual.addEventListener("click",()=>{
    resultadoFuncion = parseFloat(resultadoFuncion);
    if (sumacion == true){
        if (resultadoFinal != 0) {
            resultadoFinal += sumar(resultado,resultadoFuncion);
        } else {
            resultadoFinal = sumar(resultado,resultadoFuncion);
        }
        pantalla.innerHTML = resultadoFinal;
        resultado = "0";
        resultadoFuncion = "0";
        funcion = false;
        sumacion = false;
    } else if (restacion == true){
        if (resultadoFinal != 0) {
            resultadoFinal += restar(resultado,resultadoFuncion);
        } else {
            resultadoFinal = restar(resultado,resultadoFuncion);
        }
        pantalla.innerHTML = resultadoFinal;
        resultado = "0";
        resultadoFuncion = "0";
        funcion = false;
        restacion = false;




    } else if (multiplicacion == true) {
        if (resultadoFinal != 0) {
            resultadoFinal = multiplicar(resultadoFinal,resultadoFuncion);
        } else {
            resultadoFinal = multiplicar(resultado,resultadoFuncion);
        }
        pantalla.innerHTML = resultadoFinal;
        resultado = "0";
        resultadoFuncion = "0";
        funcion = false;
        multiplicacion = false;


    } else if (division == true) {
        if (resultadoFinal != 0) {
            resultadoFinal = dividir(resultadoFinal,resultadoFuncion);
        } else {
            resultadoFinal = dividir(resultado,resultadoFuncion);
        }
        pantalla.innerHTML = resultadoFinal;
        resultado = "0";
        resultadoFuncion = "0";
        funcion = false;
        division = false;
    }
});