/// merge many (k) sorted linked lists

const mergeKLists = (lists) => {
    if(lists.length === 0) return null
    
    let l = lists.length
    while(l !== 1){
        for(let i = 0; i< Math.floor(l/2);i++){ 
            /// Math.floor because JS will return a decimal/float unlike Java with int
            lists[i] = mergeTwoLists(lists[i*2], lists[i*2 +1])
        }
        
        if(l%2 ===1){
            lists[Math.floor(l/2)] = lists[l-1]
        }
        l = Math.floor((l+1)/2)
    }
    return lists[0]
};

const mergeTwoLists = (list1, list2) => {
    let resultNode = new ListNode()

    let tail = resultNode

    while (true){

        if(list1 === null){
            tail.next = list2
            break
        }
        if(list2 === null){
            tail.next = list1
            break
        }

        if(list1.val <= list2.val){
            tail.next = list1
            list1 = list1.next
        }else{
            tail.next = list2
            list2 = list2.next
        }

        tail = tail.next
    }
    return resultNode.next
};