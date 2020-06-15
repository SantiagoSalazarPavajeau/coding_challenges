const steps = 8
const path = "DDUUDDUU"

const countingValleys = (steps, path) => {
    const hike = path.split("")
    let elevation = 0
    let valleys = 0
    for(let i = 0; i < steps; i++){
        if(hike[i] === "U"){
            elevation++
        }else if(hike[i] === "D"){
            if(elevation === 0){
                valleys++
            }
            elevation--
        }
    }
    return valleys;
}

console.log(countingValleys(steps, path))