//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var lado
    var multiplicacion
    lado = parseInt(document.getElementById("lado").value);
    multiplicacion = lado * 3;
	alert("El perimetro del triangulo es: "+multiplicacion);
}

