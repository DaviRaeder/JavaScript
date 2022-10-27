let nome = 'Davi'

switch(nome) {
  case 'Davi':
    console.log('O nome é Davi')
    break
  case 'João':
    console.log('O nome é João')
    break
  default:
    console.log('O nome não foi encontrado')
    break
}

if (nome == 'Davi') {
  console.log('O nome é Davi');
} else if (nome == 'João') {
  console.log('O nome é João')
} else {
  console.log('O nome não foi encontrado')
}