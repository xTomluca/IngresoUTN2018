/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
    var sueldo;
    sueldo = parseInt(document.getElementById("sueldo").value);
    sueldo = sueldo * 1.1;
    document.getElementById("resultado").value = sueldo;
}
