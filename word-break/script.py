

from collections import deque


def word_break_bfs(word, dictionary):
    visited = set()
    the_dictionary = set(dictionary)
    the_queue = deque([0])

    while(len(the_queue)):
        current = the_queue.popleft()

        if current not in visited:
            for i in range(current+1,len(word)+1):
                if word[current:i] in the_dictionary:
                    if i == len(word):
                        return True
                    the_queue.append(i)
            visited.add(current)
            
    return False

word = "leetcode"

dictionary = ["leet","code"]

print(word_break_bfs(word, dictionary))

word1 = "catsandog"

dictionary1 = ["cats","dog", "sand","and", "cat"]

print(word_break_bfs(word1, dictionary1))