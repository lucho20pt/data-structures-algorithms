// 4! => 4 * 3! => 3 * 2! => 2 * 1! => 1
const factorial = (n) => {
  if (n === 0) return 1
  return n * factorial(n - 1)
}

const myFactorial = factorial(4)

console.log(myFactorial)
