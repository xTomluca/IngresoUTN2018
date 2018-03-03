//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.

/*4-Realizar el algoritmo que al presionar el botón "Mostrar" 
pida dos números por prompt, si son iguales que los multiplique, 
si el primero es mayor al segundo que los reste y si no que los sume, 
mostrar el resultado por document.write.*/

function Mostrar()
{
var num1= parseInt(prompt("Ingrese un primer numero:"));
var num2= parseInt(prompt("Ingrese un segundo numero:"));
var resultado;

if (num1 == num2)
{
    resultado = num1 * num2;    
}
else if (num1 > num2)
{
    resultado = num1 - num2;
}
else
{
    resultado = num1 + num2;
}
document.write("El <b>resultado</b> de la operación es: " +resultado);
}

