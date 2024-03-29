for(var contador = 0; contador < 10; contador++) {
  console.log(contador);
}

var numerosAleatorios = [3, 5, 10, 2, 19, 21, 13]
for(var contador = 0; contador < numerosAleatorios.length; contador++) {
  console.log(`${contador} - ${numerosAleatorios[contador]}`);
}

for(var i = numerosAleatorios.length - 1; i >= 0; i--) {
  console.log(`Posição ${i} com descremento: ${numerosAleatorios[i]}`);
}

var i = 0
for(; i < numerosAleatorios.length;) {
  console.log(`Sem valor inicial e incremento: ${numerosAleatorios[i]}`);
  i++
}

var condicao = true
var contador = 1

for(; condicao; ) {
  if(contador % 5 === 0) {
    condicao = false
  }
  console.log(`condição booleana simples: ${contador}`);
  ++contador
}

for(var i = 0; i < 10; i++) {
  if(i === 5) {
    break
  }
  console.log(`Utilizando break ${i}`);
}

for(var i = 0; i < 50; i++) {
  if(i % 2 === 0) {
    continue
  }
  console.log('Utilizando continue', i);
}

// for of
//
//

var numerosAleatorios = [3, 5, 'Ayrton', 10, 2, 19, 21, 13]
for(var num of numerosAleatorios) {
  console.log('for of', num);
}

for(var i = 0; i < numerosAleatorios.length; i++) {
  console.log('for normal', numerosAleatorios[i]);
}

for(var i = 1; i <= 5; i++) {
  for(var j = 1; j <= 50; j++) {
    if(j % 2 === 0) {
      continue
    }
    if(j > 5) {
      break
    }
    console.log(`i: ${i}; j: ${j}`);
  }
}

for(var i = 0; i < 100; i++) {
  if(i % 3 === 0 && i % 5 === 0) {
    console.log(i, 'PING PONG');
  } else if(i % 3 === 0) {
    console.log(i, 'PING');
  } else if(i % 5 === 0) {
    console.log(i, 'PONG');
  }
}