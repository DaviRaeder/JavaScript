// var novoUsuario = {
//   nome: 'Ayrton',
//   idade: 27,
//   pais: 'Brasil',
//   youtube: 'Programador a Bordo'
// }

// var { nome, pais, idade } = novoUsuario
// console.log(nome, pais, idade);

// var { nome: primeiroNome } = novoUsuario
// console.log(primeiroNome);

// var { youtube: canal } = novoUsuario
// console.log(canal);

// var novoUsuario2 = {
//   nome: {
//     primeiro: 'Ayrton 2',
//     segundo: 'Jesus'
//   }
// }

// var primeiro = novoUsuario2.nome.primeiro
// console.log(primeiro);

// var { nome: { primeiro } } = novoUsuario2
// console.log(primeiro);

// var { nome: { segundo = ' Teshima' } } = novoUsuario2
// console.log(segundo);

// function imprimeUsuario({ nome, idade, sexo, pais = 'Japão' }) {
//   console.log(nome);
//   console.log(idade);
//   console.log(sexo);
//   console.log(pais);
// }

var usuarioFunction = {
  nome: 'Ayrton Teshima',
  idade: 27,
  sexo: 'M',
  pais: 'Brasil'
}

// imprimeUsuario(usuarioFunction)

// console.log(Object.keys(usuarioFunction));

// console.log(Object.values(usuarioFunction));

var props = Object.keys(usuarioFunction)
console.log(props);

for(var i = 0; i < props.length; i++) {
  // console.log(props[i]);
  // console.log(usuarioFunction[props[i]]);
}

for(var prop of props) {
  console.log('usuarioFunction 2', usuarioFunction[prop]);
}

for(var prop2 in usuarioFunction) {
  if(usuarioFunction.hasOwnProperty(prop2)) {
    console.log(prop2, usuarioFunction[prop2]);
  }
}