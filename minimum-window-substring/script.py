from collections import defaultdict
import pdb

A = "ADOBECODEBANC" 
B = "ABC"

def minimum_window_substring(A, B):
    map = {}
    for letter in B:
        if letter not in map:
            map[letter] = 1
        else:
            map[letter] += 1
    
    left = 0
    right = 0
    length = float("inf")
    count = len(map)
    min_window = ""

    while(right < len(A)):
        r_letter = A[right]
        # pdb.set_trace()
        if r_letter in map:
            map[r_letter] = map[r_letter] - 1
            if map[r_letter] == 0: count -= 1
        right += 1

        while(count == 0):
            if(right-left < length):
                length = right - left
                min_window = A[left:right]
            
            l_letter = A[left]
            if l_letter in map:
                map[l_letter] = map[l_letter] +1
                if map[l_letter] > 0: count += 1
            left += 1
        
    return min_window


print(minimum_window_substring(A, B))