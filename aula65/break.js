let nome = 'Davi'

for (let i = 0; i < 10; i++) {
  if (i == 3) {
    nome = 'João'
  }

  if(i == 5 && nome == 'João') {
    console.log('O nome é João, pode parar')
    break
  }

  console.log(i)
}
