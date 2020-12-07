var findTargetSumWays = function(nums, S) {
    
    const dataObject = {}
    
    return calculateSum(dataObject, nums, 0, 0, S)
};

const calculateSum = (dataObject, nums, i, sum, target) => {
    console.log("i", i, "sum", sum)
    if(i === nums.length){ // i === 3
        return sum === target ? 1 : 0 // sum === 1
    }
    
    let result = calculateSum(dataObject, nums, i+1, sum + nums[i], target) + calculateSum(dataObject, nums, i+1, sum - nums[i], target)
    //    0 0               0 0
    //    1 1              1 -1
    //    2 2               2 -2
    //   i:3 sum:3               3 -3
    // s++//   \\i++ sum--
    //  4 4     4 2
    //            \\i++ sum--
    //              5 1
    // .....
    //    

    // for count++
    //    i: 3  sum: 1
    
    dataObject[sum] = result
    console.log(dataObject, "sum:", sum, "result:", result, "i:", i)
    return result
}

console.log(findTargetSumWays([1,1,1],1))

// -1+1+1 = 1
// +1-1+1 = 1
// +1+1-1 = 1
// -1-1+1 = -1
// +1-1-1 = -1
// -1-1-1 = -3
// +1+1+1 = 3