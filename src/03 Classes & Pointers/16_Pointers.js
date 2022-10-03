/*
 No Pointers
*/
let num1 = 5

let num2 = num1

console.log(num2) // num2 return 5

num1 = 10 // (change num1)

console.log(num2) // num2 still returns 5

/*
Using Pointers
*/

let obj1 = {
  value: 5
}

let obj2 = obj1

console.log(obj2.value) // obj2 return 5

obj1.value = 10 // (change obj1)

console.log(obj2.value) // obj2 will return new value of obj1 = 10
// obj2 is pointing to the same obj in memory of obj1
/* the old { value: x } from the obj2 pointer will be dumped in memory Garbage Colection 
    because the { value : x} to exist needs somme pointer
    so it is just taking space in memory and it will be dumped out from memory
*/
