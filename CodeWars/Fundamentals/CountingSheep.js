/**
 * 
 * @description Considere una matriz/lista de ovejas donde algunas ovejas pueden faltar en su lugar. 
 *              Necesitamos una función que cuente el número de ovejas presentes en la matriz (verdadero significa presente).
 * @Hint No olvide verificar valores incorrectos como nulo/indefinido
 * @param {Array} arrayOfSheep 
 * @returns {number} numero total de ovejas de la matriz
 */
function countSheeps(arrayOfSheep) {
    // TODO May the force be with you
    let counter = 0 
    Array(arrayOfSheep).forEach(function(element) {
        element.forEach(function(item){
            if(item === true){
                counter += 1
            }
        })
    })
    return counter
}

//solucion 2
function countSheeps(arrayOfSheeps) {
    return arrayOfSheeps.filter(Boolean).length;
}

let countSheeps = x => x.filter( s => s ).length;


var array1 = [  true,  true,  true,  false,
                true,  true,  true,  true ,
                true,  false, true,  false,
                true,  false, false, true ,
                true,  true,  true,  true ,
                false, false, true,  true ];
console.log(countSheeps(array1))
