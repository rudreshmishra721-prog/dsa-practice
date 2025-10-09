/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// Brute Force (Extra Array)

function moveZeroesBrute(nums) {
    const res = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) res.push(nums[i]);
    }
    // fill remaining with zeros
    while (res.length < nums.length) res.push(0);
    return res;
}

console.log(moveZeroesBrute([0,1,0,3,12])); // [1,3,12,0,0]


// Optimized (In-Place, Two-Pointer)
var moveZeroes = function(nums) {
    let changePos = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== 0){
            nums[changePos] = nums[i];
            changePos++
        }
            
        }
        while(changePos < nums.length){
            nums[changePos] = 0;
            changePos++
    }
}

