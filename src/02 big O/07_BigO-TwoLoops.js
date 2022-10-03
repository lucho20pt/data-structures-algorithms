// Drop Constant
// n + n <=> 2n <=> O(2n) <=> O(n)
export function logItems(n) {
  for (let i = 0; i < n; i++) {
    console.log(i)
  }
  for (let j = 0; j < n; j++) {
    console.log(j)
  }
}

logItems(3)
