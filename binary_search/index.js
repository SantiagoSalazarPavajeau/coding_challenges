function binarySearch(array, value){
    
    let highIndex = array.length -1;
    let lowIndex = 0;
    if(lowIndex > highIndex){
        return -1
    }
    let midIndex = Math.floor((highIndex+lowIndex) / 2)
    let midValue = array[midIndex];
    if(midValue === value){
        return midIndex;
    }
    if(midValue > value){
        // return binarySearch(array.splice(midIndex), value) //splice removes items after index given or replaces 
        return binarySearch(array.slice(lowIndex, midIndex), value) //splice removes items after index given or replaces 
    }
    return binarySearch(array.slice(midIndex + 1, highIndex + 1 ), value) // slice removes items outside of range given

}