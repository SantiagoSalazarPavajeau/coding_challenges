var permuteUnique = function(nums) {
    let result = []
    nums.sort((a,b) => a-b)
    permute(result, nums, 0)
    return result
};

const permute = (result, nums, start) => { 
    // use start as pointer 
    // modify nums directly by swap
    // when start arrives to length of n add new permutation
    if(start === (nums.length - 1)){
        result.push([...nums])
        return
    }else{
        for(let i = start; i<nums.length ;i++){
            
            if(( i === start) || (nums[i] !== nums[start])){
                
                [nums[start], nums[i]] = [nums[i], nums[start]] 
                console.log(nums)
                permute(result, nums, start+1)
            }
        }
    }
}