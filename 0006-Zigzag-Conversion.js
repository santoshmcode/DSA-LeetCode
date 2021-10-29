// Question Link : https://leetcode.com/problems/zigzag-conversion/
let s =
    "Apalindromeisaword,phrase,number,orothersequenceofunitsthatcanbereadthesamewayineitherdirection,withgeneralallowancesforadjustmentstopunctuationandworddividers.";
let numRows = 2;
let convert = function (s, numRows) {
    if (numRows === 1) return s;
    //console.log(s, numRows)
    let _2dArray = [];

    for (let i = 0; i < numRows; i++) {
        _2dArray.push([]);
    }
    let flag = true;
    for (let i = 0, j = 0; i < s.length; i++) {
        //console.log(j)
        if (flag) {
            _2dArray[j].push(s[i]);
            j++;
            if (j === numRows - 1) flag = false;
            continue;
        }

        if (!flag) {
            _2dArray[j].push(s[i]);
            j--;
            if (j === 0) flag = true;
            continue;
        }
    }

    for (let k = 0; k < _2dArray.length; k++) {
        _2dArray[k] = _2dArray[k].join("");
    }
    return _2dArray.join("");
};

console.log(convert(s, numRows));

console.log(
    "Expected:",
    "Aaidoeswr,haenme,rtesqecouishtabrateaeaietedrcinwtgnrlloacsoajsmnsoucutoadodiiesplnrmiaodprs,ubroohreunefnttacneedhsmwynihrieto,iheeaalwnefrdutettpntainnwrdvdr."
);
