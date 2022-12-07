let p = Promise.resolve(5)

console.log('Outros códigos')

console.log(p)

p.then((value) => value + 5)
  .then((value) => console.log(value))