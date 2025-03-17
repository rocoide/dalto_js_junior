
let resultado1;
let resultado2;
let resultado3;

// IF - ELSE IF - ELSE
let edad = 20;

if (edad < 18) {
    resultado1 = "Eres menor de edad."
} 
else if (edad >= 18 && edad < 65) {
    resultado1 = "Eres un adulto."
} 
else {
    resultado1 = "Eres un adulto mayor."
}


// Operador ternario
let esMayor = edad >= 18 ? "Mayor de edad" : "Menor de edad";
resultado2 = esMayor

// SWITCH
let dia = "martes";
switch (dia) {
    case "lunes":
        resultado3 = "Hoy es lunes."
        break;
    case "martes":
        resultado3 = "Hoy es martes."
        break;
    case "miércoles":
        resultado3 = "Hoy es miércoles."
        break;
    default:
        resultado3 = "Día no reconocido."
}


document.writeln(resultado2);