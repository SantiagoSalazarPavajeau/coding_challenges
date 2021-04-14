// try to reach the end of the array in the least amount of 'jumps' or steps
// you can only jump up to the current number steps youre on

// pointers and bfs
// 
// jumps -> result
// length 
// current jump to make
// current jumps made

// if length is equal to current jumps set current result

// if next current result is smaller set new result

var jump = function(nums) {
    if(nums.length <= 1) return 0 
    
    let result = 0, left = 0, right = 0;
    while(right < nums.length){
        result++
        let currentMax = right + 1
        for(let i = left; i <= right; i++){
            if(i + nums[i] >= nums.length -1){ //exit condition
                return result
            }
            currentMax = Math.max(currentMax, i + nums[i])
        }
        left = right + 1
        right = currentMax
    }
    return result
};