/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let solMap = {}
    for(let i = 0; i < nums.length; i++) {
        const curr = nums[i];
        if(solMap[curr] !== undefined) {
            return [solMap[curr],i]
        } else {
            solMap[target - curr] = i
        }
    }
};