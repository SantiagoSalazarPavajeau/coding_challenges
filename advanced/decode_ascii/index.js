function decodeString(str){
    console.log(str)
    str = str.split("").reverse().join("").split(32); // split by space
    console.log(str)
    let sentence = []

    for(let i=0; i<str.length; i++){

        let asciiWord = str[i];

        sentence.push(_getword(asciiWord));

    }
    console.log(sentence.join(" "));
};

function _getword(asciiWord){ // ascii numbers representing a word
    let a = "";
    let results = [];
    // console.log(asciiWord.length)
    for(let i=0; i<asciiWord.length; i++){

        a += asciiWord[i]; // each character in number string + keep adding chars 

        if(Number(a)>=65 && Number(a)<=99){ // 65 to 99

            results.push(String.fromCharCode(a));
            a = "";

        }else if(Number(a)>=100 && Number(a)<=122){ // dont overlap with 100 to 122

            results.push(String.fromCharCode(a));
            a = "";

        }
    }
    return results.join("");
} 

decodeString("64101301011794019923111611236112117900179231116112312161150180150189792310140161123511501231019901110130150180180110161101137");
