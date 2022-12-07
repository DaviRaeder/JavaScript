const validarID = /\d+ ID\b/

console.log(validarID.test('1232532 ID'))
console.log(validarID.test('8413345'))
console.log(validarID.test('5325241 ID'))
console.log(validarID.test('waddasd'))
console.log(validarID.test(''))
console.log(validarID.test('ID'))