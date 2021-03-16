var reverseKGroup = function(head, k) { // O(n) time O(1) space
    
    let remaining = 0
    
    let curr = head

    while(curr){ // count total length
        remaining++
        curr = curr.next
    }
    
    let result = new ListNode(0)

    result.next = head
    
    let reverseStart = result, reverseEnd = head
    // [0,1,2,3]                  [1,2,3]
    while(remaining >= k){ // only reverse if there are enough remaining for k

        for(let i = 1; i < k; i++){ // reverse
            let current = reverseEnd.next.next // store third two swap first and second
            console.log(current)
            reverseEnd.next.next = reverseStart.next // swap third with first
            reverseStart.next = reverseEnd.next // swap first with second
            reverseEnd.next = current // set second to third
        }
        
        remaining -= k // keep track of nodes that are left to reverse
        reverseStart = reverseEnd // set first to second
        reverseEnd = reverseEnd.next // set second to third
    }
    return result.next
}