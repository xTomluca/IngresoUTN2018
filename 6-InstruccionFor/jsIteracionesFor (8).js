function Mostrar()
{

var primo = true;
var numero;
numero = prompt("ingrese numero");
for(var i = 2; i < numero; i++)
{
    if (numero%i==0)
    {
        primo = false;    
        break;
    }
}
    if(primo)
    {
        alert("Es primo <strong>FIXAAAAAAAAAAAAAAAAAAAAAAAAAA</strong>");
    }
    else
    {
        alert("No es primo");
    }




}//FIN DE LA FUNCIÓN