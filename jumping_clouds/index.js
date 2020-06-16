//https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup
jumpingClouds([0, 0, 1, 0, 0, 1, 0])

//currentcloud 0  1  2  3  4  5  6

//clouds.length1  2  3  4  5  6  7 


function jumpingClouds(clouds){
    let currentCloud = 0
    let jumps = 0
    //         4                5
    for(; currentCloud < clouds.length-2; currentCloud+=2){ // the current cloud cant be bigger than the total number of clouds, but Emma cant jump 2 on the penultimate cloud either
        if(clouds[currentCloud+2] === 0){ //if Emma can jump two she jumps two
            jumps+=1
        }else if(clouds[currentCloud+2] === 1){ //if Emma can jump only 1 she does
            jumps+=1
            currentCloud-=1
        }
    }
                                5
    if(currentCloud === clouds.length-2){
        jumps+=1
    }
     //account for the last jump it can be only one jump

    console.log(jumps);
}

