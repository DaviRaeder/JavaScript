function imprimePar(num) {
  for(let i = num; i >= 0; i--) {
    if(i % 2 == 0) {
      console.log(i)
    }
  }
}

console.log(imprimePar(15))
console.log(imprimePar(83))
console.log(imprimePar(46))