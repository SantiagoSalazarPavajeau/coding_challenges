// check if linkedlist goes back to an ealier node
// linked list values are given [1,2,3]
// the position where it cycles back as an index of the array e.g. 1
// no cycle -1


var hasCycle = function(head) {
    let seen = []
    
    while(head !== null){
        
        if(seen.includes(head)){ // equivalent of the constains hashset method in java
            return true
        }else{
            seen.push(head)
        }
        head = head.next
    }
    
    return false
};