/**
 * 
 * @param {String} str 
 * @returns {String} str invertido
 */
function solution(str){
    return str.split('').reverse().join('');
}
console.log(solution('world'))