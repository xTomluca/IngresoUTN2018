function Mostrar()
{

	//1-Suma de los negativos. 
	//2-Suma de los positivos. 
	//3-Cantidad de positivos. 
	//4-Cantidad de negativos. 
	//5-Cantidad de ceros. 
	//6-Cantidad de números pares. 
	//7-Promedio de positivos. 
	//8-Promedios de negativos. 
	//9-Diferencia entre positivos y negativos, (positvos-negativos).
	
	var numero;	
	var negativos;
	var positivos;
	var cantidadPositivos;
	var cantidadNegativos;
	var cantidadCeros;
	var cantidadPares;
	var promedioPositivos;
	var promedioNegativos;
	var diferenciaPosNeg;
	var respuesta;

	do
{
	parseInt(prompt("Ingrese un numero:"));

	if(numero >= 0)
	{
		cantidadPositivos++;
		positivos = numero + positivos;
	}
	else if(numero < 0)
	{
		cantidadNegativos++;
		negativos = numero + negativos;
	}
	else
	{
		cantidadCeros++;
	}

	if(numero%2==0)
	{
		cantidadPares++;
	}
	
}
	while(respuesta =="s")
	
promedioNegativos = negativos / 



}//FIN DE LA FUNCIÓN