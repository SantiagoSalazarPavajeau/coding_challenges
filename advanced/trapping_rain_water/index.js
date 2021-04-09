// [0,1,0,2,1,0,1,3,2,1,2,1] result: 6
// [4,2,0,3,2,5] result : 9

// calculate the water between the columns of height -> height[current]

const trapRainWater = (height) => {
    let str = 0, 
    end = height.length - 1, 
    water = 0, 
    sMax = 0, // start max
    eMax = 0; // end max

    while(str<=end){
        sMax = Math.max(sMax, height[str])
        eMax = Math.max(eMax, height[end])

        if(sMax < eMax){ // move start pointer
            water+= sMax - height[str++]
            // highest left yet minus current 
        }else{ // move end pointer
            water+= eMax - height[end--]
            // highest right yet minus current
        }
    }
    return max
}