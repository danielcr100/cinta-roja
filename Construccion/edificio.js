const { Construccion } = require("./construccion")
class Edificio extends Construccion {
  constructor(
    numPuertas,
    numVentanas,
    numPisos,
    direccion,
    altura,
    largo,
    ancho
  ) {
    super(numPuertas, numVentanas, numPisos, direccion, altura, largo, ancho)
  }
}

module.exports = {
  Edificio
}
