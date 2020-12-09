// are the two trees(p,q) the same?


const isSameTree = (p, q) => {
    console.log(p,q) // p.left = 2  q.left = 2
    
    /// if nodes have a value and are the same it skips all and does recursion again
    
    // if both nodes are null it returns true
    if(p === null && q === null) return true // not null skip 2 ,2
    
    if(p === null || q === null) return false // skip 2 ,2
    
    if(p.val !== q.val) return false // skip 2,2
    
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};