

const swapPairs = (head) => {
    
    if(!head) return head
    if(!head.next) return head
    
    let result = new ListNode()
    
    result.next = head // assign head to the result LL that will be modified
    
    let node = result // set a current node variable to traverse the LL
    
    while(node.next && node.next.next){
        
        // use two 'pointer nodes'
        let i = node.next
        let j = node.next.next
        
        // [node,1,2,3,4]
        
        i.next = j.next //set i.next to 3
        
        node.next = j // set first element to 2
        
        node.next.next = i // set second element to 1
        
        node = node.next.next //move two nodes forward
        
    }
    
    return  result.next
    
};