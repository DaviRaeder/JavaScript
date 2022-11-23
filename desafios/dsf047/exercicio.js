class Carro {
  constructor(marca, cor, gasolinaRestante, consumo) {
    this.marca = marca
    this.cor = cor
    this.gasolinaRestante = gasolinaRestante
    this.consumo = consumo
  }

  dirigir(km) {
    let litrosConsumidos = km / this.consumo
    this.gasolinaRestante -= litrosConsumidos
  }

  abastecer(quantidade) {
    this.gasolinaRestante += quantidade
  }
}

let carro = new Carro('Porsche', 'Preta', 27, 14)

console.log(carro)

carro.dirigir(100)

console.log(carro)

carro.abastecer(120)

console.log(carro)