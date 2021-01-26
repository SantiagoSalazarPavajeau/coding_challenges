// reverse a linked list (data structure with .val and .next)

var reverseListIterative = function(head) {
        let reversed = null
        
        while(head !== null){
           let next = head.next
           head.next = reversed
           reversed = head
           head = next
        }
        return reversed

    };


const reverseListRecursive = (head)=>{
    if(head === null) return head
    if(head.next === null) return head
    
    let reversed = reverseList(head.next)
    head.next.next = head
    head.next = null
    return reversed
}