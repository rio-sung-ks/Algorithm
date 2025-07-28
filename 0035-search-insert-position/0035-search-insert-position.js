/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {

    if (nums.indexOf(target) > 0) {
        return nums.indexOf(target);
    } else {
        for (let i = 0; i < nums.length; i++ ) {
            if (nums[i] >= target) {
                nums.splice(i, 0, target);
                return i;
            } 
        }
        return nums.length ;
    }
};

// const nums = [1,3,5,6];
// const target = 2
// searchInsert(nums, target);