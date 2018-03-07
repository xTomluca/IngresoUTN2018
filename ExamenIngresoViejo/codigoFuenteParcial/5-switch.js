//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
/*Enunciado:

5-Realizar el algoritmo que al presionar el botón "Mostrar" pida un mes del año por prompt, si es un "enero" o "febrero" 
informar por alert “Veranito!!!!” de lo contrario informar por alert “extraño enero y febrero!!!” .*/

function Mostrar()
{
    var mes;
    mes = prompt("Ingrese mes del año");
  switch (mes)
    {
        case "enero":
        case "febrero":
        alert("Veranitooo!");
        break;
        default:
        alert("extraño enero y febrero!!!");
        break;
    }
}

