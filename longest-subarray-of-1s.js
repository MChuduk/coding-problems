/**
 * Given a binary array nums, you should delete one element from it.
 *
 * Return the size of the longest non-empty subarray containing only 1's in the resulting array. Return 0 if there is no such subarray.
 *
 * Input: nums = [1,1,0,1]
 * Output: 3
 * Explanation: After deleting the number in position 2, [1,1,1] contains 3 numbers with value of 1's
 *
 * Input: nums = [1,1,1]
 * Output: 2
 * Explanation: You must delete one element.
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
const longestSubarray = function(nums) {
    let start = 0;
    let max = 0;
    let zeroCount = 0;

    for(let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            zeroCount++;
        }

        while (zeroCount > 1) {
            if (nums[start] === 0) {
                zeroCount--;
            }
            start++;
        }

        max = Math.max(max, i - start);
    }
    return max;
};

console.log(longestSubarray([1, 1, 1]))
