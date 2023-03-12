class SmallestIntegerFinder {
    findSmallestInt(array1) {
        return Math.min(...array1)
    }
}

let sif = new SmallestIntegerFinder()
console.log(sif.findSmallestInt([78,56,232,12,8]))