let arr = [7, 14, 21, 28, 35, 42, 49, 56, 63, 70]
let arr2 = [2, 4, 6]

function verificaLargura(array) {
  if(array.length < 5) {
    console.log('Poucos elementos')
  } else {
    console.log('Muitos elementos')
  }
}

verificaLargura(arr)
verificaLargura(arr2)