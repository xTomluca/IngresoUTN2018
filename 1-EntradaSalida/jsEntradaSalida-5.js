/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function Mostrar()
{	
    var nombreUsuario;
    var edadUsuario;

    nombreUsuario = document.getElementById("elNombre").value;
    edadUsuario = document.getElementById("laEdad").value;

    //Siempre que cito una variable entre texto se cierra y se abre el "+"

    alert("Usted se llama " + nombreUsuario + " y tiene " + edadUsuario + " años");
}

