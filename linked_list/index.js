
function ListNode(val){
    this.val = val
    this.next = null
}

class LinkedList{
    constructor(){
        this.length = 0
        this.head = null
        this.tail = null
    }

    push(val){
        let newNode = new ListNode(val)
        if(!this.head){
            this.head = newNode // head contains all the nodes through .next
            this.tail = newNode
        }else{
            this.tail.next = newNode // move to next from tail
            // tail will always have .next as null
            this.tail = newNode // set new tail
            // newNode has .next as null
            // tail cannot access other nodes only head
            // but tail is connected to the list can be accessed by .tail
            // and also by traversing
        }
        this.length++
        return this
    }

    pop(){

        if(!this.head)return undefined

        let currentNode = this.head
        let previousToCurrentNode;

        while(currentNode.next){ // while we are not in the tail
            // asign  current to previous so we can keep track of the last node
            // move current to next so we keep traversing
            previousToCurrentNode = currentNode // assign current
            currentNode = currentNode.next // change current to next
        }
        // when we find the tail
        // decrease the length
        this.length--
        if (this.length === 0){ // if there are no items left to switch
            this.head = null // set everthing to null
            this.tail = null
        }else{ // switch 
            previousToCurrentNode.next = null
            this.tail = previousToCurrentNode
        }

        return currentNode
    }
}

let list = new LinkedList()

list.push(1)
list.push(2)
list.push(3)
console.log(list)
console.log("pop:",list.pop())
console.log(list)
console.log("pop:",list.pop())
console.log(list)
console.log("pop:",list.pop())
console.log(list)





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