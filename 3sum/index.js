// combinations of 3
// condition a+b = 0 - c
// unique triplets 

const threeSum = (nums) => {

    nums.sort((a,b) => a-b)
    
    let result = []
    
    for(let i = 0; i < nums.length; i++){
        
        let start = i+1, end = nums.length -1, expected = 0 - nums[i]
        // expected is same as twosum which there is a corresponding value for the third number
        
        while(start < end){
            
            let actualSum = nums[start] + nums[end]
            
            if(actualSum < expected){ // because its sorted
                start++
                
            }else if(actualSum > expected){
                end--
                
            }else{
                let triplet = [ nums[start], nums[end], nums[i]]
                result.push(triplet)
                
                //ignore duplicates with while loops
                while( start < end && nums[start] === triplet[0]) start++
                
                while( start < end && nums[end] === triplet[1]) end--
            }
        }
        
        while(i +1 < nums.length && nums[i+1] === nums[i]) i++
    }
    
    return result
    
};



const threeSumClosest = (nums, target) => {
    //     [-1,2,1,-4]
    //      1
    nums.sort((a,b) => a-b)
    
    let min = Number.MAX_SAFE_INTEGER

    for( let i = 0; i < nums.length && min != 0;  i++){
        
        let start = i + 1, end = nums.length - 1
        
        while(start < end){
            
            let actualSum = nums[start] + nums[end] + nums[i] // only use three pointer sum
                            
            // check the min difference 
            // difference between actualsum and target
            if(Math.abs(target - actualSum) < Math.abs(min)) min = target - actualSum
            // separate absolute value difference from actual minimum difference
            
            // min = Math.min(Math.abs(target - actualSum), Math.abs(min))
            
            // console.log(min)
 
            if(actualSum < target){ // traverse like this since its sorted
                // if we need a larger sum
                start++
            }else{
                // if we need a smaller sum
                end--
            }
        }
        
    }
    return target - min // is the closest 3 sum
};