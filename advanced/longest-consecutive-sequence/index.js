const longestConsecutive = (nums) => {
    let set = new Set(nums)
    
    let result = 0
    
    for(let num of set){
        
        if(!set.has(num-1)){
            let currentResult = num + 1
            
            while(set.has(currentResult)){
                currentResult+=1
            }
            result = Math.max(result, currentResult - num)
        }
    }
    return result
};