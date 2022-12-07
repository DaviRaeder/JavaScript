const validaIP = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/

console.log(validaIP.test('127.0.0.1'))
console.log(validaIP.test('8.8.8.8'))
console.log(validaIP.test('192.168.0.62'))

console.log(validaIP.test('192.168.0'))
console.log(validaIP.test('192'))
console.log(validaIP.test('asdadsda'))
console.log(validaIP.test('42324'))
console.log(validaIP.test('1924.1682.03.6176.824'))