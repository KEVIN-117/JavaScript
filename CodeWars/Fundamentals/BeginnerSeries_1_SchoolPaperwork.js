/**
 * @description Tus compañeros de clase te pidieron que copiaras algunos papeles para ellos. Sabes que hay 'n' compañeros de clase y 
 *              el papeleo tiene 'm' páginas. Tu tarea es calcular cuántas páginas en blanco necesitas. Si n < 0 o m < 0 devuelve 0.
 * @param {Number} n 
 * @param {Number} m 
 * @returns {Number} el total de paginas necesarias
 */
function paperwork(n, m) {
    return (n<0 || m<0)? 0 : n*m    
}
console.log(paperwork(5,5))
console.log(paperwork(-5,5))
