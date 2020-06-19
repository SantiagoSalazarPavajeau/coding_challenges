arrayShiftLeft([5,4,3,2,1], 3)

function arrayShiftLeft(array, shiftsLeft){
    
    for(let oldIndex = 0; oldIndex <shiftsLeft; oldIndex++){
        let firstValue =  array[0] // define inside loop so the first value is updated each time its rotated left
        let newIndex = 0; // define outside of inner loop scope to set correct last value 

        for(; newIndex < array.length-1; newIndex++){

            array[newIndex] = array[newIndex +1]

        }

        array[newIndex] = firstValue // newIndex is 4 after the inner loop, newIndex will change according to the amount of loops
        
    }
    console.log(array)
}