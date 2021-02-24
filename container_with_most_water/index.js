const maxArea = (height) => {
    
    let i = 0
    let j = height.length -1
    
    let currArea = 0
    
    while(i < j){
        
        // let length = j - i
        
        let currHeight = Math.min(height[i], height[j])
        
        currArea = Math.max(currArea, (j - i) * currHeight)
        
        // while(height[i] <= currHeight && i < j) i++
        // while(height[j] <= currHeight && i < j) j--
        
        if(height[i] < height[j]){
            i++
        }else{
            j--
        }
    }
    
    return currArea
};

