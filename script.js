console.log("Functions ALAB")

// Part 1 Thinking Functionally
 function sumOfArr(){
    let result = [24 + 25 + 13 + 2 + 15];
    return result;
}

 let answer = sumOfArr(24, 25, 13, 2, 15);
 console.log(answer);
 
 const array = [24, 25, 13, 2, 15];
function avgOfArr(array){
    if (array.length === 0) 
    return 'empty array';
return array.reduce((acc, c) => acc + c, 0) / array.length;
}
console.log(avgOfArr(array));

const str = ['Just', 'keep', 'swimming'];
function longestStr(str){
    if (str.length === 0) return "";
    let longest = str[0];

    for (let i = 1; i < str.length; i++) {
        if (str[i].length > longest.length) {
            longest = str[i]; 
        }
    }

    return longest; 
}
const longestString = longestStr(str);
console.log(longestString);

const strNum = ["Jasper", "is", 4];
function StrLongerThanNum(strNum){
    if (strNum.length === 0) return "";
    let stringLongerThanNum = strNum[0];

    for (let i = 0; i < str.length; i++) {
        if (str[i].length > stringLongerThanNum.length) {
            longest = strNum[i]; 
        }
    }

    return stringLongerThanNum; 
}
const longStr = StrLongerThanNum(strNum);
console.log(longStr);