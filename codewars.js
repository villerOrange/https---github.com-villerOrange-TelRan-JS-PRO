const nums = [6, 2, 1, 8, 10];

const sumNums = arr => {
    if (!Array.isArray(arr) || arr.length <3) {
        return 0;
    }
    
    let result = arr.reduce((a, b) => a + b) - Math.max(...arr) - Math.min(...arr);
    return result;
}

console.log(sumNums(nums));