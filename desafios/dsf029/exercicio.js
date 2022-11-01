function tipoDeDado(dado) {
  if(typeof dado === "string") {
    console.log('Esse dado é uma string')
  } else if(typeof dado === "number") {
    console.log('Esse dado é um number')
  } else if(typeof dado === "boolean") {
    console.log('Esse dado é um boolean')
  }
}

console.log(tipoDeDado('Meu nome é davi.'))
console.log(tipoDeDado(3.14))
console.log(tipoDeDado(true))