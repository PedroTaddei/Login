var nomes = []
var senhas = []
var index = 0
var arraySupNomes = []
var arraySupSenhas = []
var indexSup = 0

function CadastrarUsuario() {
     nomes[index] = prompt("Insira o nome para cadastro")
     senhas[index] = prompt("Crie sua senha para cadastro")
     index++
}

function EscolherOpcao() {
     var opcao = prompt("Insira a função de cadastro desejad. 1 = cadastro; 2 = login; 3 = excluir cadastro; 4 = encerrar")
     return opcao
}

function FazerLogin(nome, senha) {
     for (var contador = 0; contador < nomes.length; contador++) {
          if (nome == nome[contador]) {
               if (senha == senhas[contador]) {
                    return true
               }
          }
     }
     return false

}

function ExcluirCadastro(nome) {
     for (let contador = 0; contador < nomes.length; contador++) {
          if (nome == nomes[contador]) {
               nomes[contador] = 0
               senhas[contador] = 0
          }
     }
     for (var contador = 0; contador < nomes.length; contador++) {
          if (nomes[contador] != 0) {
               arraySupNomes[indexSup] = nomes[contador]
               arraySupSenhas[indexSup] = senhas[contador]
               indexSup++
          }
     }
     nomes = arraySupNomes
     senhas = arraySupSenhas
}