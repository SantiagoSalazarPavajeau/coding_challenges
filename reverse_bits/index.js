// reverse a positive integer
// but from the 32 bit unsigned version


var reverseBits = function(n) {

    let thirtyTwoBitReversed = n.toString(2).padStart(32, "0").split('').reverse().join('')
    // toString(2) converts the 10 base n into 2 base so only 0s and 1s
    // padStart(32,"0") makes sure to add 0s to have 32 bits because some numbers are smaller and have less than 32 bits after converted from base 2 to base 10
    // reverse string as an array

    return parseInt(thirtyTwoBitReversed, 2) // convert back to base 10 from base 2
};