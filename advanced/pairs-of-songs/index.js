const pairsOfSongs = (time)=>{
//     let count = 0;
//     let others = {}
    
//     for(let i = 0; i < time.length; i++){
//         let t = time[i]
//         others[t % 60] = 0
//     }   
//     console.log(others)
    
//     for(let i = 0; i < time.length; i++){
        
//         if(others[( 60 - time[i]  % 60 ) % 60]){
//             count++
//         }

//     }
//     return count

let count= 0
for(let i = 0; i < time.length; i++){
    for(let j = i+1; j < time.length; j++){
        console.log((time[i]+time[j]) % 60)
        if((time[i] + time[j]) % 60 === 0){
            count++
        }
    }
}
return count
}
