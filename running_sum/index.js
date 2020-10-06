// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
// Return the running sum of nums.
// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

function runningSum(array){
    let sumArray = []
    for(let i = 0; i<array.length; i++){
        if(sumArray[0]){
            sumArray.push(array[i]+ sumArray[i-1])
        }else{
            sumArray[0] = array[i]
        }
    }
    return sumArray
}