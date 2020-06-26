const createSubstrings = (string) => {
    let outerIndex, innerIndex;
    let substrings = [];
    for(outerIndex =0;outerIndex<string.length;outerIndex++){
        for(innerIndex = outerIndex; innerIndex<string.length +1; innerIndex++){
            substrings.push(string.slice(outerIndex,innerIndex))
        }
    }
    console.log(substrings)
    return substrings;
}

createSubstrings("listen")