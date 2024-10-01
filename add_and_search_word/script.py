class TrieNode:
    def __init__(self):
        self.children = {}
        self.end_of_word = False

class WordDictionary:
    def __init__(self):
        self.root = TrieNode()

    def add_word(self, word):
        node = self.root
        for char in word:
            if char not in node.children:
                node.children[char] = TrieNode()
            node = node.children[char]
        node.end_of_word = True
    
    def search(self, word):
        def search_in_node(word, node):
            for i, char in enumerate(word):
                if char == '.':
                    for child in node.children.values():
                        # recursively search next character in word
                        if search_in_node(word[i + 1:], child):
                            return True
                    return False
                else:
                    if char not in node.children:
                        return False
                    node = node.children[char]
            return node.end_of_word
            
        return search_in_node(word, self.root)

wd = WordDictionary()
wd.add_word("a")
wd.add_word("a")
print(wd.search("."))  # True
print(wd.search("a"))  # True
print(wd.search("aa")) # False
print(wd.search("a"))  # True
print(wd.search(".a")) # False
print(wd.search("a.")) # False


