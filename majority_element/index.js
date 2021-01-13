// find the value that repeats the most in an array
// [3,2,3] -> 3
// because 3 repeats 2 times vs 2 that has only one

var majorityElement = function(nums) {
    
    let dataObject = {}
    
    for(let i = 0; i< nums.length; i++){
        
        if(!dataObject[nums[i]]){
            
            dataObject[nums[i]] = 1 // initialize to one as the count
            
        }else{
            dataObject[nums[i]]++ // count up if key correspoinding to value already exists
        }
    }
    
    let counts = Object.values(dataObject) 

    let index = counts.indexOf(Math.max(...counts)) 
    // find the index of the highest count in the object
    // console.log(dataObject) ->  {'2':1,'3':2}
    // console.log(counts) -> [1,2]
    // index of highest value in counts would be 1 

    let max = Object.keys(dataObject)
    // console.log(max) -> [2,3]
    return max[index] // in array of keys (max) index 1 would be -> 3
};