//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
/* 6-Realizar el algoritmo que al presionar el botón "Mostrar" pida el importe de las ventas 
(validar que sea mayor a 0,”cero”) de los 7 días de la semana por prompt (una por día),
   e informar cual fue el mayor importe y cuál fue el menor importe de venta*/
function Mostrar()
{
    var semana=0; 
    var ventas;
    var ventaminima;
    var ventamaxima;
    var flag = true;
    while (semana < 7)
    {
        
        ventas = parseInt(prompt("Ingrese ventas del dia: "));
    if (ventas > 0)
       {
        semana = semana+1;
            if (ventaminima > ventas || flag )
            {
                ventaminima = ventas;
            }
            if (ventamaxima < ventas || flag )
            {
                ventamaxima = ventas;
                flag = false;
            }    
        }
        
        
    }
    alert("La venta minima de la semana es: "+ventaminima+ " y la venta maxima es "+ventamaxima);
}

