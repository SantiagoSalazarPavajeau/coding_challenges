// a linked list is an array of objects that are linked by the next attribute (nested)

// you are given an object(node) with {value: 1} and that number has to be deleted from a list [1,2]


// linked lists use .next and .val methods because they are made of nodes

// a node is an object/hash 
// with a value property that points to the value of on the list
// 

// a linked list object with a head and node children
// {
//     head: {
//         next: 
//              {val: 1,
//                 next: {
//                    val: 2
//                    next: null  
//                }
//            }
//     }
// }



const linkedList = (node) => {
    node.val =  node.next.val // the value attribute of our node is modified to be the next node, so our node value is deleted
    node.next = node.next.next // the next attribute of out node is set to be the next attribute of the children node so the whole node is modified
}