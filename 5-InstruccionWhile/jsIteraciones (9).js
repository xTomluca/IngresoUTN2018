function Mostrar()
{
	var numero;
	var numero2;
	var max;
	var min;
	flag = 0;
	var contador=0;
	// declarar variables
	
	var respuesta='si';

	
	do
	{

	numero = parseInt(prompt("Ingrese un numero"));
	
	
	if (numero < min || flag == 0)

	{
	
	min = numero;

	}
	
	if ( numero > max || flag == 0)
	
	{	
	flag = 1;
	max = numero;
	
	}

	respuesta = prompt("Desea continuar?");
}
		while(respuesta =="s");

	document.getElementById("minimo").value = min;
	document.getElementById("maximo").value = max;

}//FIN DE LA FUNCIÓN