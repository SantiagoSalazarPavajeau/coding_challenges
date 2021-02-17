class Trie {

    constructor(){
        this.root = new TrieNode()
    }

    add(string){
        let currNode = this.root
        let charPos;
        for(let i = 0; i < string.length; i++){

            charPos = string.charCodeAt(i) - 'a'.charCodeAt(0)

            if(currNode.array[charPos] === null){
                currNode.array[charPos] = new TrieNode()
            }

            currNode = currNode.array[charPos]

        }
        currNode.end = true
    }

    search(string){
        let currNode = this.root
        let charPos;
        for(let i = 0; i < string.length; i++){
            charPos = string.charCodeAt(i) - 'a'.charCodeAt(0)
            if(currNode.array[currNode] === null) return false

            currNode = currNode.array[charPos]
        }
        if(currNode !== null && currNode.end){
            return true
        }
        return false

    }


}


class TrieNode{
    constructor(){
        this.array = new Array(alphabet).fill(null)
        this.end = false
    }
}

const alphabet = 26

const trie = new Trie()


console.log(trie)



// console.log(trie.search('word'))

// console.log(trie.search('work'))





const combinations = (string) => {
    let result = []

    let array = []
    let set = new Set([])

    combine(result, array, set, string)

    return result
}

const combine = (result, arr, set , string) => {

    if(set.size ===  string.length){
        return result.push(arr.join(''))
    }


    for( let i = 0; i< string.length; i++){
        if(!set.has(string[i])){
            set.add(string[i])
            arr.push(string[i])

            combine(result, arr, set, string)

            set.delete(arr[arr.length - 1])
            arr.pop()
        }

    }
}

// console.log(combinations('abc'))


// console.log(wordsArr)