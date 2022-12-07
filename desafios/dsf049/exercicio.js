const maiusculas = /[A-Z]/

console.log(maiusculas.test('OI EU SOU O DAVI'))
console.log(maiusculas.test('oi eu sou o davi'))
console.log(maiusculas.test('oi eu sou o Davi'))
console.log(maiusculas.test('123'))