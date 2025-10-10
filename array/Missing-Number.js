/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
   let n = nums.length
    expectedsum = (n * (n + 1))/2
    actualsum = 0
    for(let i = 0; i < n; i++){
         actualsum += nums[i]
    }
      return expectedsum - actualsum
};
// or another method
// XOR METHOD
