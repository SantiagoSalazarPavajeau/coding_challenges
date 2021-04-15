// backtracking


var permute = function(nums) {
    let result = []
    backtracking(result, [], nums) 
    return result
};

const backtracking = (result, current, nums) => {
    if(current.length === nums.length){
        result.push([...current]) // add a copy of current
    }else{
        for(let i = 0; i <nums.length; i++){
            if(current.includes(nums[i])) continue // skip rest of loop 
            current.push(nums[i])
            backtracking(result, current, nums)
            current.pop()
        }
    }
}