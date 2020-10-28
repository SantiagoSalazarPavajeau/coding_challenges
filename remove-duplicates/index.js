const duplicates = [1,1,2]


const removeDuplicates = (array) => {
    let i = 0
        for(let j = 1; j < array.length; j++){
            if(array[i] !== array[j]){ // eliminate the number at array[i]
                i++ // we make the i increase on this condition instead of it increasing with a for loop (skip method)
                array[i] = array[j] // remove 1 elements at index i
            } 
        }
    console.log(i + 1)
    return i + 1 // return the count of non duplicates + 1 since it starts at 0
}



removeDuplicates(duplicates)