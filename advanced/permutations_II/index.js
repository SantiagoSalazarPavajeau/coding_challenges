var permuteUnique = function(nums) {
    let result = []
    nums.sort((a,b) => a-b)
    permute(result, nums, 0)
    return result
};

const permute = (result, nums, start) => {
    
    if(start === (nums.length - 1)){
        result.push(nums)
    }else{
        for(let i = start; i<nums.length ;i++){
            
            if(( i === start) || (nums[i] !== nums[start])){
                
                [nums[i], nums[start]] = [nums[start], nums[i]] 
                console.log(nums)
                permute(result, nums, start+1)
            }
        }
    }
}