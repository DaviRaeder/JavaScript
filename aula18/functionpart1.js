function escreva(){
    console.log('Olá, Programador a Bordo!')
}

escreva()
escreva()
console.log('Teste')
escreva()
escreva()

function escrevaMensagem(mensagem) { 
    console.log(mensagem)
}

escrevaMensagem('Hello Word!')
let msg = escrevaMensagem('Ayrton Teshima')
console.log(msg)

function soma(a, b) {
    return a + b
}

let resultado = soma(10, 5)
console.log(resultado)

function somaTudo(numeros) {
    var total = 0

    for (var num of numeros) {
        total = total + num
    }

    return total
}

var arrayNumeros = [3, 5, 7, 10, 9, 12]
var res = somaTudo(arrayNumeros)
console.log('somaTudo', res)

function escreveEndereco(rua, cidade, pais, ...complementos) {
    console.log(rua)
    console.log(cidade)
    console.log(pais)

    console.log(complementos)
}

(function (nome) {
    console.log('Executei', nome)
}('Ayrton'))

escreveEndereco('Rua Programador a Bordo', 'Rio de Janeiro', 'Brasil', 'Estado de Janeiro', 'Casa xpto', 'CEP 123.123.123', 'Bloco 15', 'Ap 11')

var subtraiTresNumeros = function (a, b, c) {
    return a - b - c
}
 
var subtrai = subtraiTresNumeros(15, 3, 5)

console.log(subtrai)

function somaCallback(a, b, fnCallback) {
    return fnCallback(a + b)
}

var multiplica = function(total) {
    return total * 2
}

console.log(somaCallback(10, 3, multiplica))

console.log(somaCallback(5, 2, function(total) {
    return total + 20
}))

console.log(somaCallback(23, 11, function(total) {
    return total / 2
}))

function escreveNome(nome = 'Teshima', idade = 26) {
    console.log(nome)
    console.log(idade)
}

escreveNome()














