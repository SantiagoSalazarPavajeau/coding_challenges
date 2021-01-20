 function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}


var removeElements = function(head, val) {
    
    let list = new ListNode()
    
    list.next = head
    
    head = list 
    // add an empty space to the start of the linked list
    
    while(list.next !== null){
        
        if(list.next.val === val ){
            list.next = list.next.next
            // skip list.next
        }else{
            list = list.next
        }
    }
        
    return head.next
};

console.log(removeElements([1,2,6,3,4,5,6], 6))