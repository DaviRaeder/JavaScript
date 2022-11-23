function criaCachorro(raca, patas, cor) {
  let cachorro = Object.create({})
  cachorro.raca = raca
  cachorro.patas = patas
  cachorro.cor = cor
  cachorro.latir = function() {
    console.log('Au Au')
  }
  return cachorro
}

let doberman = criaCachorro('Doberman', 4, 'preta')

console.log(doberman)

doberman.latir()

let pitbull = criaCachorro('Pitbull', 4, 'branca')

console.log(pitbull)

pitbull.latir()