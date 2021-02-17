/// create a list of numbers unless some condition is met

// unless its a multiple of 3 or 5

// [1,2,fizz,3,4, buzz, fizz, etc...]

 const fizzBuzz = (size) => {

     const result = []

     const conditionData = { // object helps to store conditions however it is not exactly a cache that stores different values during execution
         3: "Fizz",
         5: "Buzz"
     }

     for(let listNumber = 1; listNumber <= size; listNumber++){
        let found = false // to skip index that already was set  to string
         for( let key in conditionData){
            //  console.log(key)
             if ((listNumber % key) === 0){ // check for condition (divisible by) to add fizz or buzz to the result list
                found = true
                 result.push(conditionData[key])
             } 
         }

         if(!found){
            result.push(listNumber) // add number when digit was not divisible with 0 remainder
         }
     }
    //  console.log(result)
     return result
 }

 fizzBuzz(15)