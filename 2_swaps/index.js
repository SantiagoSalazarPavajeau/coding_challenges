// use console.log to track progress of program
// 

const swapTwoToSort = (unsortedArray)=>{
    let swaps = 0
    let virtualSortedArray = []
    for (let outerIndex = 0; outerIndex < unsortedArray.length; outerIndex++) {
        console.log("i \t ->"+outerIndex)
        let innerIndex = outerIndex, cycle = 0;
        console.log("j \t ->" + innerIndex)
        while (!virtualSortedArray[innerIndex]) {
            console.log("We are inside while loop ")
            virtualSortedArray[innerIndex] = true; // create the current element on the virtual array
            console.log(`Just set the: ${innerIndex} element to ${virtualSortedArray[innerIndex]}`)
            innerIndex = unsortedArray[innerIndex] - 1; // change the j or inner index to be the the j element on the original array
            console.log("j \t ->" + innerIndex)
            console.log(virtualSortedArray)
            cycle++;
        }
        if (cycle != 0)
            swaps += cycle - 1;
        console.log("Total swaps: \t ->" + swaps)
    }
    return swaps;
}

swapTwoToSort([1,3,5,2,4,6,7])