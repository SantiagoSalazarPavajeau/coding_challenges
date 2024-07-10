


function solution(S) {

    let str = Math.abs(N).toString()
    let strNums = []

    for(let i = 0; i < str.length; i++){
        let num = ''
        num += str.slice(0,i)
        num += '5'
        num += str.slice(i)
        strNums.push(parseInt(num))
    }
    strNums.sort((a,b) => b-a)
    if(N < 0 ){
        console.log(strNums[0] * -1)
        return strNums[0] * -1
    }

    return strNums[0]


    // let substrings = new Set()

    // for(let i = 0; i<S.length; i++){
    //     for(let j = i+1; j< S.length+1;j++){
    //         let substring = ''
    //         substring += S.slice(i,j)
    //         substrings.add(substring)
    //     }
    // }

    // let balancedSS = []
    // for(let i = 0; i<substrings.length; i++){
    //     let ss = substrings[i]
    //     for(let j = i+1; j<ss.length;j++){
    //         for(let k =0; k<ss.length;k++){
    //         if (ss.charCodeAt(i) - ss.charCodeAt(j) === 32){

    //             balancedSS.push(ss)

    //         }
    //         }
    //     }
    // }

    // console.log(substrings)
    // balancedSS.sort((a,b) => a.length - b.length)

    // return balancedSS[0]
}

solution(number)