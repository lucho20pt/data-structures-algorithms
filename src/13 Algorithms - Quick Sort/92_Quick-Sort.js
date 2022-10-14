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
  swap(array, pivotIdx, swapIdx)
  return swapIdx
}

// quick sort
const quickSort = (array, left = 0, right = array.length - 1) => {
  if (left < right) {
    let pivotIdx = pivot(array, left, right)
    quickSort(array, left, pivotIdx - 1)
    quickSort(array, pivotIdx + 1, right)
  }
}

// const myPivot = pivot(arr)
// console.log(myPivot)
const myQuickSort = quickSort(arr)
console.log(arr)
