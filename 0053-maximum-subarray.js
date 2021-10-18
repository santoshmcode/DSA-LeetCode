//  Question Link : https://leetcode.com/problems/maximum-subarray/

let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

let maxSubArray = function (nums) {
    let sum = nums[0];
    let maxSum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (sum + nums[i] > nums[i]) {
            sum += nums[i];
            if (sum > maxSum) {
                maxSum = sum;
            }
        } else {
            sum = nums[i];
            if (sum > maxSum) {
                maxSum = sum;
            }
        }
    }

    return maxSum;
};

console.log(maxSubArray(nums));
