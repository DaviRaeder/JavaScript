class Cachorro {
  constructor(raca, patas, cor) {
    this.raca = raca
    this.cor = cor
  }

  latir(latido) {
    console.log(latido)
  }

}

Cachorro.prototype.raca = 'SRD'
Cachorro.prototype.patas = 4

let labrador = new Cachorro('Labrador', 'Amarelo')

console.log(labrador.patas)

labrador.latir('auu auu ')

console.log(Cachorro.prototype.raca);
console.log(labrador.raca);

class Nome {
  constructor(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
  }
}

var nome = new Nome('João', 'Oliveira')

console.log(nome)

var nome2 = new Nome('Pedro', 'Santos')

console.log(nome2)

class Gato {
  constructor(raca, cor, patas, nome, idade) {
    this.raca = raca
    this.cor = cor
    this.patas = patas
    this.nome = nome
    this.idade = idade
  }
}

var gato = new Gato('Persa', 'Branca', '4', 'Camundongo', '2')

console.log(gato)

class Camundongo {
  constructor(cor, patas) {
    this.cor = cor
    this.patas = patas
  }
}

var camundongo = new Camundongo('preta', 4)

console.log(camundongo)