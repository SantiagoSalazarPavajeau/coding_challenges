function ListNode(val, next) {
    this.val = val
    this.next = null
}

const addTwoNumbers = (l1, l2) => {
    // create a new linkedlist for the result
    // by creating a new node (head)
    // set to zero to add numbers
    let currentNode = new ListNode(0)
    // create a reference to the new head to return at the end
    let headResult = currentNode

    // new nodes value are either:
    // *the sum of the two nodes (sum < 10)
    // *the sum witout carry (sum > 9)
    // *the sum plus the carry from last node sum (sum < 10)
    // *only the carry from last node sum ( new tail)

    let carry = 0; 

    // traverse the lists
    // with an OR to traverse simultaneously
    while( l1 || l2 ){
        let sum = carry;
        
        if(l1 && l2){
            sum += l1.val + l2.val
            l1 = l1.next
            l2 = l2.next
        }else if (l1){
            sum += l1.val
            l1 = l1.next
        } else if(l2){
            sum += l2.val
            l2 = l2.next
        }
        
        carry = 0
        
        if(sum > 9){ 
            carry = 1
            sum = sum - 10 
        }
        
        currentNode.val += sum 
        
        if(l1 || l2){
            currentNode.next = new ListNode(0)
            currentNode = currentNode.next
        }
        
    }
    
    if(carry > 0){
        currentNode.next = new ListNode(carry)
    }

    return headResult 
}