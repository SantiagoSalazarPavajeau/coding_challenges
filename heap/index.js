// max binary heap: 
// a binary tree from highest to lowest
// right and left heaps have to filled before moving to next level
// no ordering between children
// only rule is that children are smaller than parent

class MinBinaryHeap{
    constructor(){
        this.heapArray = []
    }

    getTop(){
        return this.heapArray[0]
    }

    insertElement(newElement){
        // let newElement = new Node(element, element.priority)
        this.heapArray.push(newElement)

        let newElementId = this.heapArray.length - 1 

        while(newElementId > 0){ // while this id is still in the bounds of the heap array
            let newElementParentId = Math.floor((newElementId -1) /2)
            let newElementParent = this.heapArray[newElementParentId]

            if(newElementParent > newElement){
                this.swapHelper(newElementParentId, newElementId) // swap elements (found by id on this.heapArray)
                newElementId = newElementParentId // swap ids in this while loop scope
                // console.log(this.heapArray)
            }else{
                break
            }
        }
    }

    getTopElementAndReorder(){
        let topElement = this.heapArray[0]

        if(this.heapArray.length < 1) return null

        this.heapArray[0] = this.heapArray[this.heapArray.length - 1]
        this.heapArray.pop()

        this.reorderHelper()

        return topElement
    }

    reorderHelper(){
        let parentId = 0
        let leftLeafId = (parentId * 2) + 1
        let rightLeafId =  (parentId * 2) +2
        let leftLeaf = this.heapArray[leftLeafId]
        let rightLeaf = this.heapArray[rightLeafId]
        let parent = this.heapArray[parentId]

        while(!!leftLeaf && !!rightLeaf || !!leftLeaf){ //while both leaves exist or only the left leaf


            let minLeaf = Math.min(leftLeaf, rightLeaf)
            if( minLeaf < parent){ // if either one of the two leaves is less than parent swapHelper

                if(minLeaf === leftLeaf){
                    this.swapHelper(parentId, leftLeafId) // swapHelper values
                    parentId = leftLeafId // swap ids to move on down the heap
                }

                if(minLeaf === rightLeaf) {
                    this.swapHelper(parentId,rightLeafId)
                    parentId = rightLeafId
                }
            } else break

            leftLeafId = (parentId * 2) + 1
            rightLeafId =  (parentId * 2 ) + 2

            leftLeaf = this.heapArray[leftLeafId]
            rightLeaf = this.heapArray[rightLeafId]
            parent = this.heapArray[parentId]
        }
    }

    swapHelper(parentId, leafId){
        [this.heapArray[parentId], this.heapArray[leafId]] = [this.heapArray[leafId], this.heapArray[parentId]]
    }
}


// class Node {
//     constructor(val, priority){
//         this.val = val;
//         this.priority = priority;
//     }
// }


const priorities = [1,2,3,4,5]
//                  0 1 2 3 4 
const element = 0

const heap = new MinBinaryHeap(priorities)

heap.insertElement(5)
console.log(heap.heapArray)
heap.insertElement(1)
console.log(heap.heapArray)

heap.insertElement(4)
console.log(heap.heapArray)

heap.insertElement(2)
console.log(heap.heapArray)

heap.insertElement(3)
console.log(heap.heapArray)

heap.insertElement(1)
console.log(heap.heapArray)




// heap.insertElement(element)

console.log(heap.heapArray)

console.log(heap.getTopElementAndReorder())
console.log(heap.heapArray)

console.log(heap.getTopElementAndReorder())
console.log(heap.heapArray)

console.log(heap.getTopElementAndReorder())
console.log(heap.heapArray)

console.log(heap.getTopElementAndReorder())
console.log(heap.heapArray)

console.log(heap.getTopElementAndReorder())
console.log(heap.heapArray)

console.log(heap.getTopElementAndReorder())
console.log(heap.heapArray)

console.log(heap.getTopElementAndReorder())
console.log(heap.heapArray)


