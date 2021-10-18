// Question Link : https://leetcode.com/problems/contains-duplicate

let nums = [1, 2, 3, 1];

let containsDuplicate = function (nums) {
    let obj = {};

    for (let i = 0; i < nums.length; i++) {
        if (obj[nums[i]] === undefined) {
            obj[nums[i]] = 1;
        } else {
            obj[nums[i]]++;
        }
    }

    // console.log(obj)

    for (const key in obj) {
        //console.log(obj[key])
        if (obj[key] > 1) {
            return true;
        }
    }

    return false;
};

console.log(containsDuplicate(nums));
