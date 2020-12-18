// return the values of the tree collected by level in an array for each level
// reverse the 



const levelOrderBottom =  ( root) => {
    if(root === null) return []
    let data = {}    
    return savedataObject(root, 0, data).reverse()
}


const savedataObject = (root, level, dataObject) => {
    
    
    if(root === null){
        return []
    }

    if(dataObject[level] === undefined){
        dataObject[level] = [root.val]
    }else{
        dataObject[level].push(root.val)
    }
    
    if(root !== null){
        savedataObject(root.left, level+1,dataObject)
        savedataObject(root.right, level+1,dataObject)

    } 
   
    return Object.values(dataObject)
}