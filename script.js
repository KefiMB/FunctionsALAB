console.log("Functions ALAB")

// Part 1 Thinking Functionally
 function sumOfArr(){
    let result = [24 + 25 + 13 + 2 + 15];
    return result;
}
const array = [24, 25, 13, 2, 15];
function avgOfArr(array){
    if (array.length === 0) 
    return 'empty array';
return array.reduce((acc, c) => acc + c, 0) / array.length;
}
 let answer = sumOfArr(24, 25, 13, 2, 15);
 console.log(answer);
 
console.log(avgOfArr(array));