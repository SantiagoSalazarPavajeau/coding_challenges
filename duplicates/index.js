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


