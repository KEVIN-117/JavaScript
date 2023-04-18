/**
 * Las funciones sin acciones, que generalmente llevan como nombre un verbo,  debe ser breve, preciso, y describir lo que hace la funcion
 * "get…" – devuelven un valor,
 * "calc…" – calculan algo,
 * "create…" – crean algo,
 * "check…" – revisan algo y devuelven un boolean, etc.
 */

/**
 * 
 * @param {String} fulDate 
 * @param {String} name 
 * @returns {Number} edad de la persona
 */
function getAge(fulDate, name){
    let date = new Date().getFullYear()
    return date - new Date(fulDate).getFullYear();
}
console.log(typeof(getAge("2001-12-17", "kevin")))
