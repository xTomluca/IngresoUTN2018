function Mostrar()
{
    var acumulador = 0;
    var numero = parseInt(prompt("Ingrese un numero"));
    for (var repeticiones = 0; numero >= repeticiones; repeticiones++)
    {
        if (repeticiones%2 == 0)
          {
            console.log(repeticiones);
            acumulador++;
        }
        
    }
    
    console.log("La cantidad de numeros pares es "+acumulador);
    


}//FIN DE LA FUNCIÓN