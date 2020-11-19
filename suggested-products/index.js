// find matching strings to search term

// return matching results for every character

// create an object with keys m, mo, mou, mous, mouse


const slowSearch = (products, searchTerm) => {
    products.sort()
    const data = {}

    for(let i = 0; i < searchTerm.length; i++){ 

        let substring = searchTerm.substring(0, i+1)
        console.log(substring)

        data[substring] = [] // create data object with substrings

        for(let j = 0; j < products.length; j++){ // analyse each product with j

            if(products[j].includes(substring) && data[substring].length < 3){

                data[substring].push(products[j]) // push products containing match to substring

            }
        }
    }



    console.log(Object.values(data))
    return Object.values(data)
}

slowSearch(["mobile","mouse","moneypot","monitor","mousepad"], "mouse")



