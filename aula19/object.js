let usuario = {
    nome: 'Ayrton',
    idade: 26,
    youtube: 'Programador a Bordo',
    'ultimo-nome': 'Teshima'
}

console.log(usuario)
console.log(usuario.idade)
console.log(usuario.nome)
console.log(usuario.youtube)
console.log(usuario['ultimo-nome'])

console.log(usuario['youtube'])

usuario.ano = 2019

console.log(usuario)

delete usuario.idade

console.log(usuario)

usuario.hobbies = ['Música', 'Programar', 'Viajar']

console.log(usuario)

usuario.competencias = {
    linguagens: ['Javascript', 'Python', 'Go', 'Scala', 'PHP', 'HTML', 'CSS'],

    instrumentosMusicais: ['Guitarra', 'Baixo', 'Bateria']
}

console.log(usuario)

var usuario2 = {
    digaOi(name) {
        return `Olá ${name}`
    }
}

console.log(usuario2.digaOi('Ayrton'))
console.log(usuario2.digaOi('Teshima'))

var cor = 'Preto'
var idade = 26
var nome = 'Ayrton'

var usuario3 = {
    nome,
    idade,
    cor
}

console.log(usuario3)

var usuario4 = {
    nome: 'Ayrton',
    idade: 26
}

var extraInfo = {
    pais: 'Brasil',
    estado: 'Rio de Janeiro'
}

/*
 {
   nome: 'Ayrton',
   idade: 26
   pais: 'Brasil',
   estado: 'Rio de Janeiro'
 }
*/

let novoUsuario = Object.assign({}, usuario4, extraInfo)
console.log(novoUsuario)

// Object.assign({}, usuario4, extraInfo)

// console.log('usuario4', usuario4)

var extra = {
    sexo: 'M',
    profissao: 'Programador' 
}

var novoUsuario2 = {
    ...usuario4,
    ...extraInfo,
    sexo: 'M',
    profissao: 'Programador'

}

// var novoUsuario = Object.assign({}, usuario4, extraInfo)

console.log(novoUsuario2)

var nomeVariavel = 'Estado'
var nome = 'lastName'
var usuario5 = {
     [nome]: 'Ayrton',
     [nomeVariavel]: 'Rio de Janeiro'
}

console.log(usuario5)

// getters e setters

var usuarios = [
    {
        nome: 'Ayrton',
        idade: '26'
    }, 
    {
        nome: 'João',
        idade: '19'
    }, 
    {
        nome: 'Maria',
        idade: '21'
    }, 
]

console.log(usuarios[2].idade)

var usuario6 = {
    posicao: 0,
    get atual() {
        return usuarios[this.posicao]
    },
    proximo() {
        ++this.posicao
    },
    anterior() {
        --this.posicao
    }
}

console.log(usuario.atual) // {nome: 'Ayrton', idade: '26'}
usuario.proximo();

console.log(usuario.atual) // {nome: 'João', idade: '19'}
usuario.proximo();

console.log(usuario.atual) // {nome: 'Maria', idade: '21'}
usuario.anterior();

console.log(usuario.atual) // {nome: 'João', idade: '19'}

usuario.atual = 0
console.log(usuario.atual) // {nome: 'Ayrton', idade: '26'}

usuario.atual = 2
console.log(usuario.atual) // {nome: 'Maria', idade: '21'}

 