const { Edificio } = require("./edificio")
const { Casa } = require("./casa")

const casa1 = new Casa(2, 1, 1, "San Jose", 3, 20, 30)

console.log("la casa tiene " + casa1.getMetrosCuadrados() + " metros cuadrados")
console.log(casa1.getDireccion())
casa1.setDireccion("Heredia")
console.log(casa1.getDireccion())
