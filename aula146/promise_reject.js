function verificarNumero(num) {
  return new Promise((resolve, reject) => {
    if(num == 2) {
      resolve(console.log(`O numero é ${num}`))
    } else {
      reject(new Error('O número é diferente de 2'))
    }
  })
}

verificarNumero(2)
verificarNumero(3)