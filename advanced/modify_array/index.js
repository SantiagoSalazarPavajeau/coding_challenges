class MinBinaryHeap{
    constructor(){
        this.heapArray = []
    }

    getTop(){
        if(this.heapArray !== 0) return this.heapArray[0]
        return null
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

    isEmpty(){
        if(this.heapArray.length === 0){
            return true
        }
        return false
    }
}

class MaxBinaryHeap{
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

            if(newElementParent < newElement){
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


            let maxLeaf = Math.max(leftLeaf, rightLeaf)
            if( maxLeaf > parent){ // if either one of the two leaves is less than parent swapHelper

                if(maxLeaf === leftLeaf){
                    this.swapHelper(parentId, leftLeafId) // swapHelper values
                    parentId = leftLeafId // swap ids to move on down the heap
                }

                if(maxLeaf === rightLeaf) {
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

    isEmpty(){
        if(this.heapArray.length === 0){
            return true
        }
        return false
    }
}

class Node {
    constructor(val, priority){
        this.val = val;
        this.priority = priority;
    }
}

const minCost = (numbers) => {
    return Math.min(up(numbers, numbers.length), down(numbers, numbers.length))
}

const down = (numbers, length) => {
    let sum = 0
    let diff = 0

    let minQueue = new MinBinaryHeap()

    for(let i = 0; i < length; i++){
        // console.log(minQueue.getTop())
        if(!minQueue.isEmpty() && minQueue.getTop() <= numbers[i]){
            diff = numbers[i] - minQueue.getTop()
            sum += diff
            minQueue.getTopElementAndReorder()
            minQueue.insertElement(numbers[i])
        }
        minQueue.insertElement(numbers[i])
    }
    return sum
}

const up = (numbers, length) => {
    let sum = 0
    let diff = 0

    let maxQueue = new MaxBinaryHeap()

    for(let i = 0; i< length; i++){
        if(!maxQueue.isEmpty() && maxQueue.getTop() >= numbers[i]){
            diff = maxQueue.getTop() - numbers[i]
            sum += diff
            maxQueue.getTopElementAndReorder()
            maxQueue.insertElement(numbers[i])
        }
        maxQueue.insertElement(numbers[i])
    }
    return sum
}

const nums1 = [0, 1, 2, 5, 6, 5, 7]
const nums2 = [9847, 3752, 5621, 7012, 1986, 3090, 1383, 6257, 9501, 7004, 6181, 9387, 9137, 9305, 7795, 9310,
    3904, 8328, 6656, 8123, 1796, 2754, 4372, 5200, 3893, 8568, 4436, 3973, 8498, 1879, 2731, 4651, 4388,
    453, 2465, 2669, 6384, 819, 8565, 1952, 7219, 4362, 3012, 9380, 2645, 4800, 2945, 5778, 1993, 1170,
    1356, 8557, 1497, 8921, 670, 5155, 9115, 1095, 9400, 9451, 9344, 4393, 4201, 8167, 8129, 2004, 8839,
    1457, 7682, 1881, 9266, 6366, 9889, 242, 5318, 5248, 3670, 7381, 6567, 2317, 2162, 6670, 5876, 1179,
    2482, 9270, 4326, 4166, 6122, 2016, 3008, 5349, 1723, 5816, 4030]
console.log(minCost(nums2))

