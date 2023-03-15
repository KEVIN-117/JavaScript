/**
 * @description Timmy y Sarah creen que están enamorados, pero en el lugar donde viven, solo lo sabrán una vez que recojan una flor cada uno. 
 *              Si una de las flores tiene un número par de pétalos y la otra tiene un número impar de pétalos, significa que están enamorados.
 * @Task Escribe una función que tome el número de pétalos de cada flor y devuelva verdadero si están enamorados y falso si no lo están.
 * @param {Number} flower1 
 * @param {Number} flower2 
 * @returns {Boolean} verdadero si están enamorados y falso si no lo están.
 */
function lovefunc(flower1, flower2){
    // moment of truth
    return (flower1%2==0 && flower2%2!=0 || flower2%2==0 && flower1%2!=0)
}

function lovefunc(flower1, flower2){
    return flower1 % 2 !== flower2 % 2;
}

const
       lovefunc
      =( Ͼ , Ͽ )=> 
          ! !
( ( Ͼ & 1) ^ (1 & Ͽ ) )

console.log(lovefunc(1,4))
console.log(lovefunc(2,2))