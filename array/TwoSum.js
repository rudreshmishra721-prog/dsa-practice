/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
    let newMap = new Map();

 for(let i = 0; i < nums.length; i++){
    let num = nums[i]
    let complement = target - num
    if(newMap.has(complement)){
        return [newMap.get(complement), i] // return[newMap.get(2) --> 0 , 1 (current index)] == [0,1]
    }
    newMap.set(num, i) // storing num as key and i as value means 2 --> 0
    

    }
 }
 console.log(twoSum([2,7,10,11,43], 9));