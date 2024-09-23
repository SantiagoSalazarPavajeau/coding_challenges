def find_middle(head):
    slow, fast = head, head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
    return slow

def reverse_list(head):
    prev, curr = None, head
    while curr:
        next_temp = curr.next
        curr.next = prev
        prev = curr
        curr = next_temp
    return prev


def merge_lists(l1, l2):
    while l2:
        l1_next, l2_next = l1.next, l2.next
        l1.next = l2
        l2.next = l1_next
        l1 = l1_next
        l2 = l2_next


def reorder_list(head):
    if not head:
        return
    
    # Step 1: Find the middle of the list
    mid = find_middle(head)
    
    # Step 2: Reverse the second half
    second_half = reverse_list(mid.next)
    mid.next = None  # Split the list into two halves
    
    # Step 3: Merge the two halves
    merge_lists(head, second_half)

