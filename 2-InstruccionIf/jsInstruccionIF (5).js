function Mostrar()
{
//tomo la edad  
var edad;
edad = document.getElementById("edad").value;

if(!(edad <= 17 && edad >= 13))
{
    alert("Usted no es adolescente");
}
}//FIN DE LA FUNCIÓN