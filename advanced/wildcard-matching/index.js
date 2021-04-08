// "aa" 
// "a"
// false

// "aa"
// "*"
// true

// "cb"
// "?a"
// false

// "adceb"
// "*a*b"
// true



// "acdcb"
// "a*c?b"
// false

// * matches anything
// ? matches character

const isMatch = (s, p) => {
    let sP = 0, // string pointer
        pP = 0, // pattern pointer
        match = 0,
        starIdx = -1
    while(sP<s.length){
        if(pP<p.length && (p[pP] === '?' || s[sP] === p[pP])){
            sP++
            pP++
        } else if(pP < p.length && p[pP] == '*'){
            starIdx = pP
            match = sP
            pP++
        }else if( starIdx != -1){
            pP = starIdx +1
            match++
            s = match
        }else return false
    }

    while(pP < p.lenght && p[pP] === '*'){
        pP++
    }
    
    return pP === p.length
};