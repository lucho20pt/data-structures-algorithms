const array = [4, 2, 6, 5, 1, 3]
// [a, b, c]
// t = b

const InsertionSort = (array) => {
  //
  let temp
  for (let i = 1; i < array.length; i++) {
    temp = array[i] // t = b
    for (var j = i - 1; array[j] > temp && j > -1; j--) { // a > t
      array[j+1] = array[j] // a+1 = a
    }
    array[j+1] = temp // a+1 = t
  }
  return array
}

const myArr = InsertionSort(array)

console.log(myArr)
