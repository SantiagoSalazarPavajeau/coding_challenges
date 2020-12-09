const isSymmetric = (root) => {
    return checks(root, root) // send two tree duplicates
};

const checks = (node1, node2) => {
    
    if(node1 === null && node2 === null){ // finished traversing all child nodes
        return true
    } 
    
    if(node1 === null || node2 === null){ // only one leaf is null (not symmetric)
        return false
    }
    // compare node1 right leaf and node2 left leaf (opposite on separate trees)
    const mix1r2l = () => {return checks(node1.right, node2.left)}
    const mix1l2r = () => {return checks(node1.left, node2.right)}
    
    // if oposite nodes are the same
    return (node1.val === node2.val) && mix1r2l() && mix1l2r()
}