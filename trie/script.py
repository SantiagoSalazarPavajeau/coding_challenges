import pdb
class TrieNode:
    def __init__(self):
        self.children = {}
        self.end = False

class Trie:
    def __init__(self):
        self.root = TrieNode()

    def add(self,string: str):
        current = self.root

        for char in string:
            if char not in current.children:
                current.children[char] = TrieNode()
            current = current.children[char]
        current.end = True
    
    def search(self,string: str) -> bool:
        current = self.root

        for char in string:
            # pdb.set_trace()
            if char not in current.children:
                return False
            current = current.children[char]
        return current.end
    
test_trie = Trie()
print(test_trie.add("first"))
print(test_trie.search("first"))
print(test_trie.search("second"))
