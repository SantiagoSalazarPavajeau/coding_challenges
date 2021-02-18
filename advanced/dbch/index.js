

const dbCh = (d, k) => {

    let a = []
    for(let i =0; i< k.length;i++){ // max 7*7
        let o = {}
        for(let j = 0; j < k[i].length; j++){
            if(!o[k[i][j]]){
                o[k[i][j]] = true
            }
        }
        a.push(o)
    }

    let result = new Array(k.length)

    result.fill(0)

    console.log(result)

    for(let i = 0; i < k.length; i++){
        let present = true

        for(let j=0; j< d.length; j++){
            // console.log(a[i][d[j]])
            for(let z=0; z< d[j].length; z++){

                console.log(!a[i][ d[j][z] ], j)

                if(!a[i][ d[j][z] ]){ 
                    // does array (a) of objects with keypads (a[i])

                    present = false
                }

            }
            present ? result[i]++ : null
        }


    }
}

