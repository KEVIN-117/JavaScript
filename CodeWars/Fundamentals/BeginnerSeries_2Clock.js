/**
 * 
 * @param {Number} h 
 * @param {Number} m 
 * @param {Number} s 
 * @returns {Number} el tiempo desde la medianoche en milisegundos.
 */
function past(h, m, s){
    //#Happy Coding! ^_^
    return h*3600000 + m*60000 + s*1000
}
console.log(past(0,1,1))