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

Personagem.call(PersonagemThis, 'param1', 123, [5])

// apply

Personagem.apply(PersonagemThis, ['param$$$$$', 123, [5]])