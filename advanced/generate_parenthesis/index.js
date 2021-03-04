function backTrack(result,string,open,close,max){
    if(string.length === max *2){
        result.push(string)
        return
    }
    // console.log(string)
    if(open < max) backTrack(result, string+'(', open +1, close, max)
    
    if(close < open) backTrack(result, string+')', open, close+1, max)
}

var generateParenthesis = function(n) {
    let result = []
    backTrack(result, '', 0,0,n)
    return result
}

//     const dataBrackets = {')': '('}
//     const mappings = '()'
//     let queue = ['']

//     for(let i=0;i<n*2;i++){ // total brackets to combine
        
//         let currQL = queue.length
        
//         while(currQL>0){
            
//             let next = queue.shift()
//             // console.log(next)
//             for(let bracket of mappings){// each bracket
//                 queue.push(next+bracket)
//             } 
//             currQL--
//         }
//     }
//     // console.log(queue)
    
//     let result = []
    
//     for(let string of queue){

//         let stack = []
//         // console.log(string, 1)
//         let valid;
//         for(let i = 0; i< string.length; i++){

//             let bracket = string[i]

//             if(stack !== [] && dataBrackets[bracket]){ 
//                 let lastItem;


//                 if(stack.length !== 0) lastItem = stack.pop()

//                 if(lastItem !== dataBrackets[bracket]){ 

//                     valid = false
//                     break
//                 }

//             } else {
//                 stack.push(bracket) 
//             }

//         }
//             valid ? null : result.push(string)
//     }
//     return result
    
//     for(let brackets of queue){
        
//         let stack = [];
//         let valid = true

//         for(let i = 0; i <brackets.length; i++){
            
//             let bracket = brackets[i]
            
//             if(object[bracket]){
                
//                 let lastItem;
                
//                 if(stack.length !== 0) lastItem = stack.pop()

//                 if(lastItem !== object[bracket]){
//                     valid = false
//                     break
//                 }
//             }else{
//                 stack.push(bracket)
//                 console.log(stack)
//             }
            
//         }
//         valid ? result.push(brackets) : null
//     }
//     return result