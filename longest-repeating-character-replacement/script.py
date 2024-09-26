def characterReplacement(s: str, k: int) -> int:
    # use dictionary and map each character in string to a key
    count = {}
    max_count = 0
    left = 0
    result = 0

    for right in range(len(s)):
        count[s[right]] = count.get(s[right], 0) + 1
        max_count = max(max_count, count[s[right]])

        while (right - left + 1) - max_count > k:
            count[s[left]] -= 1
            left += 1

        result = max(result, right - left + 1)

    return result

def characterReplacement(s: str, k: int) -> int:
    # use a list and map the ascii code of 26 characters in alphabet
    count = [0] * 26
    max_count = 0
    max_len = 0
    left = 0
    
    for right in range(len(s)):
        count[ord(s[right]) - ord('A')] += 1
        max_count = max(max_count, count[ord(s[right]) - ord('A')])
        
        if (right - left + 1) - max_count > k:
            count[ord(s[left]) - ord('A')] -= 1
            left += 1
        
        max_len = max(max_len, right - left + 1)
    
    return max_len
