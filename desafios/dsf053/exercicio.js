const validaNomeUsuario = /^(?=.{3,16}$)[a-z0-9-_]/

console.log(validaNomeUsuario.test('zé bacana123'))
console.log(validaNomeUsuario.test('asd'))
console.log(validaNomeUsuario.test('134'))
console.log(validaNomeUsuario.test('111111111111111111111111'))