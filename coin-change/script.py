

# bottom up (iterative)
def coin_change_b(coins, target):
    dp_how_many_coins = [float("inf")] * (target + 1)
    dp_how_many_coins[0] = 0

    for coin in coins:
        for i in range(coin, target +1):
            dp_how_many_coins[i] =  min(dp_how_many_coins[i], dp_how_many_coins[i - coin] + 1)
    
    if dp_how_many_coins[target] != float("inf"):
        return dp_how_many_coins[target]
    else:
        return -1
    
# top down (recursive)
def coin_change_t(coins, target):
    memo = {}

    def dp_min_coins(target):
        if target in memo: return memo[target]
        
        if target == 0: return 0
        
        if target < 0: return -1
    
        min_coins = float("inf")
        for coin in coins:
            result = dp_min_coins(target-coin)
            if result >= 0 and result < min_coins:
                min_coins = result + 1

        if min_coins != float('inf'):
            memo[target] = min_coins
        else:
            return -1
        
        return memo[target]
    return dp_min_coins(target)

coins=[1,3,5]
target=11

print(coin_change_b(coins,target))
print(coin_change_t(coins,target))
