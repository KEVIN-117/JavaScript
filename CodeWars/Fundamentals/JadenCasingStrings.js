String.prototype.toJadenCase = function () {
    return this.split(" ").map(e => e.substring(0,1).toUpperCase()+e.substring(1, e.length)).join(" ");
};
var str = "How can mirrors be real if our eyes aren't real"
console.log(str.toJadenCase())