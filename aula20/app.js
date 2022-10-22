/*
  Quando você deve usar o map:

  Quanto você precisa obter um novo array, com a mesma quantidade de itens do array original.

  [1, 2, 3], [3, 6, 9]

  const numbers = [1, 2, 3]

  const doubledNumbers = numbers.map(item => item * 2)

  console.log(numbers === doubledNumbers)
  console.log(numbers, doubledNumbers)

  const price = [20, 10, 30, 25, 15, 40, 80, 5]

  const salePrices = price.map(price => price / 2)

  console.log(salePrices);


  const products = [
    { name: 'Mouse Sem Fio', price: 30 },
    { name: 'Pen Drive', price: 25 },
    { name: 'Cartucho de Tinta', price: 50 },
    { name: 'Suporte Ergonômico para Notebook', price: 23 },
    { name: 'Repetidor de Sinal Wi-Fi', price: 44 }
  ]

  const saleProducts = products.map(product => {
    if(product.price >= 30) {
      product.price = product.price / 2
      // return {
      //   name: product.name,
      //   price: product.price / 2
      // } 
    }

    return product
  })

  console.log(saleProducts);
*/

/* 
  Quando você deve usar o filter:

  Quando você precisa obter um novo array, com uma quantidade de itens
  menor que a do array original

  [1, 2, 3], [1, 2]

  const randomNumbers = [36, 99, 37, 63]

  const numbersGreaterThan37 = randomNumbers.filter(item => item > 37)

  console.log(numbersGreaterThan37);


  const users = [
    { name: 'Ada Lovelace', premium: true },
    { name: 'Grace Hopper', premium: false },
    { name: 'Alan Turing', premium: true },
    { name: 'Linus Torvalds', premium: false },
    { name: 'Margaret Hamilton', premium: true }
  ]

  const premiumUser = users.filter(users => users.premium)

  console.log(premiumUser);
*/

/*
  Quando você deve usar o reduce:

  Quando baseado no array original, você precisa "reduzir" o array à um valor

  [1, 2, 3], 6

  const numbers = [1, 2, 3]

  const sumResult = numbers.reduce((accumulator, item) => accumulator + item, 0)

  console.log(sumResult);

  const phaseScores = [
    { name: 'Vinicius Costa', score: 337 },
    { name: 'Roger Melo', score: 43 },
    { name: 'Alfredo Braga', score: 234 },
    { name: 'Pedro H. Silva', score: 261 },
    { name: 'Ana Paula Rocha', score: 491 },
    { name: 'Vinicius Costa', score: 167 },
    { name: 'Roger Melo', score: 137 },
    { name: 'Alfredo Braga', score: 135 },
    { name: 'Ana PaulRocha', score: 359 },
    { name: 'Pedro H. Silva', score: 133 }
  ]

  const rogerScore = phaseScores.reduce((accumulator, phaseScore) => {
    if (phaseScore.name === 'Roger Melo') {
      return accumulator + phaseScore.score
    }

    return accumulator
  }, 0)

  console.log(rogerScore)

*/