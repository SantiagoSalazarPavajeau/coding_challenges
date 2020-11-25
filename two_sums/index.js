// https://leetcode.com/problems/two-sum/
// const twoSum = (array, target) => {
//     for(let i = 0; i<array.length; i++){
//         for(let j = i+1; j<array.length; j++){
//             if(array[i] + array [j] === target){
//                 console.log([i, j])
//                 return [i, j];
//             }
//         }
//     }

// }
const twoSumFastNumbers = (numbers, sum) => {

    const dataObject = {}
    let result = []

    for(let i =0; i< numbers.length; i++){
        dataObject[numbers[i]] = numbers[i] 
    }

    for(let i =0; i< numbers.length; i++){
        const missingNumber = sum - numbers[i] 



        if(dataObject[missingNumber] && dataObject[numbers[i]]){ 

            result.push([i, dataObject[missingNumber]])

        }

    }
    return result
}

const twoSumFastIndex = (numbers, sum) => {

    const dataObject = {}
    let result = []

    for(let i =0; i< numbers.length; i++){
        const missingNumber = sum - numbers[i] 

        if(dataObject[missingNumber] !== undefined){ 

            result.push([dataObject[missingNumber], i])

        }
        dataObject[numbers[i]] = i

    }
    return result
}

console.log(twoSumFastIndex([1,2,7,8,9], 10))



// find the indexes of two numbers that their sum is the second argument passed to the twoSum method

//      0 1 2 3
// correct answer [1,2]
const twoSum = (numbers, sum) => {

    const dataObject = {}

    let result = []

    for(let i =0; i< numbers.length; i++){
        dataObject[numbers[i]] = numbers[i] // 1: 1 
        // dataObject[numbers[i]] = i // 1: 1
    }

    for(let i =0; i< numbers.length; i++){

        const otherAdd = sum - numbers[i] // 10 - 1 = 9  | i = 0
        //10 - 9 = 1
        let pair = []

        if(dataObject[otherAdd] && dataObject[numbers[i]]){ // 9 & 1
            // 1
            pair[0] = i // 9
            pair[1] = dataObject[otherAdd] // 1
            result.push(pair)

        
        }
        delete dataObject[otherAdd] 
        delete dataObject[numbers[i]] 
    }


    return result
}

// console.log(twoSum([1,2,7,8,9], 10))
