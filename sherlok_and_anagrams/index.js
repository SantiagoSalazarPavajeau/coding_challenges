sherlockAndAnagrams("listen")

function sherlockAndAnagrams(string) {
    console.log(`Checking for duplicate characters in the string "${string}": ...`)
    const duplicatesCount = string.split('').filter((char, index) => string.indexOf(char) !== index).length
    
  
    if (!duplicatesCount) {
        console.log('There are no duplicate characters. So no anagrams are posible.')
        return 0}
    
    console.log(`The duplicate characters are: ${string.split('').filter((value, index) => string.indexOf(value) !== index)}`)
    console.log(`Total number of duplicate characters${duplicatesCount}`)
    
    let anagramsCount = 0
  
    const arr = createSubstrings(string)
  
    for (let i = 0; i < arr.length; i++) {
      anagramsCount += countAnagrams(i, arr)
    }

    console.log(anagramsCount)
    return anagramsCount
}

function createSubstrings(string){
    let substrings = [];
    console.log('Creating Substrings: ...')
    for(let outerIndex =0;outerIndex<string.length;outerIndex++){
        for(let innerIndex = outerIndex+1; innerIndex<string.length +1; innerIndex++){
            console.log(`Substring: ${string.slice(outerIndex,innerIndex)}`)
            substrings.push(string.slice(outerIndex,innerIndex))
            console.log(`\tThe slice range starts ${outerIndex} and ends in ${innerIndex} loop (does not include last value)`)
        }
    }
    console.log(substrings)
    return substrings;
}

// createSubstrings("listen")

function countAnagrams(currentIndex, substrings) {
    const currentElement = substrings[currentIndex]
    const arrRest = substrings.slice(currentIndex + 1)
    let counter = 0

    for (let i = 0; i < arrRest.length; i++) {
      if (currentElement.length === arrRest[i].length && isAnagram(currentElement, arrRest[i])) {
        counter++
      }
    }
  
   return counter
  }

  function isAnagram(str1, str2) {
    const hist = {}
  
    for (let i = 0; i < str1.length; i++) {
      const char = str1[i]
      if (hist[char]) {
        hist[char]++
      } else {
        hist[char] = 1
      }
    }
  
    for (let j = 0; j < str2.length; j++) {
      const char = str2[j]
      if (hist[char]) {
        hist[char]--
      } else {
        return false
      }
    }
  
    return true
  }
  
  