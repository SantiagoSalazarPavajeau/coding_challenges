


class Robot{
    constructor(x,y){
        this.x = new Node(x, new Node(x))
        this.y = new Node(y, new Node(y))
        this.coordinates = [this.x, this.y]
        this.lastMove = 0
    }

    printCurrCoord(){
        let x = this.coordinates[0].value
        let y = this.coordinates[1].value
        return [x,y]
    }

    printLastCoord(){
        let x = this.coordinates[0].next.value
        let y = this.coordinates[1].next.value
        return [x,y]
    }

    moveX(num){
        this.lastMove = num
        let val = this.coordinates[0].value
        this.moveY(0)
        this.coordinates[0].value += num
        this.coordinates[0].next.value = val

        // return this.printCurrCoord()
    }

    moveY(num){
        this.lastMove = num
        this.moveX(0)
        let val = this.coordinates[1].value

        this.coordinates[1].value += num

        this.coordinates[1].next.value = val

        // return this.printCurrCoord()
    }

    printLastMove(){

        // let xlastMove = this.x.value - this.x.next.value;
        // let ylastMove = this.y.value - this.y.next.value;

        // if(this.lastMove > 0) console.log(`x ${this.lastMove}`)
        // if(lastMove > 0) console.log(`y ${ylastMove}`)

        return `x ${this.lastMove}`;
    }
}

class Node{
    constructor(value, next){
        this.value = value
        this.next = next
    }
}



let rob = new Robot(2,1)


console.log(rob.printCurrCoord())
console.log(rob.moveX(1))
console.log(rob.printLastMove())
console.log(rob.printCurrCoord())
console.log(rob.moveY(1))
console.log(rob.printLastCoord())
console.log(rob.moveX(2))
console.log(rob.printLastMove())
console.log(rob.printCurrCoord())
console.log(rob.moveY(0))
console.log(rob.printLastCoord())