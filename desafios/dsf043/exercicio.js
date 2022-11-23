let calculadora = {
  somar: function(a, b) {
    return a + b
  },
  subtrair: function(a, b) {
    return a - b
  },
  multiplicar: function(a, b) {
    return a * b
  },
  dividir: function(a, b) {
    return a / b
  }
}

console.log(calculadora.somar(10, 5))
console.log(calculadora.subtrair(10, 5))
console.log(calculadora.multiplicar(10, 5))
console.log(calculadora.dividir(10, 5))