//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var largo;
    var ancho;
    var hilo;
    var perimetro;

    largo = parseFloat(document.getElementById("largo").value);
    ancho = parseFloat(document.getElementById("ancho").value);
    perimetro = (ancho * 2) + (largo * 2);

    hilo = perimetro * 6;
    alert("Se necesitan "+hilo+" metros de alambre");
}

