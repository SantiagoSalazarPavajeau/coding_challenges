// return the values of the tree collected by level in an array for each level
// reverse the 



const levelOrderBottom =  ( root) => {
    if(root === null) return []
    let data = {}    // use a object to store level values
    return savedataObject(root, 0, data).reverse()  // reverse at the end
}


const savedataObject = (root, level, dataObject) => {
    
    
    if(root === null){
        return []
    }

    if(dataObject[level] === undefined){ // if key has not been initialized 
        dataObject[level] = [root.val] //create with array with value
    }else{
        dataObject[level].push(root.val) // push the value to levels that already had more values
    }
    
    if(root !== null){
        savedataObject(root.left, level+1,dataObject) // recursion to right and left
        savedataObject(root.right, level+1,dataObject) // return dataObject to continue collection of values

    } 
   
    return Object.values(dataObject) // returns an array containing the values of the object
}