import pdb
nums = [1,1,1,2,2,3]

k = 2


def top_k_frequent_elements(nums, k):
    count = {

    }
    frequency = [[] for i in range(len(nums)+1)]

    for num in nums:
        count[num] = 1 + count.get(num, 0)
    
    for num , amount in count.items():
        frequency[amount].append(num)
    
    result = []
    for i in range(len(frequency) - 1, 0,-1):
        for num in frequency[i]:
            result.append(num)
            if len(result) == k:
                pdb.set_trace()
                return result
            

print(top_k_frequent_elements(nums, k))