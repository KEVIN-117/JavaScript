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