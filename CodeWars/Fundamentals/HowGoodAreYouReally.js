// function betterThanAverage(classPoints, yourPoints) {
//     // Your code here
//     let i = 0
//     let acum = 0
//     for (i = 0; i < classPoints.length; i++)
//         acum += classPoints[i]
//     return acum/i < yourPoints
// }

/**
 * @description Hubo un examen en tu clase y lo pasaste. ¡Felicidades! Pero eres una persona ambiciosa. 
 *              Quiere saber si es mejor que el estudiante promedio de su clase. Recibe una matriz con 
 *              los puntajes de las pruebas de sus compañeros.¡Ahora calcule el promedio y compare su puntaje!
 * @param {Array} classPoints 
 * @param {Number} yourPoints 
 * @returns {Boolean} verdadero si eres mejor, de lo contrario ¡Falso!
 */
function betterThanAverage(classPoints, yourPoints) {
    return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length; 
}
console.log(betterThanAverage([2, 3], 5))
console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75))