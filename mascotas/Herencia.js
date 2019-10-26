const { Perro } = require("./Perro");
const { Gato } = require("./Gato");

const wally = new Perro("Salchicha", "cafe", "Wally");
const pituka = new Perro("Saguate", "cafe", "pituka");

const pepe = new Gato("Pepe", 5);

// console.log("Primer perro:", wally.getRaza());
// console.log("Segundo perro:", pituka.getNombre());
console.log("perro:", pituka);

console.log("Gato:", pepe);
