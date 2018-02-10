/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarDescuento()
{
    var descuento;
    var descuentoAplicado; 
    descuento = parseInt(document.getElementById("importe").value);
    descuentoAplicado = descuento * .75;
    document.getElementById("resultado").value = descuentoAplicado;
}
