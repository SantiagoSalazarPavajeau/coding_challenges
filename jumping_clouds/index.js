//https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup
let jumpingClouds = (clouds) => {
    let jumps = 0
    for(const i =0; i < clouds.length; i++){
        if(clouds[i] === 0){
            jumps+=1
        }else if (clouds[i] === 1){
            jumps+=0
        }
    }
}

jumpingClouds([0,1,0,0,0,1,0])