/**
 * 
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    return Math.min(...nums)
};

const arr = [2,2,2,0,1];

console.log(findMin(arr));

// runtime 53 ms
// memory 42.07 MB