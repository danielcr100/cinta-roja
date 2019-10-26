const { fisica } = require("./fisica")
const { musica } = require("./musica")

const Juan = new fisica("fisica", [20, 70, 40], true, 20)
const Juanito = new musica("musica", [20, 40, 60, 80], false, 65)

console.log(Juan.getcalificaciones())
console.log(Juanito.getcalificaciones())
