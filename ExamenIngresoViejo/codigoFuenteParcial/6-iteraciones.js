//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
/* 6-Realizar el algoritmo que al presionar el botón "Mostrar" pida el importe de las ventas 
(validar que sea mayor a 0,”cero”) de los 7 días de la semana por prompt (una por día),
   e informar cual fue el mayor importe y cuál fue el menor importe de venta*/
function Mostrar()
{
    {
        var importe;
        var maximo;
        var minimo;
        var flag = true;
        
        for (var i=0; i <7; i++)
        {
            importe = parseInt(prompt("Ingrese el numero de ventas"));
            while (importe < 0)
            {
                importe = parseInt(prompt("Ingrese nuevamente de ventas"));
            }
        
            if (minimo > importe || flag)
            {
                minimo = importe;
            }
            if (maximo < importe || flag)
            {
                maximo = importe;
                flag = false;
            }
        }
        alert ("El numero menor de ventas de la semana es "+minimo+ " y el maximo es "+maximo);
}
}
