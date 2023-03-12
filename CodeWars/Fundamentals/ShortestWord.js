function findShort(s){
    let aux = s.split(' ');
    s = aux.map(item => String(item).length)
    return Math.min(...s)
}

function findShort(s){
    return Math.min.apply(null, s.split(' ').map(w => w.length));
}

function findShort(s){
    return Math.min(...s.split(" ").map (s => s.length));
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"))