//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var veranitomuchachitosummer = prompt("Ingrese mes del año a continuacion: ");
    switch(veranitomuchachitosummer)
    {
        case "Enero":
        case "Febrero":
        alert("Verano PIBITO!");
        break;
        default:
        alert("extraño enero y febrero!!!");
        break;
    }
}

