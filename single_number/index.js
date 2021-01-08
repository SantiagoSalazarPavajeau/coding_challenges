// find the number that has no duplicates
// [1,1,2,2,3]
// returns 3

const singleNumber = () => {
    dataObject = {}
        
    for(let i of nums){
        dataObject[i] = (dataObject[i] || 0) + 1
    }
    console.log(dataObject)

    for(let i of nums){
        if(dataObject[i] === 1){
            return i
        }
    }

    return 0
}