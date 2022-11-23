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

let patas = Symbol()

Cachorro.prototype[patas] = 4

let labrador = new Cachorro('Labrador', 'Amarelo')

console.log(labrador.patas)

labrador.latir('auu auu ')

console.log(Cachorro.prototype.raca);
console.log(labrador.raca);

// acessando symbol
console.log(Cachorro.prototype[patas])

console.log(labrador[patas])