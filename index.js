function hasTargetSum(array, target) {
//Iterate through each member of array
 for(let i= 0; i < array.length; i++){

  //find member added to equal target
  const added = target - array[i]

  //loop through the other member of array to find equal added
  for (let c = i + 1; c < array.length; c++){
    if(array[c] === added){
      return true
    }
  }
 }
      return false
}

/* 
  Write the Big O time complexity of your function here
  TimeComplexity: O(n^2)
  SpaceComplexity: O(n)
*/

/* 
  Add your pseudocode here
  iterate through members of array
  for each member of array determine whether it adds up with another member of array to equal target
  return true if it does,
  return false if it does not match
*/

/*
  Add written explanation of your solution here
  In the function hasTargetSum  it returns true if pairs in the array can add up to the target
  iterate through each member checking if sums up to target with another member in array 
  and if so return true else return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
