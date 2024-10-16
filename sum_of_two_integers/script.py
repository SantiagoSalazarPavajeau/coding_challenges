def sum_of_two_integers(a, b):
    # while there are carries left
    i =0 
    while b != 0:
        print(i)
        i+=1
        #find bits where both numbers have 1
        # so these bits can be carried over to the addition
        # which addition would end up being 2
        carry = a & b

        #sum without carry
        a = a ^ b

        # move carry to the right
        b = carry << 1
        
    return a

print(sum_of_two_integers(5,3))