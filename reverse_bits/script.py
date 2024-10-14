def reverse_bits(n):
    result = 0
    for i in range(32):
        result = result << 1
        n_least_significant_bit = n & 1
        result = result | n_least_significant_bit
        n >>= 1

    return result

# n & 1 extract the least significant bit
# << move all bits left ( x 2)
# >> move all bits right ( / 2)
# result | n_least_significant_bit set the least significant bit of result