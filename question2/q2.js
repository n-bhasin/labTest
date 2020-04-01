const mixedArray = ['Matrix', 1, true, 2, false, 3]
let multiplyNumbers = (mixedArray) => {
    let filteredNum = mixedArray.filter(n => Number.isFinite(n))
    let multipliedNum = filteredNum.map(n => n*5) 
    return multipliedNum
}

console.log(multiplyNumbers(mixedArray));