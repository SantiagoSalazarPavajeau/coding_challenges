// use bitwise operators to count the number of 1 bits

// count the number of 1s in a 32 bit integer

// the argument number is converted into 32 bit integer by bitwise operators


const numberOf1Bits = (number) => {
    let countOf1Bits = 0
    while(number != 0){
        countOf1Bits++
        number = number & (number-1) // compund bitwise AND oprerator
        // for 10
        // 1010 -> 10 in bit
        //&1001 -> 9 in bit
        //=
        // 1000 -> 8 in bit
        // **compare digits only add 1s where theres 1 in both binaries add 0 where there is 1 and 0 or 0 and 0**

        // 1000 -> 8 in bit
        //&0111 -> 7 in bit
        //=
        // 0000 -> 0 in bit

        console.log(number)
    }
    console.log(countOf1Bits)
    return countOf1Bits
}

numberOf1Bits(10)