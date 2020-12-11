var subarraySum = function(nums, k) {
    let count = 0
    let sum = 0
    
    let dataObject = {}
    
    for(let i = 0; i <= nums.length ; i++){

        sum += nums[i]
        if(sum === k)
            count++
        
        if(dataObject[sum - k]){
            count += dataObject[sum -k]
        }

        if(dataObject[sum]){
            dataObject[sum]++
        }else{
            dataObject[sum] = 1
        }

        // dataObject[sum] = sum in dataObject ? dataObject[sum] + 1 : 1

    }

    console.log(dataObject)
    
    return count;
};

console.log(subarraySum([1,1,1], 1))


// [{0=1, 1=1}]
// [{0=1, 1=1, 2=1}]
// [{0=1, 1=1, 2=1, 3=1}]
