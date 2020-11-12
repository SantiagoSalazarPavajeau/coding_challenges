// randomize an array but with class based methods 

// can be through .prototype functions or class JS

class Solution{

    constructor(nums){
        this.array = nums
        this.original = [...nums]
    }

    reset = () => {
        this.array = this.original
        return this.array
    }

    shuffle = () => {
        return this.array.sort((a,b)=> 0.5 - Math.random())
    }

}

const solution = new Solution([1,2,3,4,5])

console.log(solution.shuffle())
console.log(solution.reset())