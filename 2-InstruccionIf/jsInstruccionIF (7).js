function Mostrar()
{
//tomo la edad  
var edad;
var estado;
edad = document.getElementById("edad").value;
estado = document.getElementById("estadoCivil").value;
if(edad <= 17 && estado != "Soltero")
{
    alert("Usted el muy pequeño para NO ser soltero");
}

}//FIN DE LA FUNCIÓN