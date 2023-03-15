/**
 * @description El museo de cosas increíbles y aburridas quiere deshacerse de algunas exposiciones. Miriam, la arquitecta de interiores, 
 *              idea un plan para eliminar las exposiciones más aburridas. Ella les da una calificación y luego elimina el que tiene la 
 *              calificación más baja. Sin embargo, justo cuando terminó de calificar todas las exhibiciones, se dirige a una feria importante, 
 *              por lo que le pide que escriba un programa que le diga las calificaciones de los elementos después de que uno eliminó el más 
 *              bajo. Me parece bien.
 * @Task Dada una matriz de enteros, elimine el valor más pequeño. No cambie la matriz/lista original. Si hay varios elementos con 
 *      el mismo valor, elimine el que tenga un índice más bajo. Si obtiene una matriz/lista vacía, devuelva una matriz/lista vacía.
 * @param {Array} numbers 
 * @returns {Array} numbers
 */
function removeSmallest(numbers) {
    let index = numbers.indexOf(Math.min(...numbers))
    //El método slice() devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin 
    //(fin no incluido). El array original no se modificará.
    return numbers.slice(0, index).concat(numbers.slice(index+1))
}
console.log(removeSmallest([1, 2, 3, 4, 5]))
console.log(removeSmallest([5, 3, 2, 1, 4]))
console.log(removeSmallest([2, 2, 1, 2, 1]))