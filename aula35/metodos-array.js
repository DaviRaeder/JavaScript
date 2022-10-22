let arr1 = [1, 2, 3, 4, 5]
let arr2 = ['s', 't', 8]

// Concat
let arrFinal = arr1.concat(arr2)

// Every
let everyx = arrFinal.every(
  function verifyElements(elem, ind, obj) {
    return (typeof elem == 'number')
  }
)

console.log(arrFinal);
console.log(everyx);

// Filter
let filterx = arrFinal.filter(
  function verifyElements(elem, ind, obj) {
    return (typeof elem == 'string')
  }
)

console.log(arrFinal);
console.log(filterx);

// ForEach
let data = ''
let forEachx = arrFinal.forEach(
  function verifyElements(elem, ind, obj) {
    if(typeof ind > 3) {
      data += `Índice ${ind}: ${elem} \n`
    }
  }
)

console.log(arrFinal);
console.log(data);

// IndexOf
let indexOfx = arrFinal.indexOf('1')
if(indexOfx == -1) {
  console.log('Este dado não existe');
}

console.log(arrFinal);
console.log(indexOfx);