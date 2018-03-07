//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.

/*3-Realizar el algoritmo que al presionar el botón "Mostrar" tome por ID dos datos,
 el largo y ancho de un terreno y luego que muestre cuantos metros de alambre se necesitan para colocarle 6 hilos de alambrado a su perímetro*/

function Mostrar()
{
var ancho;
var largo;
var metros;
var perimetro;

ancho = parseInt(document.getElementById("ancho").value);
largo = parseInt(document.getElementById("largo").value);
perimetro = (ancho + largo)*2;
metros = perimetro * 6;
alert("Los metros de alambre necesarios son: "+metros);


}

