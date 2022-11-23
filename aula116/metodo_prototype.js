function Cachorro(raca, patas, cor) {
  this.raca = raca
  this.patas = patas
  this.cor = cor
}

Cachorro.prototype.uivar = function() {
  console.log('Auuuu')
}

Cachorro.prototype.rosnar = function() {
  console.log('Grrrr')
}

let pug = new Cachorro('Pug', 4, 'Branco')

pug.uivar()

pug.rosnar()