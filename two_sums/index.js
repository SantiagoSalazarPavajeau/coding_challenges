// https://leetcode.com/problems/two-sum/
const twoSum = (array, target) => {
    for(let i = 0; i<array.length; i++){
        for(let j = i+1; j<array.length; j++){
            if(array[i] + array [j] === target){
                console.log([i, j])
                return [i, j];
            }
        }
    }

}

twoSum([2,5,5,11], 10)