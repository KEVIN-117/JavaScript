function removeSmallest(numbers) {
    let index = numbers.indexOf(Math.min(...numbers))
    //El método slice() devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin 
    //(fin no incluido). El array original no se modificará.
    return numbers.slice(0, index).concat(numbers.slice(index+1))
}
console.log(removeSmallest([1, 2, 3, 4, 5]))
console.log(removeSmallest([5, 3, 2, 1, 4]))
console.log(removeSmallest([2, 2, 1, 2, 1]))