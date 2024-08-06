
from collections import defaultdict
import pdb

def group_anagrams(strings):
    res = defaultdict(list)

    for s in strings:
        count = [0] * 26

        for c in s:
                count[ord(c) - ord("a")] += 1
            
        res[tuple(count)].append(s)
        # pdb.set_trace()
    return res.values()
    

strings = ["eat", "tea", "tan", "ate", "nat", "bat"] 
print(group_anagrams(strings))


def group_anagram_a(strings):
    result = defaultdict(list)

    for s in strings:
        result["".join(sorted(s))].append(s)
        
    return result.values()

print(group_anagram_a(strings))