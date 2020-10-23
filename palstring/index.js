//thequickbrownfoxxofnworbquickthe  ->  brownfoxxofnworb, The length is: 16

const expandedString = (string) => {
    let stringArray = []
    for(let i = 0;  i < string.length; i++){
        stringArray.push(string[i])
        stringArray.push("")
    }
    stringArray.pop()
    return stringArray
}

const maxPalindromeSubString = (string) => {
    let initialChecks = string.split('')
    
    if (new String(string) == new String(initialChecks.reverse().join(''))){
        // console.log(initialChecks.reverse())
        console.log("the whole string is a palindrome")
        console.log(string)
        return string
    }

    if(initialChecks.every( (currentValue) => currentValue === initialChecks[0] )){ // exit if all charactes are equal
        console.log("the whole chars are the same")
        return string
    }

    if(string.length <= 1){ // exit if string in 1 or less elements
        console.log(string[0])
        return string[0]
    }
    let result = [];

    const arrSp = string.split('').join(' ').split("")
    console.log(arrSp)
    for(let i = 0;  i < arrSp.length; i++){
            let palindrome = [];
            let center;
            // inner loop to expand from each character (spaces and letters)
            for(let j = 1;  j < arrSp.length; j++){ // loop outwards on every center
                // j is normal here
                center = arrSp[i]
                if((arrSp[i-j] === arrSp[i+j]) && arrSp[i-j] && arrSp[i+j]){ 
                    // keep expanding if longer palindrome found 
                    //but only push if elements are not falsy
                    // j is skipping index 2 in this conditional because they are not equal
                    if(center === 'd'){
                        console.log(center)
                        console.log(arrSp[i-j])
                        console.log(arrSp[i+j])
                        console.log(`i:${i}`)
                        console.log(`j:${j}`)
                    }   
                    arrSp[i-j].trim() ? palindrome.unshift(arrSp[i-j]) : null
                    arrSp[i+j].trim() ? palindrome.push(arrSp[i+j]) : null 
                    // if(center === 'd'){
                    //     console.log(center)
                    //     console.log(`i:${i}`)
                    //     console.log(`j:${j}`)
                    // }                
                }else{
                    break;
                }
                
            }
            
            !!center.trim() ? palindrome.splice(palindrome.length / 2, 0, center) : null 
            // add center at the end outside of loop to evade duplicates
            // add to odd array by inserting into half of length
            // no need to add to even
            // when the center is a blank space dont add just leave the expanded values
            palindrome.length ? result.push(palindrome) : null
            
    }
    // console.log(result)

    cleanedResult = result
    // result = result.filter((pal) => pal.length !== 0) // only return the arrays that are not empty
    // let cleanedResult = [];
    // for(let pal of result){ // clean up empty strings and undefined values
    //     cleanedResult.push(pal.filter((char) => char !== ' '))
    // }
    // console.log(cleanedResult)

    
    if(cleanedResult.length < 1){
        console.log(string[0])
        return string[0];
    } else{
        let correctIndex = 0;
        correctIndex = cleanedResult.reduce((ans, pal, i, array) => array[ans].length > pal.length ? ans : i, 0) // Find array with longest length (this reduce returns the index)
        console.log(`${cleanedResult[correctIndex].join('')}, ${cleanedResult[correctIndex].length}`)
        return `${cleanedResult[correctIndex].join('')}`
    }

}

maxPalindromeSubString("aacabdkacaa")

// *Program to print unique elements of an string present on odd position, along with the count of those elements in the entire string
// i.e abbloseckk - a:1,b:2,o:1,e:1,k:2

// compare strings each by each
// count repeated strings


const uniqueElements = (string) => {
    let result = []
    for(let i = 0;  i < string.length;i++){

        if(!result.includes(string[i])){
            result.push(string[i])
        }
        for(let j = 0; j < string.length; i++){
            let count = 0;
            if(string[i] === string[j]){
                
            }

        }
    }
}


// *Find the 2nd largest number in a array of numbers
// I.e. - [10,5,7,2,4,1,24] -> 10 

const secondLargestNumber = (array) => {
    array.sort((a,b)=>b-a)
    return array[1]
}

// secondLargestNumber([10,5,7,2,4,1,24])
