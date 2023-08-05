const findMinimum = arr => {
  if(!arr.length) return undefined
  const min = Math.min(...arr)
  return min
};

console.log(findMinimum([7, 5, 2, 3, 4, 1])) //1
console.log(findMinimum([-100, 10, -1000, 10000])) //-1000
console.log(findMinimum([])) //undefined
//0(n)

const runningSum = arr => {

  const array = [];

  arr.forEach((ele, i) => {
    if (i > 0) {
      let newEle = ele + array[i - 1];
      array.push(newEle);
    }
    else {
      array.push(ele);
    }
  });

  return array;
};

const evenNumOfChars = arr => {
  let chars = 0
  arr.forEach(string => {
    if(string.length % 2 === 0) {
      chars ++
    }
  })

  return chars
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
