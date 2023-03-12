function squareDigits(num){
    return Number(String(num).split('').map(item => Math.pow(item, 2)).join(''));
}


console.log(squareDigits(3212))
console.log(squareDigits(2112))