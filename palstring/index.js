//thequickbrownfoxxofnworbquickthe  ->  brownfoxxofnworb, The length is: 16


const maxPalindromeSubString = (string) => {
    let initialChecks = string.split('')

    if(string.length <= 1){ 
        // exit if string in 1 or less elements
        return string[0]
    }
    
    if (string === initialChecks.reverse().join('')){
        // the whole string is a palindrome
        return string
    }

    if(initialChecks.every( (currentValue) => currentValue === initialChecks[0] )){ // exit if all charactes are equal
        // All the chars are the same
        return string
    }


    
    let result = [];

    const arrSp = initialChecks.join(' ').split("") // add spaces between chars
    for(let i = 0;  i < arrSp.length; i++){
            let palindrome = [];
            let center;
            // inner loop to expand from each character (spaces and letters)
            for(let j = 1;  j < arrSp.length; j++){ // loop outwards on every center
                // j is normal here
                center = arrSp[i]
                if(arrSp[i-j] && arrSp[i+j] && (arrSp[i-j] === arrSp[i+j])){ 
                    // keep expanding if longer palindrome found 
                    // but only push if elements are not falsy
                    // j is skipping index 2 in this conditional because they are not equal
                    arrSp[i-j].trim() ? palindrome.unshift(arrSp[i-j]) : null
                    arrSp[i+j].trim() ? palindrome.push(arrSp[i+j]) : null 
          
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
    
    if(result.length < 1){
        return string[0];
    } else{
        let correctIndex = 0;
        correctIndex = result.reduce((ans, pal, i, array) => array[ans].length > pal.length ? ans : i, 0) // Find array with longest length (this reduce returns the index)
        console.log(`${result[correctIndex].join('')}, ${result[correctIndex].length}`)
        return `${result[correctIndex].join('')}`
    }

}

maxPalindromeSubString("noonmadam")

// *Program to print unique elements of an string present on odd position, along with the count of those elements in the entire string
// i.e abbloseckk - a:1,b:2,o:1,e:1,k:2

// compare strings each by each
// count repeated strings


// const uniqueElements = (string) => {
//     let result = []
//     for(let i = 0;  i < string.length;i++){

//         if(!result.includes(string[i])){
//             result.push(string[i])
//         }
//         for(let j = 0; j < string.length; i++){
//             let count = 0;
//             if(string[i] === string[j]){
                
//             }

//         }
//     }
// }


// *Find the 2nd largest number in a array of numbers
// I.e. - [10,5,7,2,4,1,24] -> 10 

const secondLargestNumber = (array) => {
    array.sort((a,b)=>b-a)
    return array[1]
}

// secondLargestNumber([10,5,7,2,4,1,24])
