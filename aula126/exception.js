function saudacao(nome) {
  if(typeof nome != 'string') {
    throw new Error("O parâmetro nome precisa ser um string")
  } else {
    console.log(`Olá ${nome}.`)
  }
}

saudacao('Matheus')
saudacao(5)

console.log('Teste')