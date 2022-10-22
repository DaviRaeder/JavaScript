var contador = 0
while(contador < 5) {
  console.log(contador);
  ++contador
}

var contador = 0
while(contador < 5) {
  if (contador === 3) {
    break
  }
  console.log(contador);
  ++contador
}

var contador = 0

while(contador < 100) {
  if(contador % 3 === 0 && contador % 5 === 0) {
    console.log(`${contador} - PING PONG`);
  }
  else if(contador % 3 === 0) {
    console.log(`${contador} - PING`);
  } else if(contador % 5 === 0) {
    console.log(`${contador} - PONG`);
  } 
  ++contador
}