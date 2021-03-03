// [1,2,3,4,5], 2
// [1,2,3,5]

var removeNthFromEnd = function(head, n) {
    
    // one pass
    let result = new ListNode()
    result.next = head
    
    let node1 = result
    let node2 = result
    
    for(let i = 1; i<=n +1; i++){
        node1 = node1.next
    }
    
    while(node1){
        node1 = node1.next 
        node2 = node2.next // this stops before node 2 is done traversing all the list
    }
    node2.next = node2.next.next
    
    return result.next
    
// two pass
//     let totalPosition = 1
//     let result = new ListNode()
    
//     result.next = head
    
//     let node = head
    
//     while(node){
        
//         node = node.next
        
//         totalPosition++
//     }
    
//     let resultPosition = totalPosition - n
//     let current = 1
    
//     node = result
    
//     while(node.next){

//         if(resultPosition === current){
            
//             node.next = node.next.next
//             break
            
//         }else{
            
//             node = node.next
            
//         }
//         current++
//     }
    
//     return result.next
    
    
};