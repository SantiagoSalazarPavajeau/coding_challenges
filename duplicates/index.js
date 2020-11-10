// In this challenge we find the duplicates on an array and return an object with all the duplicates on the corresponding key


const numbersWDuplicates = [1,1,1,3,3,3,5,5,6,9,4,2,5,7,4,3,2,1,8,5,3,6,7,2,5,7,1,8,1]


const findDuplicates = (numbers) => { // O(2n) big o complexity

    let result = {}

    for(let i = 0; i<numbers.length;  i++){

        if(!result[numbers[i]]){
            result[numbers[i]] = [] // create an empty array as a value for any unique keys to store duplicate values
        }
    }

    for(let i = 0; i<numbers.length;  i++){
            result[numbers[i]].push(numbers[i]) // key changes to assign values 
    }
    console.log(result)
    return result
}

findDuplicates(numbersWDuplicates)


// with O(n^2) complexity we do a nested loop 


const findDuplicatesSlow = (numbers) => { // O(2n) big o complexity

    let result = {}

    for(let i = 0; i<numbers.length;  i++){ 
        for(let j = 0; j<numbers.length;  j++){

            if(numbers[i] === numbers[j]){
                if(!result[numbers[i]]){
                    result[numbers[i]] = [numbers[i]] // add first found number to array when key and array are created
                }else{
                    result[numbers[i]].push(numbers[i]) // key changes to assign values to keys that already exist
                }
                numbers[i] = null // delete value at i position from numbers so it is not considered again by j nested index iteration
            }

        }

    }

    
    console.log(result)
    return result
}


findDuplicatesSlow(numbersWDuplicates)