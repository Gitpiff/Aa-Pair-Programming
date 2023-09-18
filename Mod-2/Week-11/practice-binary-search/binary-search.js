function linearSearch (arr, target) {

  // Can you solve this in one line?
  return arr.indexOf(target)
  // return arr.includes(target) ? arr.indexOf(target) : -1

};

function binarySearch(arr, target) {

  // Set integers pointing to the high and low range of possible indices
  let low = 0
  let high = arr.length -1
  //console.log(start, end, target)
  // While high and low indices do not overlap...
  while(low <= high) {
    // Find the midpoint between high and low indices
    let midPoint = Math.floor((low + high) / 2)
    // Compare the target value to the midpoint value
    // If the target equals the midpoint...
    if(target === arr[midPoint]) {
      // Return the midpoint index
      return midPoint
      // If the target is higher than the midpoint...
    } else if(target > midPoint){
      //console.log(midPoint)
      // Move the low pointer to midpoint + 1
      low = midPoint + 1
      // If the target is less than the midpoint...
    } else if(target < midPoint) {
      // Move the high pointer to midpoint - 1
      high = midPoint - 1
    }
  }

  // Return -1 if the loop exits with overlapping pointers
return -1


}


module.exports = [linearSearch, binarySearch]