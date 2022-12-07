const validaMarca = /Marca: (Nike|Adidas|Puma|Asics)/

console.log(validaMarca.test('Marca: Adidas'))
console.log(validaMarca.test('Marca: Nike'))
console.log(validaMarca.test('Marca: Asics'))
console.log(validaMarca.test('Marca: Puma'))
console.log(validaMarca.test('Nike'))
console.log(validaMarca.test('Marca:'))
console.log(validaMarca.test('Marca: Reebok'))
console.log(validaMarca.test('Nome: Asics'))
console.log(validaMarca.test('41341'))
console.log(validaMarca.test('  '))