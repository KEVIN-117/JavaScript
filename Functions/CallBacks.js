/**
 * un callback(devoluciones de llamada) consiste en ca,biar el comportamineto de la funcioon sin la necesidad de modificar el codigo
 * dentro de la funcion
 */


function data(array, callback){
    let acumulator = 0;
    for (let i = 0; i < array.length; i++) {
        callback(array[i]);
        acumulator += array[i];
    }
    return acumulator;
}

function ask(question, yes, not){
    if(question == "estas deacuerdo"){
        yes();
        debugger;
    }
    else
        not()
}

ask("estas deacuerdo", function(){
                            console.log("yes")
                        }, function (){
                            console.log("no")
                        }
)

var array = [1, 2, 3, 4, 50];
data(array, function(x){
    /*
    Un callback es una función que se pasa como argumento a otra función y se ejecuta después de que la función original ha terminado de 
    ejecutarse.
    Su uso puede darse en:
        manejo de eventos, control de errores, animaciones, peticiones AJAX
    */
    console.log(x)
})