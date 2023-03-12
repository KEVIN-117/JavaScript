
/**
 * @returns {Number}:Al considerar los términos en la sucesión de Fibonacci cuyos valores no superan los cuatro millones, encuentre la suma de los términos de valor par.
 */
function generateFibo(){
    let acum = Array()
    let a = 0
    let b = 1
    let addition = 0
    while (true){
        a = b
        b = addition
        addition = a + b
        if (addition < 4000000)
            acum.push(addition)
        else
            break    
    }
    return acum.filter(item => item % 2 == 0).reduce((a, b) => a + b, 0)
}

console.log(generateFibo())