//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.

/*1-Realizar el algoritmo que al presionar el botón "Mostrar" lea la base de un triangulo equilatero por ID, 
e informar el perímetro del mismo por alert .*/

function Mostrar()
{
var base;
var perimetro;
base = parseInt(prompt("Ingrese la base del triangulo a calcular: "));
perimetro = base * 3;
alert("El perimetro del triangulo es: "+perimetro);
}

