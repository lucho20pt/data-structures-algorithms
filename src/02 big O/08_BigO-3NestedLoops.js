// 3 Nested Loops
// n * n <=> n^3 <=> O(n^3) <=> O(n^2)
export function logItems(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        console.log(i, j, k)
      }
    }
  }
  
}

logItems(2)
