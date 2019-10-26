const { Mascota } = require("./Mascota");

class Gato extends Mascota {
  constructor(nombre, vidas) {
    super(3, nombre);
    this.vidas = vidas;
  }
  getVidas() {
    return this.vidas;
  }
}
module.exports = {
  Gato
};
