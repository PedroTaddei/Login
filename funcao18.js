
function VerificarValor() {
     var numero = parseInt(prompt("Insira o número que deseja verificar"))
     if (numero > 0) {
          return 1
     } else if (numero < 0) {
          return -1
     } else {
          return 0
     }
}

var retorno = VerificarValor()
console.log(retorno)