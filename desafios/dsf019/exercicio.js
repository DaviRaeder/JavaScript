const idade = 15
const cnh = false

if(idade >= 18 && cnh == false) {
  console.log('Você precisa fazer a CNH')
} else if(idade >= 18 && cnh == true) {
  console.log('Você pode dirigir')
} else {
  console.log('Você precisa ter mais de 18 anos e fazer a CNH')
}