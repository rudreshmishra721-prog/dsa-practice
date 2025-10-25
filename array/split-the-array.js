/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossibleToSplit = function(nums) {
let map = new Map(); 
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        map.set(num, (map.get(num) || 0) + 1);
    }

    for (let [num, freq] of map) {
        if (freq >= 3) {
            return false;
        }
    }

    return true;
};