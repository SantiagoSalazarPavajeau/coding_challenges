// use console.log to track progress of program
// 

const swapTwoToSort = (unsortedArray)=>{
    let swaps = 0
    let inspectionArray = []
    for (let outerIndex = 0; outerIndex < unsortedArray.length; outerIndex++) {
        console.log("Unsorted Index is: "+outerIndex)
        let innerIndex = outerIndex, cycle = 0;
        console.log("Index to value is: " + innerIndex)
        while (!inspectionArray[innerIndex]) {
            console.log("\tWe are inside while loop... ")
            inspectionArray[innerIndex] = true; // create the current element on the virtual array
            console.log(`\tWe just inspected the: [${innerIndex}] element`)
            console.log(`\tThe current element is: ${unsortedArray[innerIndex]}`)
            innerIndex = unsortedArray[innerIndex] - 1; // change the j or inner index to be the the j element on the original array
            console.log(`\tWe just set the index to value to:  ${unsortedArray[innerIndex] - 1}`)
            cycle++;
            console.log(`\tWe just counted ${cycle} cycles.`)
        }
        if (cycle != 0)
            swaps += cycle - 1;
        console.log("\t\tTotal swaps: ->" + swaps)
    }
    return swaps;
}

swapTwoToSort([1,3,5,2,4,6,7])