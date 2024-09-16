#1 Dynamic programming problem

# Top down memoization with recursion
def climbStairs(n: int) -> int:
    memo = {}
    
    def climb(n):
        if n in memo:
            return memo[n]
        if n <= 2:
            return n
        memo[n] = climb(n - 1) + climb(n - 2)
        return memo[n]
    
    return climb(n)

#bottom up tabulation 
def climbStairs(n: int) -> int:
    if n <= 2:
        return n
    dp = [0] * (n + 1)
    dp[1], dp[2] = 1, 2
    for i in range (3, n + 1):
        dp[i] = dp[i - 1] + dp[i - 2]
    return dp[n]