

def longest_palindrome_substring(string:str) -> str:
    length =  len(string)
    if length == 0:
        return ""
    
    dp = [[False] * length for element in range(length)]
    start, max_length = 0,1

    for i in range(length):
        dp[i][i] = True

    for i in range(length -1):
        if string[i] == string[i+1]:
            dp[i][i+1] = True
            start = i
            max_length = 2

    for substring_size in range(3,  length+1):
        for i in range(length - substring_size + 1):
            j = i + substring_size - 1
            if string[i] == string[j] and dp[i +1][j-1]:
                dp[i][j] = True
                start = i
                max_length = substring_size
    print(dp)

    return string[start:start+max_length]

string= "babad"

print(longest_palindrome_substring(string))
