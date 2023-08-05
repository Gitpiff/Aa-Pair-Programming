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
  const array = [];

  arr.forEach(ele => {
    let count = 0;
    arr.forEach(subEle => {
      if (subEle < ele) count ++;
    }); 
    array.push(count);
  });

  return array;
};
// O(n2)

const twoSum = (arr, target) => {
  let bool = false
  arr.forEach(num => {
    arr.forEach(subNum => {
      if(num + subNum === target) bool = true
    })
  })

  return bool
};

const secondLargest = arr => {
  if (!arr.length) return undefined;
  else if (arr.length < 2) return undefined;
  else {
    const largest = Math.max(...arr);
    const largeIndex = arr.indexOf(largest);
  
    arr.splice(largeIndex, 1);
  
    return Math.max(...arr);
  }
};

const shuffle = (arr) => {

  // Your code here
};


module.exports = [findMinimum, runningSum, evenNumOfChars, smallerThanCurr, twoSum, secondLargest, shuffle];
