/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let container = new Set();
    for(let i = 0; i < nums.length; i++){
        if(container.has(nums[i])){
            return true;
        }
            container.add(nums[i]);
            
        
    }
    return false;
};