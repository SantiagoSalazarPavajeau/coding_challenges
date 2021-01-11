// if two linkedlists have a value that is the same (intersects)
// return that value

var getIntersectionNode = function(headA, headB) {
    let pointerA = headA // create a pointer for scope
    let pointerB; 
    // without assigning to these external variables 
    // the headA linkedlist's nodes do not get visited only headB
    
    while(pointerA !== null){
        
        for(pointerB = headB; pointerB !== null; pointerB = pointerB.next){
            console.log(pointerA,pointerB)
            if(pointerA === pointerB){
                return pointerA
            }
        }
        
        pointerA = pointerA.next
    }  
    return null
};