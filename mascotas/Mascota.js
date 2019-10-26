//Clase Padre o super clase
class Mascota {
  constructor(patas, nombre) {
    this.patas = patas;
    this.nombre = nombre;
    this.cerebro = true;
    console.log("Se creo la mascota");
  }
  getNombre() {
    return this.nombre;
  }
}

module.exports = {
  Mascota
};
