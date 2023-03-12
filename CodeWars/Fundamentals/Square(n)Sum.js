function squareSum(numbers){
    return numbers.map(e => Math.pow(e, 2)).reduce((acum, current) => acum + current, 0);
}

console.log(squareSum([1,2]))
console.log(squareSum([0, 3, 4, 5]))
console.log(squareSum([]))