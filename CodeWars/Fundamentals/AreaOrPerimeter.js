/**
 * 
 * @description Te dan la longitud y el ancho de un polígono de 4 lados. El polígono puede ser un rectángulo o un cuadrado. 
 * Si es un cuadrado, devuelve su área. Si es un rectángulo, devuelve su perímetro.
 * @param {Number} l 
 * @param {Number} w 
 * @returns {Number} su área. Si es un rectángulo, devuelve su perímetro.
 */
const areaOrPerimeter = function(l , w) {
    // Return your answer
    return l==w ? l*w : 2*l+2*w
};
console.log(areaOrPerimeter(3, 3))
console.log(areaOrPerimeter(6, 10))