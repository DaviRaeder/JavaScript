const numbers = [10, 6, 8, 19, 18, 20]

const approvedNumber = numbers.find(isBigEnough)

function isBigEnough(value, index, array) {
  return value >= 18
}

console.log(approvedNumber);