function autoEscola(idade) {
  if(idade < 18) {
    console.log('Não pode entrar na auto escola')
  } else {
    console.log('Pode entrar na auto escola')
  }
}

console.log(autoEscola(10))
console.log(autoEscola(32))
console.log(autoEscola(18))