const numeros = [2, 3, 6, 5, 10]
let novoArrayNumeros = []

for (let i = 0; i < numeros.length; i++) {
  novoArrayNumeros.push(numeros[i] * 2)
}

const novoArrayMap = numeros.map(function (item) {
  return item * 2
})

// console.log(
//  'arrayMapArrow',
//   numeros.map(item => item * 2)
// )

const nomes = ['Ayrton', 'Teshima', 'Teste', 'Fulano de Tal']

const nomesMinusculos = nomes.map(item => item.toLowerCase())

// console.log(nomes)
// console.log(nomesMinusculos)

let mult2 = []

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 === 0) {
    mult2.push(numeros[i])
  }
}

// console.log(mult2)

const numerosFiltrados = numeros.filter(item => item % 2 === 0)

// console.log('numerosFiltrados', numerosFiltrados)

arrayMapFilter = numeros
  .filter(numero => numero % 2 === 0)
  .map(numero => numero * 2)

// console.log('arrayMapFilter', arrayMapFilter)

let soma = 0

for(let i = 0; i < numeros.length; i++) {
  soma = soma + numeros[i]
}

console.log('for norma', soma);

// const numeros = [2, 3, 6, 5, 10]

const somaReduce = numeros.reduce(function(valorAcumulador, valorArray) {
  return valorAcumulador + valorArray
}, 0)

console.log('somaReduce', somaReduce);