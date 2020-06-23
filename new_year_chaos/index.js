// compare original array and final array
// to find more than 2 moves(bribes)

//we compare two arrays by using an inner loop

const newYearChaos = (queueArray) => {
    let movesBribes = 0
    let tooChaotic = false
    for(let initialIndex = 0; initialIndex< queueArray.length; initialIndex++ ){
        if (queueArray[initialIndex] - (initialIndex+1) > 2){
            tooChaotic = true
            break
        }
        for(let movedIndex = queueArray[initialIndex] - 2; movedIndex < initialIndex;movedIndex++){
            if (queueArray[movedIndex] > queueArray[initialIndex]){
                movesBribes++
            }
        }
    }
    if(tooChaotic){
        console.log("Too chaotic")
    }else{
        console.log(movesBribes)
    }
}


newYearChaos([2,1,5,3,4])
