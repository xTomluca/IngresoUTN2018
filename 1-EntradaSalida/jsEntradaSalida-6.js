/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
var numeroUno;
var numeroDos;
var resultadoSuma;

numeroUno = document.getElementById("numeroUno").value;
    
//--------------------ParseInt-------------------//
//----------TRANSFORMA TEXTO EN NUMERO-----------//

numeroUno = parseInt(numeroUno);

numeroDos = document.getElementById("numeroDos").value;

numeroDos = parseInt(numeroDos)

resultadoSuma = numeroUno+numeroDos;

alert("El resultado es: "+ resultadoSuma);
}

