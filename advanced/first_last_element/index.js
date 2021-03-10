const searchRange = (nums, target) => {
    if(nums.length === 0) return [-1,-1]
        
    let l = 0
    let r = nums.length -1
    
    let first = -1;
    
    while(l<r){
        
        let m = Math.floor(l + (r -l)/2)
        
        if(nums[m] >= target){
            r = m - 1
        }else{
            l = m + 1
        }
        
        if(target === nums[m]){
            first = m

        }
        


    }
    
    console.log(first)

    


    l = 0
    r = nums.length -1
    let last = -1

    while(l<r){
        
        let m = Math.floor(l + (r -l)/2)
        
        if(target >= nums[m]){
            l =m + 1
        }else{
            r = m -1
        }
        
        if(target === nums[m]){
            last = m
        }
    }
        
    return [first, last]
    
//         if target is nums[m] or nums[l] or nums[r]
//         while until all duplicates are over and return both indexes
        
};