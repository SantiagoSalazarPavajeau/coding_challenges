// if square root is decimal return 8 =>  2.66 return 2


const sqrRoot = (square) => {
    if(square === 0) return 0
    if(square === 1 ) return 1

    let multiple;

    for(multiple =1 ; multiple<= square/2; multiple++ ){
        console.log('index/multiple:', multiple)

        if (multiple*multiple === square ){

            return multiple

        }else if(square/multiple < multiple ){ // current multiple divided by square
            //     1        < 5    /1   -->  5
            //     2        <   5  /  2 === 2.5
            //     3        >   5 / 3  === 1.6
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
    // 3-1 => 2
    return multiple - 1
    
}

console.log(sqrRoot(5))