/**
 * @param {number[]} nums
 * @return {number}
 */

// XOR Method
// time complexity O(n) space O(1) 
var singleNumber = function(nums) {
    let result = 0;
    for(num of nums){
        result ^= num
    }
    return result
};
// Hash map
/**
 hash map time complexity O(n) space O(n)
 **/
function singleNumber(nums) {
    const freq = new Map();

    // Count frequency of each number
    for (const num of nums) {
        if (freq.has(num)) {
            freq.set(num, freq.get(num) + 1);
        } else {
            freq.set(num, 1);
        }
    }

    // Find the number with count === 1
    for (const [key, value] of freq) {
        if (value === 1) return key;
    }


}

// brute force

/**
 * Brute-force solution: O(n^2) time, O(1) extra space
 */
var singleNumber = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        let count = 0;

        // count how many times nums[i] appears
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                count++;
            }
        }

        // if it appears only once, that's our answer
        if (count === 1) {
            return nums[i];
        }
    }
   
};
// updated 






