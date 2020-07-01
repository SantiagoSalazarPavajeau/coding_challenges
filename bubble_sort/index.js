let countSwaps= (array)=>{
    let totalSwaps = 0
    for(let outerIteration = 0; outerIteration< array.length; outerIteration++){
        let doneSwapping = 0
        for(let innerIteration =0; innerIteration< array.length; innerIteration++){
            if(array[innerIteration] > array[innerIteration+1]){
                temp = array[innerIteration]
                array[innerIteration] = array[innerIteration+1]
                array[innerIteration+1] = temp
                totalSwaps++
                doneSwapping++
            }
            if(doneSwapping ==0){
                console.log(`Array is sorted in ${totalSwaps} swaps.`)
                console.log(`First Element: ${array[0]}`)
                console.log(`Last Element: ${Math.max(...array)}`)
                return totalSwaps
                break;
            }
        }
    }
    
}

countSwaps([3,2,1])