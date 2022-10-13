const array = [4, 2, 6, 5, 1, 3]

const SelectionSort = (array) => {
  //
  let min

  for (let i = 0; i < array.length - 1; i++) {
    min = i

    //
    for (let j = i + 1; j < array.length; j++) {
      //
      if (array[j] < array[min]) min = j
    }
    //
    let temp = array[i]
    array[i] = array[min]
    array[min] = temp
  }

  return array
}

const myArr = SelectionSort(array)

console.log(myArr)
