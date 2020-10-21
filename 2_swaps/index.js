// use console.log to track progress of program
// 

const swapTwoToSort = (unsortedArray)=>{
    let swaps = 0 // this variable is not reset on loop so it stores the last number its assigned in loop
    let inspectionArray = []
    for (let outerIndex = 0; outerIndex < unsortedArray.length; outerIndex++) {
        console.log("Current unsorted-array Index is: "+outerIndex)
        let innerIndex = outerIndex
        let cycle = 0; // this is a local variable for the block it is set to 0 on each loop over the unsorted array
        console.log("The correct element should be:" + innerIndex)
        if(!inspectionArray[innerIndex]) {
            while (!inspectionArray[innerIndex]) {
                console.log(`\tWe are inside while loop... The [${innerIndex}] index has not been inspected.`)
                inspectionArray[innerIndex] = true; // create the current element on the virtual array
                console.log(`\tWe just inspected the: [${innerIndex}] index`)
                console.log(`\tThe current element is: ${unsortedArray[innerIndex]}`)
                console.log(`\t${unsortedArray}`)
                innerIndex = unsortedArray[innerIndex] - 1; // change the inner Index to stay or leave the while loop
                console.log(`\tWe just set the index to value to:  ${unsortedArray[innerIndex] - 1}`)
                cycle++;
                console.log(`\tWe just counted ${cycle} cycles.`)
            }
        } else{
            console.log(`Index ${innerIndex} has already been inspected`)
        }
        if (cycle != 0)
            swaps += cycle - 1;
        console.log("\t\tTotal swaps: ->" + swaps)
    }
    return swaps;
}

swapTwoToSort([1,3,5,2,4,6,7])