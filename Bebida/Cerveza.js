const { Bebidas } = require("./Bebidas")

class Cerveza extends Bebidas {
  constructor(cantidad, porcentajeAlcohol) {
    super(cantidad)
    this.porcentajeAlcohol = porcentajeAlcohol
  }
  setAlcohol(cantidadAlcohol) {
    this.porcentajeAlcohol = cantidadAlcohol
  }
}

module.exports = {
  Cerveza
}
