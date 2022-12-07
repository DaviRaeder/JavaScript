const notab = /[^ab]/

console.log(notab.test('a'))
console.log(notab.test('aqui tem a'))

const nottoaz = /[^a-z]/

console.log(nottoaz.test('123 as'))
console.log(nottoaz.test('dwahgdawuihdaoihdoiuaf'))

const az = /[a-z]/

console.log(az.test('dadawgdyug56147846y3dDA'))