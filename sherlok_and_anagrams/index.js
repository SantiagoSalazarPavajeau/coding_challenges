const createSubstrings = (string) => {
    let substrings = [];
    for(let outerIndex =0;outerIndex<string.length;outerIndex++){
        for(let innerIndex = outerIndex+1; innerIndex<string.length +1; innerIndex++){
            console.log(string.slice(outerIndex,innerIndex))
            substrings.push(string.slice(outerIndex,innerIndex))
            console.log(`The slice range starts ${outerIndex} and ends in ${innerIndex} loop (does not include last value)`)
        }
    }
    console.log(substrings)
    return substrings;
}

createSubstrings("listen")