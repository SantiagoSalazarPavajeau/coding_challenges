class TreeNode:
    def __init__(self, root=0, left=None, right=None):
        self.root = root
        self.left = left
        self.right = right


def build_tree(preorder, inorder):
    if not preorder or not inorder:
        return None
    
    root_int = preorder.pop(0)
    root = TreeNode(root_int)

    # inorder nodes are organized 1.left 2.root 3.right
    inorder_root_index =  inorder.index(root_int)

    # build tree to the left of the root
    root.left = build_tree(preorder, inorder[:inorder_root_index])

    # build tree to the right of the root
    root.right = build_tree(preorder, inorder[inorder_root_index + 1:])

    return root

preorder = [3, 9, 20, 15, 7]
inorder = [9, 3, 15, 20, 7]
root = build_tree(preorder, inorder)

# Function to print the tree in inorder (for verification)
def printInorder(node):
    if not node:
        return
    printInorder(node.left)
    print(node.root, end=' ')
    printInorder(node.right)

printInorder(root)