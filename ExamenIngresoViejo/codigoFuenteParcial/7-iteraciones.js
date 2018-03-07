//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.

/*7-Realizar el algoritmo que al presionar el botón "Mostrar" pida por prompt las notas (validar entre 0 y 10) 
y el sexo(validar el sexo “f” o “m”) de 6 alumnos, informar por alert: 
a) el promedio de las notas totales. 
b) la nota más baja. 
c) la cantidad de varones que su nota haya sido mayor o igual a 6.*/

function Mostrar()
{
    var acumulador = 0;
    var nota;
    var sexo;
    var notabaja;
    var promedio;
    var contador=0;
    var flag = true;

    for (var i=0; i < 3; i++)
    {
        nota = parseInt(prompt("Ingrese notas"));
        
        while(nota <=0  && nota >=10)
        
        { 
            nota = parseInt(prompt("Ingrese notas nuevamente del 0 al 10"));
        }
        sexo = prompt("Ingrese su sexo: ");
        while (!(sexo =="f" || sexo =="m"))
        {
            sexo = prompt("Ingrese su sexo nuevamente: f o m");
        }
        if (sexo == "m" && nota >= 6)
        {
            acumulador = acumulador + nota;
            contador++;
        }
        else if (notabaja > nota || flag)
        {
        notabaja = nota;
        acumulador = acumulador + nota;
        flag = false;
        }
        else
        {
        acumulador = acumulador + nota;    
        }

    }
    
    promedio = acumulador / 6;
    alert(" El promedio del total de las notas es :"+promedio.toFixed(2)+ " la nota mas baja "+notabaja+ " los varones con notas >= 6: "+contador);
}

