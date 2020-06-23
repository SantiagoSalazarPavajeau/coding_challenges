// compare original array and final array
// to find more than 2 moves(bribes)

const newYearChaos = (queueArray) => {
    let movesBribes = 0
    let tooChaotic = false
    for(let i = 0; i< queueArray.length; i++ ){
        if (queueArray[i] - (i+1) > 2){
            tooChaotic = true
            break
        }
        for(let j = 0; j < i;j++){
            if (queueArray[j] > queueArray[i]){
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
