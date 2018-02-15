function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var azar
	
	azar = Math.floor(Math.random()*9)+1;
	
	if(azar >= 9)
	{
		alert("EXCELENTE!")
	}
	else if(azar >= 4)
	{
		alert("APROBO")
	}
	else
	{
		alert("SERA LA PROXIMA VEZ")
	}

}//FIN DE LA FUNCIÓN