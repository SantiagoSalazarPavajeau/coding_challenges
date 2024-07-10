
const letterCombinations = (digits) => {
    if(digits.length === 0) return []
    let result = new LinkedList()
    result.push('')
    let mapping = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    }
    
    // console.log(result.peek().val)

    for(let i = 0; i < digits.length; i++){
        // let num = parseInt(digits[i])
        
        while(result.peek().val.length === i){

            let last = result.remove().val

            for(let char of mapping[digits[i]]){

                result.push(last+char)
                
            }
            // console.log(result.peek().val)

        }
        
        // console.log(num)
        
        
    }
    // console.log(result)
    return result.toArray()
};

console.log(letterCombinations('23'))


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

    peek(){
        if(!this.head) return null
        return this.head
    }

    remove(){
        if(!this.head) return null
        this.length--
        let head = this.head
        this.head = head.next
        return head
    }

    toArray(){
        let node = this.head
        let result = []
        while(node){
            result.push(node.val)
            node = node.next
        }
        return result
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