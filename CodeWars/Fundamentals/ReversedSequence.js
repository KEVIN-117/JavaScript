/**
 * 
 * @param {Number} n 
 * @returns {Array} una matriz de enteros de n a 1 donde n>0.
 */
const reverseSeq = n => {
    let aux = []
    for (let i = n; i > 0; i--) {
        aux.push(i)
    }
    return aux;
};

const reverseSeq2 = num => {
    return new Array(num)
        .fill()
        .map((d, i) => i + 1)
        .reverse()
};

const reverseSeq3 = n => {
    return Array.from({length:n},(_,i)=>n-i);
};

const reverseSeq4 = n => [...Array(n)].map((_, i) => n - i);
console.log(reverseSeq(5))