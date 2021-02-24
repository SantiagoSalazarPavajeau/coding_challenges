// map all posibilities of roman numerals to integers


const intToRoman = (num) => {
    let thousands = ["", "M", "MM", "MMM"],
    hundreds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
    tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
    ones = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
    thousand = Math.floor(num/1000),
    hundred = Math.floor((num%1000)/100),
    ten = Math.floor((num%100)/10),
    one = Math.floor(num%10)

    return thousands[thousand] + hundreds[hundred] + tens[ten] + ones[one]


};

const intToRomanParallelArrays = () => {
    let integers = [1000,900,500,400,100,90,50,40,10,9,5,4,1]
    let romNums = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]
    
    let result = ''
    
    for(let i = 0; i< romNums.length; i++){
        while(num >= integers[i]){ 
        // if the test number is larger than the current integer from all posibilities
            num -= integers[i]
            //integers[i] is the same as romNums[i] (translated)
            console.log(num)
            result+= romNums[i]
        }
    }
    return result
}