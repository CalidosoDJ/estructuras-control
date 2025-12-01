// estructuras de control: if, else, switch, for, while

const edad = 10;

if (edad >= 18) {
    document.getElementById("test").innerHTML = "Eres mayor de edad";
}

//estructura de control dobles
//ejemplo #1
if (edad >= 18) {
    document.getElementById("test").innerHTML = "<br>Eres mayor de edad";
} else {
    document.getElementById("test").innerHTML = "<br>Eres menor de edad";
}
//ejemplo #2
const hora = new Date().getHours();
if (hora < 18) {
    saludo = 'Buenas tardes';
} else {
    saludo = 'Buenas noches';
}
document.getElementById("test2").innerHTML = `<br>${saludo}`;

//estructura de control multiples
const dia = new Date().getDay();
let diaSemana;

switch (dia) {
    case 0:
        diaSemana = "Domingo";
        break;
    case 1:
        diaSemana = "Lunes";
        break;
    case 2:
        diaSemana = "Martes";
        break;
    case 3:
        diaSemana = "Miercoles";
        break; 
    case 4:
        diaSemana = "Jueves";
        break;
    case 5:
        diaSemana = "Viernes";
        break;
    case 6:
        diaSemana = "Sabado";
        break;

    default:
        diaSemana = "Dia no valido";
        break;
}
document.getElementById('test3').innerHTML = `<br> Hoy es: ${diaSemana}.`;