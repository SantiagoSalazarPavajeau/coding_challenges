// Create some methods to manipulate a stack
// two arrays are given
// one with functions
// one with values for each corresponding function
// ["MinStack","push","push","push","getMin","pop","top","getMin"]
// [[],[-2],[0],[-3],[],[],[],[]]

/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stack = [...this.stack, x] // spead operator push
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if(this.stack.length > 0){
        // console.log(this.stack.slice(0,-1))
        this.stack = this.stack.slice(0,-1) // slice last element and set to this.stack
        // console.log(this.stack)
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    if(this.stack.length > 0){
        return this.stack[this.stack.length - 1] // return last element
    }
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    if(this.stack.length > 0){
        let sorted = [...this.stack].sort((a,b) => a - b) // sort without modifying this.stack by using sprad operator
        // console.log(this.stack, sorted) 
        return sorted[0]
    }

};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */