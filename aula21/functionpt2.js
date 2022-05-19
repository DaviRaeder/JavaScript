// console.log(this)

function Usuario() {
    this.nome = 'Ayrton'
    this.idade = 27
    this.soma = function (a, b) {
        return a + b
    }
}

// Usuario()

var usuario = new Usuario()
console.log(usuario)

console.log(usuario.nome)
console.log(usuario.idade)
console.log(usuario.soma(10, 4))

// call

function Personagem(p1, p2, p3) {
    console.log(p1, p2, p3)
    console.log(this)
}

var PersonagemThis = {
    nome: 'Teshima'
}

// Personagem.call(PersonagemThis, 'param1', 123, [5])

// apply

// var personagemParams = (PersonagemThis, ['param$$$$$', 321, [5]])
// Personagem.apply(PersonagemThis, personagemParams)

// bind

var pers = Personagem.bind(PersonagemThis,'Olá')
pers('Mundo', '!!!')

// Arrow functions

/* var soma = (a, b) => {
    return a + b
} */

var soma = (a, b) => ( 
    a + b 
)

console.log(soma(10, 11));

var retornaUsuario = cidade => (
    { 
       nome: 'Ayrton',
       idade: 27,
       cidade
    }
  )

console.log(retornaUsuario('Rio de Janeiro 123'));

 var imprimiThis = () => {
     console.log(this)
 }

 imprimiThis()

 imprimiThis.call({nome: 'Ayrton'})