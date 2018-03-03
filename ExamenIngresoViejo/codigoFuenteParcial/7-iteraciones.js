//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var alumnototal = 0;
    var nota;
    var varones;
    var sexo;
    var numero;
    var acumulador=0;

    while (alumnototal < 6)
    {
        
        numero = parseInt(prompt("Ingrese la nota a continuacion: "));
        

    if (numero < 10 && numero > 0)
    {
        alumnototal++;
        sexo = prompt("Ingrese su sexo: ");
        if(sexo == "m")
        {
            nota = numero;
            if (numero >= 6)
            {
            varones++;
            }
        }
        else if (sexo == "f")
        {
            nota = numero;
        }
    acumulador = acumulador + nota;   
    }
}
    alert("Promedio de notas totales: " +acumulador/6+" , el numero de varones con notas mayores o iguales a seis es "+varones+" y la menor nota "+notabaja)
}

