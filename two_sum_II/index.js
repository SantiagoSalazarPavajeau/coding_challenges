// find two numbers on the list that will add to target
// 

var twoSum = function(numbers, target) {
    
    for(let i = 0; i< numbers.length ; i++){
        
        for(let j = i+1; j<numbers.length; j++){
            if(numbers[i] + numbers[j] === target){
                return [i+1,j+1] // non-zero index are required
            }
        }
    }
    return null
};