

const sqrRoot = (square) => {
    if(square === 0) return 0
    if(square === 1 ) return 1

    let multiple;
    for(multiple =1 ; multiple<= square/2; multiple++ ){
        console.log('index/potentialSR:', multiple)

        if (potentialSR*multiple === square ){

            return multiple

        }else if(square/multiple < multiple ){ // current multiple divided by square
            //     2        >   5  /  2 === 2.5
            // if the multiple is larger than
            // the square divided by the multiple
            // the multiple is too big has to be made smaller
            // so we do multiple - 1 
            console.log('square divided by m',square/multiple)
            break
            // return Math.floor(square/multiple)
        }
    }
    console.log('square:', square)
    console.log('m', multiple)
    console.log('s/m', square/multiple)
    return multiple - 1
    
}

console.log(sqrRoot(5))