import { merge } from './85_Merge.js'

const array = [5, 4, 7, 1, 3, 2, 8, 6, 9]

// MergeSort Recursive
const mergeSort = (arr) => {
  // base case
  if (arr.length === 1) return arr

  // recursive case
  let mid = Math.floor(arr.length / 2)
  let left = arr.slice(0, mid)
  let right = arr.slice(mid)
  console.log('first')

  return merge(mergeSort(left), mergeSort(right))
}

const myArray = mergeSort(array)

console.log(myArray)
