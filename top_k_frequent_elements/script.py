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

from collections import Counter
import heapq

def topKFrequent(nums, k):
    # Step 1: Count frequencies
    count = Counter(nums)
    # this creates a dictionary of pairs
    # contains target number (key) and its count(value)

    pdb.set_trace()
    # Step 2: Build a heap of the k most frequent elements
    heap = []

    # count.items returns the key pairs as an array
    for num, freq in count.items():
        heapq.heappush(heap, (freq, num))
        if len(heap) > k:
            # remove the smallest frequency element
            #keep the k largest frequency elements
            heapq.heappop(heap)
    
    # Step 3: Extract elements from the heap
    return [num for freq, num in heap]
