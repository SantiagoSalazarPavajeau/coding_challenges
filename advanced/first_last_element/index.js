const searchRange = (nums, target) => {
    if(nums.length === 0) return [-1,-1]
        
    let l = 0
    let r = nums.length -1
    
    let m;
    
    let first = -1
    let last = -1

    
    while(l<r){
        
        m = Math.floor((l + r)/2)
        
        if(nums[m] < target){
            l = m +1
        }else{
            r = m
        }

    }
    
    if(target === nums[l]){
        first = l
    }else{
        first = -1
    }
    
    // console.log(first)
    r = nums.length -1
        console.log(m)

    while(l<r){
        
        m = Math.floor((l + r)/2) +1
        
        if(nums[m] > target){
            r =m - 1
        }else{
            l = m
        }
    }

    if(target === nums[r]){
        last = r
    }else{
        last = -1
    }
        
    return [first, last]
    
//         if target is nums[m] or nums[l] or nums[r]
//         while until all duplicates are over and return both indexes
        
};