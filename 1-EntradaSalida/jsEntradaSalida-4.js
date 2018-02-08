/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'MOSTRAR'
*/
function Mostrar()
{
	var nombreUsuario;

	nombreUsuario = prompt("Ingrese el texto");

	document.getElementById("elNombre").value = nombreUsuario;
}

