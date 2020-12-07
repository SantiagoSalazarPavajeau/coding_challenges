// two arrays are given and they have to be mixed
// two values are given that tell us how many initialized numbers are in each array (length1 and length2)

// the first array has enough space to add the elements from the second array from the start

// we use a decreasing index for loop

// we use length1 and length2 as 'pointers'

const mergeArrays = (array1, length1, array2, length2) => {
    length1-- // to set as max index (2)  i
    length2-- // instead of length (3)  j

    for(let i = array1.length -1; i > 0; i--){

        if (length1 < 0){ 
            // console.log(array1)
            array1[i] = array2[length2]
            length2--
        }else if (length2 < 0 ){ 
            console.log(array1, "pointer -> length2 is now less than 0 we have gone over all array2 elements")        
            array1[i] = array1[length1]
            length1--
        } else{
            if (array1[length1]> array2[length2]){ // if element on array1[pointer] is greater than element on array2[pointer]
                console.log(array1, array2, `array1[${length1}]: ${array1[length1]} is greater than array2[${length2}]: ${array2[length2]}`)
                console.log(length1, "(pointer -> length1)")
                array1[i] = array1[length1] 
                length1--
                console.log( "just decresed pointer -> length1 to:", length1)
                console.log("")

            }else{
                console.log(array1, array2, `array1[${length1}]: ${array1[length1]} is less than or equal to array2[${length2}]: ${array2[length2]}`)
                console.log(length2, "(pointer -> length2)")
                array1[i] = array2[length2]
                length2-- // only decrease when the right spot is found and element from array2 is less than or equal to element from array3 to keep sorted
                console.log( "just decresed pointer -> length2 to:", length2)
                console.log("")
            }
        }

    }
}
mergeArrays([1,2,3,0,0,0],3,[2,5,6],3)