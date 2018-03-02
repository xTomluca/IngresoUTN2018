/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    var marca;
    var precio=35;
    var suma;
    var iva;
    var cantidad=0;

    marca = document.getElementById("Marca").value;
    cantidad = parseFloat(document.getElementById("Cantidad").value);

     switch(cantidad)
     {
         case "5":
            if (marca == "ArgentinaLuz")
            {
                precio = precio - (precio * .40);
            }
            else
            {
                precio = precio - (precio * .30);
            }
            break;
         case "4":
         if (marca == "ArgetinaLuz" || marca == "FelipeLamparas")
         {
             precio = precio - (precio * .25);
         }
         else
         {
            precio = precio - (precio * .20);
         }
         break;
         case "3":
         if (marca == "ArgentinaLuz")
         {
             precio = precio - (precio * .15);
         }
         else if (marca == "FelipeLamparas")
         {
             precio = precio - (precio * .10);

         }
         else
         {
            precio = precio - (precio * .05);
         }
         break;
         default:
         precio = precio - (precio * .50);
         break;

     }
     document.getElementById("precioDescuento").value = precio.toFixed(2);
     suma = precio * cantidad;
     if (suma > 120)
     {
        iva = suma * .21;
        total = suma + iva;
        alert("IIBB Usted pago " +total.toFixed(2)+ " , siendo " +iva.toFixed(2)+ " el impuesto que se pagó.");
     }
     else
     {
        alert("El total de su compra es: " +suma.toFixed(2));
     }
     

}
