
/**
 * @type Class
 */
class SmallestIntegerFinder {
    /**
     * @type Function
     * @description Dada una matriz de enteros, su solución debe encontrar el entero más pequeño.
     * @param {Array} array1 
     * @returns {number} el entero mas pequeño del array1
     */
    findSmallestInt(array1) {
        return Math.min(...array1)
    }
}

let sif = new SmallestIntegerFinder()
console.log(sif.findSmallestInt([78,56,232,12,8]))