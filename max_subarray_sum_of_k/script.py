def max_subarray_sum_of_k(array, k):
    max_sum = float("-inf")
    current_sum = 0
    for i in range(len(array)):
        current_sum += array[i]

        if i >= k - 1:
            max_sum = max(max_sum, current_sum)
            current_sum -= array[i - (k-1)]
        
    return max_sum

array=[4,2,1,7,8,1,2,8,1,0]
k = 3

print(max_subarray_sum_of_k(array, k))
