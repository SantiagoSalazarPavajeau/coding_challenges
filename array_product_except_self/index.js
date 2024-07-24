const array_product_except_self = (nums) => {
    let result = []
    // console.log(array)

    let prefix = 1
    for(let i =0; i < nums.length; i++){
        result[i] = prefix
        prefix = prefix * nums[i]
    }
    let postfix = 1
    for(let i = nums.length -1 ;i >= 0; i-- ){
        result[i] = result[i] * postfix
        postfix = postfix * nums[i]
    }
    console.log(result)
    return result
}

array_product_except_self([1,2,3,4])