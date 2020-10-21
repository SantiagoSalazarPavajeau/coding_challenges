const invertTree = (tree) => {
    if(tree){ // if the child node exists run the recursion if it doesnt exist don't do anything
        if ( tree.left || tree.right){ // so the child from the recursion exists now see if there are more children
            let temporary = tree.left; // we set the tmp to the first value that we want to replace/overwrite
            tree.left = tree.right; // replace right away
            tree.right = temporary; // replace secondary value with temporary
            invertTree(tree.left); // do the same process on child nodes
            invertTree(tree.right);
        }
    }
}