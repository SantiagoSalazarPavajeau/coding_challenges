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

// find the indexes of two numbers that their sum is the second argument passed to the twoSum method

//      0 1 2 3
// correct answer [1,2]
const twoSum = (numbers, sum) => {

    const dataObject = {}

    let result = []

    for(let i =0; i< numbers.length; i++){
        dataObject[numbers[i]] = numbers[i] // 1: 1
    }
    console.log(dataObject)

    for(let i =0; i< numbers.length; i++){

        const otherAdd = sum - numbers[i] // 10 - 1 = 9  | i = 0
        //10 - 9 = 1
        let pair = []

        if(dataObject[otherAdd] && dataObject[numbers[i]]){ // 9
            // 1
            pair[0] = dataObject[otherAdd] // 9
            pair[1] = numbers[i] //1
            console.log(dataObject)
            console.log(numbers)
            console.log(pair)
            result.push(pair)

        
        }
        delete dataObject[otherAdd] 
    }

    console.log(result.length)
    return result.length
}

twoSum([1,2,7,8,9], 10)
