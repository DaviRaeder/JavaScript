class Carrinho {
  constructor(fone, mouse, teclado, monitor, cadeira) {
    this.fone = fone
    this.mouse = mouse
    this.teclado = teclado
    this.monitor = monitor
    this.cadeira = cadeira
  }

  quantidade() {
    for (let i = 1; i < Carrinho.length + 1; i++) {
      var quantidade = i
    }
    return quantidade
  }

  valor() {
    return this.fone + this.mouse + this.teclado + this.monitor + this.cadeira
  }
}

var carrinho = new Carrinho(780, 560, 470, 2450, 970)

console.log(carrinho.quantidade())
console.log(carrinho.valor())