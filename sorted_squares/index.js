// [-4,-1,0,3,10]
// [0,1,9,16,100]


var sortedSquares = function(nums) {
    // let result = [] // easy and faster
    // for(num of nums){
    //     result.push(Math.pow(num,2))
    // }
    // return result.sort((a,b) => a-b)

    // two pointers and index method
    let n = nums.length
    let result = []
    
    let left = 0
    let right = n -1
    
    // two pointers and i
    
    for(let i = n-1; i>= 0; i--){
                
        if(Math.abs(nums[left]) < Math.abs(nums[right])){ 
            result[i] = Math.pow(nums[right],2)
            right-- // move on to a lower number
            
        }else{
            result[i] = Math.pow(nums[left],2)
            left++ // move on to a higher number
        }
    }
    
    return result
};