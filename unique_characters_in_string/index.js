// are all characters in the string unique?
// if there are more than 128 chars is false if using ASCII
// map characters to check if any are accessed again after initialization

const uniqueCharacters = (string) => {
    if(string.length > 128){ // asumming ascii
        return false
    }

    let visited = []
    for(let i = 0; i< string.length; i++){
        let asciiValue = string.charCodeAt(i) 
        // equivalent to str.charAt(i) in Java
        // converts a character into the ascii value 
        // so it can be set as an index of the array
        if(visited[asciiValue]){
            return false
        }
        visited[asciiValue] = true
    }
    return true
}

console.log(uniqueCharacters('node'))