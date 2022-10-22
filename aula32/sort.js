const numbers = [45, 1, 31, 75, 8]

numbers.sort((a, b) => {
  if (a < b) return -1
})

console.log(numbers);