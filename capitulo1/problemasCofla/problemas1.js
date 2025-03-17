// A) 3 chicos de 23 años perfectamente normales entran a una heladería a comprar un helado pero hay un problema: los precios no están al lado de cada estante con su respectivo helado.
// Ellos quieren comprar el helado más caro que puedan con la plata que tienen, así que... veamos cómo podemos ayudarlos.

// Roberto tiene $1.5 USD
// Pedro tiene $1.7 USD
// Cofla tiene $3 USD

// Los precios de helados son los siguientes:
// Palito de helado de agua: $0.6 USD
// Palito de helado de crema: $1 USD
// Bombón helado marca heladix: $1.6 USD
// Bombón helado marca heladovich: $1.7 USD
// Bombón helado marca helardo: $1.8 USD
// Potecito de helado con confites: $2.9 USD
// Pote de 1/4 KG -> $2.9 USD

// CREAR SOLUCIONES:
//   - Pedirles que ingresen el monto que tienen y mostrarles el helado más caro que pueden comprar.
//   - Si hay 2 o más con el mismo precio, mostrar ambos.
//   - Cofla quiere saber cuánto es el vuelto.


dineroCofla = prompt("cuanto dinero tienes cofla?");
// dineroRoberto = prompt("cuanto dinero tienes roberto?");
// dineroPedro = prompt("cuanto dinero tienes pedro?");

dineroCofla = parseInt(dineroCofla);
alert("ingresaste " + dineroCofla);

if (dineroCofla >= 0.6 && dineroCofla < 1) {
    alert("comprate el helado de agua");
    alert("y te sobran " + (dineroCofla - 0.6));
}

else if (dineroCofla >= 1 && dineroCofla < 1.6) {
    alert("comprate el helado de crema");
    alert("y te sobran " + (dineroCofla - 1));
}

else if (dineroCofla >= 1.6 && dineroCofla < 1.7) {
    alert("comprate el helado de crema");
    alert("y te sobran " + (dineroCofla - 1.6));
}

else if (dineroCofla >= 1.7 && dineroCofla < 1.8) {
    alert("comprate el helado de crema");
    alert("y te sobran " + (dineroCofla - 1.7));
}

else if (dineroCofla >= 1.8 && dineroCofla < 2.9) {
    alert("comprate el helado de crema");
    alert(`y te sobran ${dineroCofla - 1.8}`);
}

else if (dineroCofla >= 2.9) {
    alert("comprate el helado de crema");
    alert("y te sobran " + (dineroCofla - 2.9));
}

else {
    alert("lo siento, pobre de mierda, no te alcanza para nada");
}



// if (dineroRoberto >= 0.6 && dineroRoberto < 1) {
//     alert("comprate el helado de agua")
// }

// else if (dineroRoberto >= 1 && dineroRoberto < 1.6) {
//     alert("comprate el helado de crema")
// }

// else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7) {
//     alert("comprate el helado de crema")
// }

// else if (dineroRoberto >= 1.7 && dineroRoberto < 1.8) {
//     alert("comprate el helado de crema")
// }

// else if (dineroRoberto >= 1.8 && dineroRoberto < 2.9) {
//     alert("comprate el helado de crema")
// }

// else if (dineroRoberto >= 2.9) {
//     alert("comprate el helado de crema");
// }

// else {
//     alert("lo siento, pobre de mierda, no te alcanza para nada");
// }


// if (dineroPedro >= 0.6 && dineroPedro < 1) {
//     alert("comprate el helado de agua")
// }

// else if (dineroPedro >= 1 && dineroPedro < 1.6) {
//     alert("comprate el helado de crema")
// }

// else if (dineroPedro >= 1.6 && dineroPedro < 1.7) {
//     alert("comprate el helado de crema")
// }

// else if (dineroPedro >= 1.7 && dineroPedro < 1.8) {
//     alert("comprate el helado de crema")
// }

// else if (dineroPedro >= 1.8 && dineroPedro < 2.9) {
//     alert("comprate el helado de crema")
// }

// else if (dineroPedro >= 2.9) {
//     alert("comprate el helado de crema");
// }

// else {
//     alert("lo siento, pobre de mierda, no te alcanza para nada");
// }