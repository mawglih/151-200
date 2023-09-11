/**
 * Given an integer array nums, find a subarray that has the largest product, and return the product. The test cases are generated so that the answer will fit in a 32-bit integer. 

Example 1:
Input: nums = [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.

Example 2:
Input: nums = [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.

Constraints:
1 <= nums.length <= 2 * 104
-10 <= nums[i] <= 10
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    if (nums.length < 2) return nums[0];
    let maxProduct = 0;
    let foundNegative = 1;
    let current = 1;
    for (let i = 0; i < nums.length; i++) {
        current *= nums[i];
        maxProduct = Math.max(current, maxProduct);
        if (current < 0) {
            maxProduct = Math.max(current / foundNegative, maxProduct);
            foundNegative = foundNegative === 1 ? current : foundNegative;
        } else if ( current === 0) {
            current = 1;
            foundNegative = 1;
        }
    }
    return maxProduct;
};

// Runtime 52 ms
// Memory 42.44 MB