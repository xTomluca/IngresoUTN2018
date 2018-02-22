function Mostrar()
{

var sexo = prompt("ingrese f o m .");

//while (sexo != "m" && sexo != "f" && sexo !="M" && sexo != "F")
while (!(sexo == "m" || sexo == "f"))

{
    sexo = prompt("Intentelo nuevamente.");
}

if (sexo == "f")
{
    sexo = "Femenino";
}
else

{
    sexo = "Masculino"
}

document.getElementById('Sexo').value= sexo;

}//FIN DE LA FUNCIÓN