// check if linkedlist goes back to an earlier node
// an array of linked list values is given [1,2,3]
// the position of the place where it goes back to an earlier value 1 (cycle)
// -1 for no cycle


var hasCycle = function(head) {
    let seen = []
    
    while(head !== null){
        
        if(seen.includes(head)){ // use includes method of array equivalent of contains to hashset in java
            return true
        }else{
            seen.push(head)
        }
        head = head.next
    }
    
    return false
};