
class ListNode:
    def __init__(self, val=0,next=None):
        self.val = val  # Store the data
        self.next = next  # Initialize the next pointer to None

def remove_nth_node_from_end(head, n):
    linked_list = ListNode(0, head)
    # two pointer technique
    start = end = linked_list
    
    # move the end pointer to n
    for i in range(n):
        # print(end.val)
        # print(n)
        end = end.next 

    # move the start and end pointer until end reaches last node
    # start is now one spot before n
    while end.next:
        # print(start.val)
        # print(end.val)
        start = start.next # 
        end = end.next # Nonde

    # print(end)
    # skip n
    start.next = start.next.next
    
    # while linked_list.next:
    #     print(linked_list.next.val)
    #     linked_list = linked_list.next
    return linked_list.next

five = ListNode(5)
four = ListNode(4, five)
three = ListNode(3, four)
two = ListNode(2, three)
one= ListNode(1, two)

print(remove_nth_node_from_end(one, 1))