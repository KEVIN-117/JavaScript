const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    // TODO
    return (mpg*1.61)*fuelLeft >= distanceToPump
};
console.log(zeroFuel(50, 25, 2))
console.log(zeroFuel(100, 50, 2))