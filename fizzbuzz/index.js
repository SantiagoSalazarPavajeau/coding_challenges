/// create a list of numbers unless some condition is met

// unless its a multiple of 3 or 5

// [1,2,fizz,3,4, buzz, fizz, etc...]

 const fizzBuzz = (size) => {

     const result = []

     const conditionData = {
         3: "Fizz",
         5: "Buzz"
     }

     for(let listNumber = 1; listNumber <= size; listNumber++){
        let found = false
         for( let key in conditionData){
             console.log(key)
             if ((listNumber % key) === 0){
                found = true
                 result.push(conditionData[key])
             } 
         }

         if(!found){
            result.push(listNumber)
         }
     }
     console.log(result)
     return result
 }

 fizzBuzz(15)