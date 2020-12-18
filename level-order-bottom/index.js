// return the values of the tree collected by level in an array for each level
// reverse the 



const levelOrderBottom =  ( root) => {
    if(root === null) return []
    return savedataObject(root, 0).reverse()
}


const savedataObject = (root, level) => {
    let dataObject = {}
    
    if(root === null){
        return []
    }

    if(dataObject[level]){
        if(root.left !== null && root.right !== null){
            dataObject[level] = [...dataObject[level], root.left.val]
            dataObject[level] = [...dataObject[level], root.right.val]
            savedataObject(root.left, level+1)
            savedataObject(root.right, level+1)

        }else{
            if(root.left !== null){
                dataObject[level] = [...dataObject[level], root.left.val]
                savedataObject(root.left, level+1)
            } else if (root.right !== null){
                dataObject[level] = [...dataObject[level], root.right.val]
                savedataObject(root.right, level+1)
            }
        }
    } else {
        dataObject[level] = []
    }
   
    return Object.values(dataObject)
    }