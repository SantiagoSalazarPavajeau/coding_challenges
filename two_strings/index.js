

function characterMatch(string1, string2){
    // stringArray1.filter((character)=>{})
    const stringArray1 = string1.split("")
    const stringArray2 = string2.split("")
    let result;
    let breakCheck;
    for(let indexArray1 = 0; indexArray1<stringArray1.length; indexArray1++){
        for(let indexArray2 = 0;indexArray2<stringArray2.length; indexArray2++){
            if(stringArray1[indexArray1] === stringArray2[indexArray2]){
                // console.log(`${string1[indexArray1]}, ${string2[indexArray2]} YES`)
                result = "YES";
                breakCheck = true;
                break;
            }else{
                // console.log(`${string1[indexArray1]}, ${string2[indexArray2]} NO`)
                result = "NO";
            }
        }
        if (breakCheck) break;
    }
    console.log(result)
    return result
}

characterMatch("aardvark", "apple")