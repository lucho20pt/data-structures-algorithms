const arr = [4, 6, 1, 7, 3, 2, 5]

// swap
const swap = (array, firstIdx, secondIdx) => {
  let temp = array[firstIdx]
  array[firstIdx] = array[secondIdx]
  array[secondIdx] = temp
}

// pivot
const pivot = (array, pivotIdx = 0, endIdx = array.length - 1) => {
  let swapIdx = pivotIdx
  for (let i = pivotIdx + 1; i <= endIdx; i++) {
    if (array[i] < array[pivotIdx]) {
      swapIdx++
      swap(array, swapIdx, i)
    }
  }
  swap(array, swapIdx, pivotIdx)
  return swapIdx
}

const myPivot = pivot(arr)
console.log(myPivot)
console.log(arr)
