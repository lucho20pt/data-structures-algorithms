// 2 Nested Loops
// n * n <=> n^2 <=> O(n^2)
export function logItems(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j)
    }
  }
  
}

logItems(2)
