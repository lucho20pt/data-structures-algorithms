const funcThree = () => {
  console.log('Three')
}

const funcTwo = () => {
  funcThree()
  console.log('Two')
}

const funcOne = () => {
  funcTwo()
  console.log('One')
}

funcOne()
