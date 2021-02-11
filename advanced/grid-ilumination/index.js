


function checkIllumination(N, lamps, queries) {
    
    const adj = [[1,1],[1,0],[0,1],[-1,-1],[-1,0],[0,-1],[0,0], [1,-1],[-1,1]]

    const result = []
    
    let ilum = {} // contains all iluminated hor,ver and diag fields by pair
    let lampsHM = {} // contains all lamps in a map
    
    for(let i = 0; i< lamps.length; i++){
        let xL = lamps[i][0]
        let yL = lamps[i][1]
        
        lampsHM[`[${xL}, ${yL}]`] = 1

        for(let j = 1; j<=N;j++){
            ilum[`[${xL}, ${j}]`] = 1
            ilum[`[${j}, ${yL}]`] = 1
            if(xL +j <= N && yL +j <= N){
                ilum[`[${xL +j}, ${yL + j}]`] = 1
            }
            if(xL - j > 0 && yL - j > 0){
                ilum[`[${xL -j}, ${yL - j}]`] = 1
            }
            if(xL - j > 0 && yL +j <= N){
                ilum[`[${xL -j}, ${yL + j}]`] = 1
            }
            if(xL + j <= N && yL - j > 0){
                ilum[`[${xL +j}, ${yL - j}]`] = 1
            }
        }
    }
    
    
    for(let i = 0; i< queries.length; i++){
    let inspectionOnOff = Object.assign({}, ilum)
    let xQ = queries[i][0]
    let yQ = queries[i][1]
        
        for(let k = 0; k < adj.length; k++){
        
        let xAdj = adj[k][0]
        let yAdj = adj[k][1]
        
            //if the query is adjacent to a lamp turn off all the fields 
            if(lampsHM[`[${xQ + xAdj}, ${yQ + yAdj}]`]
            && inspectionOnOff[`[${xQ + xAdj}, ${yQ + yAdj}]`]) {
                
                inspectionOnOff[`[${xQ+ xAdj}, ${yQ +yAdj}]`] = 0
                // turn off that adjacent iluminated field
            }
        }
        
        if( inspectionOnOff[`[${xQ}, ${yQ}]`] > 0){
            result.push("LIGHT")
        }else{
            result.push("DARK")
        }
        console.log(inspectionOnOff)

    }