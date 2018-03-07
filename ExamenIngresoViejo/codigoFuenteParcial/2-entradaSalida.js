//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.


/*2-Realizar el algoritmo que al presionar el botón "Mostrar" lea un importe de un producto por prompt 
y muestre el importe final sumándole el IVA (21%)*/

function Mostrar()
{
var precio;
var iva;
precio = parseFloat(prompt("Ingrese el precio del producto a facturar"));
iva = precio + precio * .21;
document.getElementById("importe").value = iva.toFixed(2);
}

