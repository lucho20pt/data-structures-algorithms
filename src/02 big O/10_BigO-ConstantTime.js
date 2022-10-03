// Constant Time
// O(1)
export function add2Items(n) {
  console.log(n + n)
}

// O(2) <=> O(1)
export function add3Items(n) {
  console.log(n + n + n)
}

add2Items(10)
add3Items(10)
