function Mostrar()
{

	var numero;
	var contador=0;
	var acumulador=0;
	var respuesta;
	var promedio;

	do
	{
		numero = parseInt(prompt("Ingrese un numero: "));
		contador = contador + 1;
		acumulador = acumulador + numero;
		respuesta = prompt("Desea continuar? S/N")
	}while ((respuesta == "s" && respuesta == "S") || (respuesta != "N" && respuesta != "n"));

	promedio = acumulador / contador;


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=promedio;

}//FIN DE LA FUNCIÓN