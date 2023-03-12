// function isTriangle(a,b,c)
// {
//   let s =(a+b+c)/2;
//   if (s <= 0 || a <= 0 || b <= 0 || c <= 0) return false;
//   return Math.sqrt(s*(s-a)*(s-b)*(s-c)) > 0
// }

// function isTriangle(a,b,c)
// {
//    return a + b > c && a + c > b && c + b > a;
// }

var isTriangle = (a,b,c) => Math.max(a,b,c)<(a+b+c)/2
console.log(isTriangle(1,2,2))
console.log(isTriangle(7,2,2))
console.log(isTriangle(5,4,7))
console.log(isTriangle(-2,-2,-2))
console.log(isTriangle(9,-2,10))