// generate pascal triangle
// where arrays are generated by adding two consecutive inner integers
// first and last elements are always 1

var generate = function(numRows) {
    let result = []
    
    if(numRows === 0){
        return result
    }
    
    result.push([1])
    
    for(let i = 1; i<numRows;i++){
        let arr = []
        let prevArr = result[i-1]
        arr.push(1)

        for(let j = 1; j<i; j++){
            arr.push(prevArr[j-1] + prevArr[j])
        }
        arr.push(1)
        
        result.push(arr)
    }
    return result
};