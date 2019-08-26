// const indexAndPrint = (arr, index) => {
//   console.log(arr[index]);
// };
// // indexAndPrint();


// const myArray = [1,2,8,'bee','last','first'];

// indexAndPrint(myArray,2);

// // challenge
// // challenge 2
// // Write a function that takes an array of something and tells you if the name 'Greg' is in that array

// const myArray2 = ['Ted','Greg','Tom','Dude'];

// const tellMeSomething = () =>{
// // myArray2.filter(names => names === 'Greg')
// let isGregHere = myArray2.filter(names => )
// }

const findGreg = (arr) => {
  const doesIncludeGreg =arr.includes('Greg')
  if(doesIncludeGreg){
    return 'Greg Found'
  } else {
    return 'Greg not found'
  }
}

console.log(findGreg['a','b','Greg']);

// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
// Console true if the given string is a palindrome. Otherwise, console false.

const isAPalindrome = () =>{
// see reversed words
  if (str === opposite) {
    return true
  } else {
    return false 
  }
}

Short-CustomElementRegistry
const opposite = str.split('').reverse().join('');