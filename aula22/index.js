/* var nome = 'Ayrton'
console.log(nome);

function imprimeNome() {
    console.log(nome);
}

imprimeNome()

function imprimeIdade() {
    var idade = 27
    console.log(idade)
}

imprimeIdade()

function imprimePais() {
    pais = 'Brasil'
    console.log(pais);
}

imprimePais()
console.log(pais)
console.log(window.pais)
console.log(this.pais) 

function imprimiThis() {
    console.log('imprimiThis', this)
}

function imprimeMensagem() {
    imprimiThis.call({ msg: 'Sou um objeto' })
}

function imprimeMensagem2() {
    imprimiThis.call([ 'Sou um array' ])
}

imprimeMensagem()
imprimeMensagem2() 
imprimiThis() 

function usuario() {
    var nome = 'Ayrton'

    return function() {
        var sobrenome = 'Teshima'
        console.log(nome, sobrenome);
    }
}

var user = usuario()
user()*/

if (true) {
    var youtube = '@programadorabordo'
    let autor = 'Ayrton'
    console.log(youtube)
    console.log(autor);
}

console.log(youtube)
// console.log(autor)

let sobrenome = 'Teshima'
console.log(sobrenome)

{
    sobrenome = 'Jesus'
    console.log(sobrenome)
}
