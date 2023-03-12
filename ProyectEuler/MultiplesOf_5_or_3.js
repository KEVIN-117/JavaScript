/**
 * 
 * @param {number} n 
 * @returns {number} la suma de todos los numeros multiplos de 5 o 3 por debajo de n
 */
function MultiplesSum(n){
    let listMultiples = Array()
    for (let i = 1; i < n; i++) {
        if (i%5 ==0 || i%3 ==0)
            listMultiples.push(i);
    }
    return listMultiples.reduce((a, b) => a+b,0)
}

console.log(MultiplesSum(10))
console.log(MultiplesSum(1000))