// Question Link : https://leetcode.com/problems/longest-substring-without-repeating-characters

let s = "qwnfenpglqdq";

let lengthOfLongestSubstring = function (s) {
    let count = 0;
    let maxCount = 0;
    s = s.split("");
    let n = s.length;

    if (n <= 1) return n;

    //console.log('n',n,s)

    let obj = {};

    for (let i = 0; i < n; i++) {
        if (obj[s[i]] === undefined) {
            if (s[i] === null) {
                obj = {};
                count = 0;
                continue;
            }
            obj[s[i]] = 1;
            // console.log(obj)
            count++;
            if (count > maxCount) maxCount = count;
        } else {
            obj = {};
            let tempIndex = s.indexOf(s[i]);
            // console.log("tempIndex",tempIndex)
            s[tempIndex] = null;
            count = 0;
            i = tempIndex;
        }
    }
    return maxCount;
};

console.log(lengthOfLongestSubstring(s));
