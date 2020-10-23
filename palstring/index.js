//thequickbrownfoxxofnworbquickthe  ->  brownfoxxofnworb, The length is: 16


const maxPalindromeSubString = (string) => {
    let result = [];
    for(let i = 0;  i < string.length; i++){
            let lowI = i
            let highI = string.length - (i+1)
            if(highI > lowI){
                if(string[lowI] === string[highI] && string[lowI+1] === string[highI-1] ){
                    
                    result.push(string[i])

                }
            }
    }
    console.log(`${result.toString()}, ${result.length}`)  
    return `${result.toString()}, ${result.length}`
   }

maxPalindromeSubString('thequickbrownfoxxofnworbquickthe')

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
    console.log(array[1])
    return array[1]
}

// secondLargestNumber([10,5,7,2,4,1,24])
