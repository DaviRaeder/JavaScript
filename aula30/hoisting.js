console.log(a)
var a = 123
console.log(a)

// console.log(ddd)
// let ddd = 21

// console.log(idade)
// const idade = 27

// console.log(soma(10, 5));
// var soma = function(a, b) {
//   return a + b
// }

console.log(soma(10, 5));
function soma(a, b) {
  return a + b
}

function testaHoisting() {
  console.log('testaHoisting', aaa);
  var aaa = 123
  console.log('testaHoisting', aaa);
}

testaHoisting()

function calcula() {
  return geraResultado()

  /*
  Muita lógica de código aqui...
  */
 
  function soma(a, b) {
    return a + b
  }

  function geraResultado() {
    return soma(10, 5) / 3
  }

}

console.log(calcula());