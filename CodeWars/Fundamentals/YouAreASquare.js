var isSquare = function(n){
    return Math.pow(Math.sqrt(n),2) == n && !(String(Math.sqrt(n)).includes("."))
}

// console.log(isSquare(-1))
// console.log(isSquare(0))
// console.log(isSquare( 3))
// console.log(isSquare( 4))
// console.log(isSquare(25))
// console.log(isSquare(26))
// console.log(isSquare(67))
// console.log(isSquare(83))
console.log(Math.sqrt(83))
console.log(Math.pow(Math.sqrt(83), 2))