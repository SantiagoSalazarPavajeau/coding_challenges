const flatten = (array) => {
    let flatArray = []
    for( element of array){
        if (element instanceof Array){ // if the element is an array
            flatArray = flatArray.concat(flatten(element)) // concat the array returned recursively from flatten
        } else{
            flatArray.push(element) // on recursion this will flatten by pushing elements that are not arrays and actual elements as we iterate
        }
    }
    return flatArray;
}