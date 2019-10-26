const { Bebidas } = require("./Bebidas")

class Refresco extends Bebidas {
  constructor(cantidad, azucar) {
    super(cantidad)
    this.azucar = azucar
  }
  setAzucar(cantidadAzucar) {
    this.azucar = cantidadAzucar
  }
}
module.exports = {
  Refresco
}
