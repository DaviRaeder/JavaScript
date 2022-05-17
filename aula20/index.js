/* const { load } = require("nodemon/lib/config");

const novoUsuario = {
    nome: 'Ayrton',
    idade: 27,
    pais: 'Brasil',
    youtube: 'Programador a Bordo'
}

let { nome, pais, idade } = novoUsuario
console.log(nome, pais, idade);

let { nome: primeiroNome } = novoUsuario
console.log(primeiroNome);

let { youtube: canal } = novoUsuario
console.log(canal);

const novoUsuario2 = {
    nome: {
        primeiro: 'Ayrton 2',
        segundo: 'Jesus'
    }
}

// var primeiro = novoUsuario2.nome.primeiro
// console.log(primeiro);

let { nome: { primeiro }} =novoUsuario2
console.log(primeiro)

let { nome: { segundo = 'Teshima' }} = novoUsuario2
console.log(segundo);

function imprimeUsuario({ nomem, idade ,sexo, pais = 'Japão' }) {
    console.log(nome)
    console.log(idade)
    console.log(sexo)
    console.log(pais)
} */

var usuarioFunction = {
    nome: 'Ayrton Teshima',
    idade: 27,
    sexo: 'M',
    pais: 'Brasil'
}

// imprimeUsuario(usuarioFunction)

// console.log(Object.keys(usuarioFunction))

// console.log(Object.value.keys(usuarioFunction))

var props = Object.keys(usuarioFunction)
console.log(props)

for (var i = 0; i < props.length; i++) {
    // console.log(props[i])
    // console.log(usuarioFunction[props[i]])
}

for (var prop of props) {
    console.log(usuarioFunction[props[i]])
}

for (var prop2 in usuarioFunction) {
    if (usuarioFunction.hasOwnProperty(prop2)) {
        console.log(prop2, usuarioFunction[prop2])
    }
    
}