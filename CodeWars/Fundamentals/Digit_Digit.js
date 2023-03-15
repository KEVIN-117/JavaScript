/**
 * @description Bienvenido. En este kata, se le pide que eleve al cuadrado cada dígito de un número y los concatene
 * @param {Number} num 
 * @returns {Number} cuadrado de cada dígito de un número y concatenados
 */
function squareDigits(num){
    return Number(String(num).split('').map(item => Math.pow(item, 2)).join(''));
}


console.log(squareDigits(3212))
console.log(squareDigits(2112))