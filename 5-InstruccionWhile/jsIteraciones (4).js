function Mostrar()
{

	var numero = prompt("ingrese un número entre 1 y 10.");

	while(!(numero >= 1 && numero<= 10))
	{
		numero = prompt("Intentelo nuevamente.");
	}
document.getElementById("Numero").value = numero;


}//FIN DE LA FUNCIÓN