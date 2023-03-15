/**
 * @param {Array} x 
 * @returns {Array} con todos los valores de la matris duplicados
 */
function maps(x){
    return x.map(function(item){
        return item+item;
    })
}

function maps(x){
    return x.map(n => n * 2);
}

maps = x => x.map(e => e * 2);
console.log(maps([1, 2, 3]))
console.log(maps([4, 1, 1, 1, 4]))