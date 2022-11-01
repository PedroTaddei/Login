var nomes = []
var senhas = []
var index = 0 

function CadastrarUsuario() {
     nomes{index} = prompt("Insira o nome para cadastro")
     senhas{index} = prompt("Crie sua senha para cadastro")
     index++
}

function EscolherOpcao() {
     var opcao = prompt("Insira a função de cadastro desejad. 1 = cadastro; 2 = login; 3 = excluir cadastro; 4 = encerrar")
     return opcao
}