const nextPermutation = (nums) => {
    
    let i = nums.length -1
    
    while(i> 0 && nums[i-1] >= nums[i]){ // find non ascending integer
        i--
    }
    // i is next to non ascending value
    if(i<=0) return nums.sort((a,b) => a-b)
    
    let j = nums.length -1 
    while(nums[j] <= nums[i-1]){ // find closest to end that is smaller
        j--
    }
    // nums[j] is larger than nums[i-1]
    
    [nums[i-1], nums[j]] = [nums[j], nums[i-1]] // swap
    
    j = nums.length - 1
    while(i<j){ // sort rest of numbers from nums[i]
        [nums[i],nums[j]] = [nums[j], nums[i]]
        i++
        j--
    }
    
};