// Question Link : https://leetcode.com/problems/two-sum/

let nums = [2, 7, 11, 15];
let target = 9;

var twoSum = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let num1;
    let num2;

    let numCopy = [...nums];
    //console.log(numCopy)

    nums.sort((a, b) => a - b);

    while (left < right) {
        if (nums[left] + nums[right] < target) left++;
        if (nums[left] + nums[right] > target) right--;

        if (nums[left] + nums[right] === target) {
            num1 = numCopy.indexOf(nums[left]);
            numCopy[num1] = null;
            num2 = numCopy.indexOf(nums[right]);
            return [num1, num2];
        }
    }
};

console.log(twoSum(nums, target));
