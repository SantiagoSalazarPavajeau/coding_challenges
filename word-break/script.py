

from collections import deque


def word_break_bfs(word, dictionary):
    visited = set()
    the_dictionary = set(dictionary)
    # queue initialization to [0]
    the_queue = deque([0])
    while(len(the_queue)):
        current = the_queue.popleft()

        if current not in visited:
            for i in range(current+1,len(word)+1):
                # slice in python 
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


def word_break_dynamic_programming(word, dictionary):
    dictionary = set(dictionary)
    word_length =  len(word)

    dp = [False for el in range(word_length+1)]
    dp[0] = True

    for start_char in range(word_length):
        if not dp[start_char]: continue
        for end_char in range(start_char+1, word_length+1):
            if word[start_char:end_char] in dictionary: dp[end_char] = True
    
    return dp[-1]

print(word_break_dynamic_programming(word, dictionary))
print(word_break_dynamic_programming(word1, dictionary1))