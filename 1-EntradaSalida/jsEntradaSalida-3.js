/*Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'MOSTRAR'*/
function Mostrar()
{
    var nombreUsuario;
    
    nombreUsuario = document.getElementById("elNombre").value;

    prompt("Su nombre es: " + nombreUsuario);
}


