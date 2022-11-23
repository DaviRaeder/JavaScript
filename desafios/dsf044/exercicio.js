class Banco {
  constructor(saldo) {
    this.saldo = saldo
  }

  deposito(valor) {
    return this.saldo += valor
  }

  saque(valor) {
    return this.saldo -= valor
  }
}

var conta = new Banco(9460)
console.log(conta.saldo)

conta.deposito(1200)
console.log(conta.saldo)

conta.saque(5789)
console.log(conta.saldo)