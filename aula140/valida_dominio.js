const validaDominio = /[?www.]\w+\.com|.com.br/

console.log(validaDominio.test('www.google.com'))
console.log(validaDominio.test('www.horadecodar.com.br'))
console.log(validaDominio.test('www.horadecodar'))
console.log(validaDominio.test('horadecodar.com.br'))