function ageSort(users) {
  
  return users.sort((user1, user2) => user1.age - user2.age)

}

function oddEvenSort(arr) {

  return arr.sort((a, b) => {
    if (a % 2 === 1 && b % 2 === 0) return -1;
    if (a % 2 === 0 && b % 2 === 1) return 1;
    return a - b;
  })
}

function validAnagrams(s, t) {
  const arrS = s.split("")
  const arrT = t.split("")
  //console.log(arrS, arrT)
  const sortS = arrS.sort()
  const sortT = arrT.sort()

  return sortS.join("") === sortT.join("")
}

function reverseBaseSort(arr) {
  //const arrLength = arr.length 
  return arr.sort((a, b) => {
    const aLength = a.toString().length 
    const bLength = b.toString().length

    if(aLength === bLength) {
      return a - b 
    } else {
      return bLength - aLength
    }
  })
}

function frequencySort(arr) {
  
}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];