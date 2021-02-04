// max binary heap: 
// a binary tree from highest to lowest
// right and left heaps have to filled before moving to next level
// no ordering between children
// only rule is that children are smaller than parent

class MinBinaryHeap{
    constructor(heapArray){
        this.heapArray = []
    }

    insertElement(newElement){
        this.heapArray.push(newElement)

        let newElementId = this.heapArray.length - 1 

        while(newElementId > 0){ // while this id is still in the bounds of the heap array
            let newElementParentId = Math.floor((newElementId -1) /2)
            let newElementParent = this.heapArray[newElementParentId]

            if(newElementParent > newElement){
                this.swap(newElementParentId, newElementId) // swap elements (found by id on this.heapArray)
                newElementId = newElementParentId // swap ids in this while loop scope
            }else{
                break
            }
        }
    }

    swap(parentId, leafId){
        [this.heapArray[parentId], this.heapArray[leafId]] = [this.heapArray[leafId], this.heapArray[parentId]]
    }
}


const priorities = [1,1,1,1,2,2,3,4,5,5,5]
//                  0 1 2 3 4 5 6 7 8 9 10
const element = 0

const heap = new MinBinaryHeap(priorities)

heap.insertElement(1)
heap.insertElement(1)
heap.insertElement(1)
heap.insertElement(1)
heap.insertElement(2)
heap.insertElement(2)
heap.insertElement(3)
heap.insertElement(4)
heap.insertElement(5)
heap.insertElement(5)
heap.insertElement(5)

heap.insertElement(element)

console.log(heap.heapArray)
