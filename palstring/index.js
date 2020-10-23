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
    if(string.length <= 1){
        console.log(string[0])
        return string[0]
    }
    let stringWithSpaces = expandedString(string)
    let result = [];
    let lowI; //initialize here to be in scope to return result
    let highI;
    for(let i = 0;  i < stringWithSpaces.length; i++){
            let palindrome = []
            // inner loop to expand from each character (spaces and letters)
            for(let j = 0;  j < stringWithSpaces.length; j++){ // loop outwards on every center
                // console.log(`-${stringWithSpaces[i]}, ${i}`)
                // console.log("        ")
                if(!!stringWithSpaces[i] && stringWithSpaces[i-1] === stringWithSpaces[i+1]){ // if adjacent characters are the same expand on that center
                    // console.log(`-${stringWithSpaces[i]}, ${i}`)
                    // expand
                    palindrome.push[stringWithSpaces[i]] // add center
                    if( !!stringWithSpaces[i-j] && stringWithSpaces[i-j] === stringWithSpaces[i+j]){ // keep expanding if longer palindrome found
                        console.log(`-${stringWithSpaces[i-j]}`)
                        console.log(`-${stringWithSpaces[i+j]}`)
                        palindrome.unshift(stringWithSpaces[i-j])
                        palindrome.push(stringWithSpaces[i+j])
                        console.log(palindrome)                

                    }
                }
            }
            result.push(palindrome)
    }
    // console.log(result)
    result = result.filter((pal) => pal.length !== 0) // only return the arrays that are not empty
    let cleanedResult = [];
    for(let pal of result){ // clean up empty strings and undefined values
        cleanedResult.push(pal.filter((char) => !!char))
    }
    // console.log(cleanedResult)

    
    if(cleanedResult.length === 0){
        // console.log(string[0])
        return string[0];
    } else{
        let correctIndex = 0;
        correctIndex = cleanedResult.reduce((ans, pal, i, array) => array[ans].length > pal.length ? ans : i, 0) // Find array with longest length (this reduce returns the index)
        console.log(`${cleanedResult[correctIndex].join('')}, ${cleanedResult[correctIndex].length}`)
        return `${cleanedResult[correctIndex].join('')}, ${cleanedResult[correctIndex].length}`
    }

}

maxPalindromeSubString('babad')

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
