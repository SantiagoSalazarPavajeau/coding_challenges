// find matching strings to search term

// return matching results for every character

// create an object with keys m, mo, mou, mous, mouse


const slowSearch = (products, searchTerm) => {
    products.sort()
    const data = {}

    for(let i = 0; i < searchTerm.length; i++){ // analyze each substring

        let substring = searchTerm.substring(0, i+1)
        console.log(substring)

        data[substring] = [] // create data object with substrings

        for(let j = 0; j < products.length; j++){ // analyse each product with j
            if(products[j][0]!= substring[0])
                break
            if(products[j].includes(substring) && data[substring].length < 3){

                data[substring].push(products[j]) // push products containing match to substring
            }
        }
    }


    console.log(data)
    console.log(Object.values(data))
    return Object.values(data)
}

slowSearch(["mobile","mouse","moneypot","monitor","mousepad"], "mouse")


var suggestedProducts = function(products, searchWord) {
    let retList = [];
    products.sort()

    for (let i = 0; i < searchWord.length; i++) {

        let listString = [];

        for (let j = 0; j < products.length; j++) {

            if (listString.length < 3 && i < products[j].length // if i is less than each string length
                    && (products[j].substring(0, i + 1)===(searchWord.substring(0, i + 1)))) { 
                    //compare substring of product vs search word (only for the length of the product)

                listString.push(products[j]);
            }
        }
        // if (listString.size() > 0) {
            retList.push(listString);
        // }
    }
    return retList;
}



var suggestedProducts = function(products, searchWord) {

    products.sort((a,b) => a.localeCompare(b)) // sort a vs å

    let ans = [], prev 

    for(let i = 0; i < searchWord.length; i++){

        let sub = [], temp = []

        let arr = !i ? products : prev // when i = 0 ->  arr = products

        // prev stores found words in previous loop
        // i = 1 all words with 'm' found in loop i = 0

        for(let j = 0; j < arr.length; j++){

            if(sub.length < 3 && arr[j][i] === searchWord[i]) sub.push(arr[j]) 
                                 
            // compare 

            if(arr[j][i] === searchWord[i]) temp.push(arr[j]) 

            // at i = 0 push all words starting with 'm'
            // at i = 1 push all words have with 'o' at second char (arr already contains all words starting with 'm')

        }
        ans.push(sub)
        prev = temp
    }
    return ans
};


