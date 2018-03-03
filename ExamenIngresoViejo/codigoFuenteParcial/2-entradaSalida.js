//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
var importe;
var iva;
importe = parseFloat(prompt("Ingrese el valor del producto: "));
iva = importe + (importe * .21);	
document.getElementById("importe").value = iva.toFixed(2);
}

