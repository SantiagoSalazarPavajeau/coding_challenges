
var getRow = function(numRows) {
    let result = []
    numRows++
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
            console.log(prevArr)

        }
        
        arr.push(1)
        
        result.push(arr)
    }
    numRows--
    return result[numRows]
}