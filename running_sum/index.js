// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
// Return the running sum of nums.
// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

function runningSum(array){
    let sumArray = []
    for(let i = 0; i<array.length; i++){
        if(sumArray[0]){ // if sumArray first value is falsy: skip
            sumArray.push(array[i] + sumArray[i-1])
        }else if(sumArray[0] === 0){ // if sumArray first value is zero
            sumArray.push(array[i] + sumArray[i-1]) //push the addition of the current value in array and the last value in the sumArray
        } else{
            sumArray[0] = array[i]
        }

    }
    return sumArray
}