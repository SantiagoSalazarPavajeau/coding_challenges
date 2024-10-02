class TreeNode:
    def __init__(self, root=0,left=None,right=None) -> None:
        self.root = root
        self.left = left
        self.right = right

class Solution:
    def is_valid_binary_search_tree(self, root: TreeNode) -> bool:
        def validate(node, low_limit=float('-inf'), high_limit=float('inf')):
            if not node:
                return True
            if not (low_limit<node.root<high_limit):
                return False
            return (validate(node.left, low_limit,node.root) and validate(node.right, node.root, high_limit))
        return validate(root)
    
tree = TreeNode(2, TreeNode(1), TreeNode(3))
print(Solution().is_valid_binary_search_tree(tree))

tree1 = TreeNode(4, TreeNode(2), TreeNode(3))
print(Solution().is_valid_binary_search_tree(tree1))