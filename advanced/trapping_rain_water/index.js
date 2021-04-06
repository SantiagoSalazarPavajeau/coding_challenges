// [0,1,0,2,1,0,1,3,2,1,2,1] result: 6
// [4,2,0,3,2,5] result : 9

// calculate the water between the columns of height -> height[current]

const trapRainWater = (height) => {
    let str = 0, 
    end = height.length - 1, 
    max = 0, 
    lMax = 0, 
    rMax = 0;

    while(str<=end){
        lMax = Math.max(lMax, height[str])
        rMax = Math.max(rMax, height[end])

        if(lMax < rMax){ // move start pointer
            max+= lMax - height[str++]
            // highest left yet minus current 
        }else{ // move end pointer
            max+= rMax - height[end--]
            // highest right yet minus current
        }
    }
    return max
}