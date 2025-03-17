//Bucle for
let forI = "";
for (let i = 1; i <= 5; i++) {
    forI += " " + i;
}


//Bucle while
let whileI = "";
let count = 1;
while (count <= 5) {
    whileI += " " + count;
    count++;
}


//Bucle do...while
let doWhile = "";
let num = 1;
do {
    doWhile += " " + count;
    num++;
} while (num <= 5);


//Bucle for...of (array)
let forOf = "";
let frutas = ["Manzana", "Banana", "Naranja"];
for (let fruta of frutas) {
    forOf += " " + fruta;
}


//Bucle for...in (objeto)
let forIn = "";
let persona = { nombre: "Juan", edad: 30, ciudad: "Madrid" };
for (let clave in persona) {
    forIn += " " + (clave + ":", persona[clave]) + "\n";
}


//Uso de break en for
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        break;
    }
}

//Uso de continue en for
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }
}

//Recorrer array con forEach
let forEach = "";
let numeros = [10, 20, 30, 40, 50];
numeros.forEach((num) => {
    forEach += num + " "; 
});
