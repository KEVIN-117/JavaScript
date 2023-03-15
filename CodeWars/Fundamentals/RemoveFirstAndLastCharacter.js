/**
 * @description Es bastante sencillo. Su objetivo es crear una función que elimine el primer y el último carácter de una cadena. 
 *              Se le da un parámetro, la cadena original. No tiene que preocuparse por cadenas con menos de dos caracteres.
 * @param {String} str 
 * @returns {string} substring de str
 */
function removeChar(str){
    //You got this!
   return str.substring(1, str.length - 1)
};   
console.log(removeChar('eloquent'))