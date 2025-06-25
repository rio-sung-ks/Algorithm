/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let newArray = [];
    for (let i = 0; i < nums.length; i++){
        let value1 = nums[i];
        for (let j = i+1; j < nums.length; j++){
            let value2 = nums[j];
            let sum = value1 + value2;
            if (target === sum) {
                newArray.push(i,j);
                return  newArray;
            }
        }
    }
};