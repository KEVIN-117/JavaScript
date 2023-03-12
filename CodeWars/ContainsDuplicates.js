// function duplicateCount(text){
//     let result = new String(text).toLowerCase()
//     const repeating = new Map()
//     for (let i = 0; i < result.length-1; i++) {
//         let counter = 0;
//         for (let j = 0; j < result.length; j++) {
//             if(String(result[i]) == result[j])
//                 counter++;
//         }
//         repeating.set(result[i], counter);
//     }
//     let res = 0;
//     for (var [key, value] of repeating.entries()) {
//         if(value > 1)
//             res += 1;
//     }
//     return res;
// }

// function duplicateCount(text){
//     return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
// }

// function duplicateCount(text){
//     return text.toLowerCase().split('').filter(function(val, i, arr){
//       return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
//     }).length;
// }

function duplicateCount(text){
    return new Set(text.toLowerCase().match(/(.)(?=.*\1)/gi)).size
}
console.log(duplicateCount("abcde"))
console.log(duplicateCount("aabbcde"))
console.log(duplicateCount("aabBcde"))