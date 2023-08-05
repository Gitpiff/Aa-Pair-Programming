const findMinimum = arr => {
  if(!arr.length) return undefined
  const min = Math.min(...arr)
  return min
};

console.log(findMinimum([7, 5, 2, 3, 4, 1])) //1
console.log(findMinimum([-100, 10, -1000, 10000])) //-1000
console.log(findMinimum([])) //undefined

const runningSum = arr => {

  // Your code here
};

const evenNumOfChars = arr => {

  // Your code here
};

const smallerThanCurr = arr => {

  // Your code here

};

const twoSum = (arr, target) => {

  // Your code here
};

const secondLargest = arr => {

  // Your code here
};

const shuffle = (arr) => {

  // Your code here
};


module.exports = [findMinimum, runningSum, evenNumOfChars, smallerThanCurr, twoSum, secondLargest, shuffle];