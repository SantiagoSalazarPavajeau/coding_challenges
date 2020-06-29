sherlockAndAnagrams("pap")

function sherlockAndAnagrams(string) {
    console.log(`Checking for duplicate characters in the string "${string}": ...`)
    const duplicatesCount = string.split('').filter((char, index) => string.indexOf(char) !== index).length
    
  
    if (!duplicatesCount) {
        console.log('There are no duplicate characters. So no anagrams are posible.')
        return 0}
    
    console.log(`The duplicate characters are: ${string.split('').filter((char, index) => string.indexOf(char) !== index)}`)
    console.log(`The total number of duplicate characters is: ${duplicatesCount}. So there can be anagrams, lets create the substrings.`)
    
    let anagramsCount = 0
    console.log('Lets create some Substrings: ...')
    const arr = createSubstrings(string)
    
    console.log('Lets find the anagrams by comparing substrings: ...')
    for (let i = 0; i < arr.length; i++) {
      anagramsCount += countAnagrams(i, arr)
      console.log(`Total anagrams:`)
      console.log(anagramsCount)
    }
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
    // iterating over the substrings array
    const currentElement = substrings[currentIndex]
    console.log(`countAnagrams: Now the current element (substring) is: ${currentElement}`)

    // slicing all the elements after the current element
    const restOfElements = substrings.slice(currentIndex + 1)
    console.log(`countAnagrams: The elements(substrings) for comparison are: ${restOfElements}`)

    let counter = 0
    // An O[n^2] complexity loop
    // comparing the current element to the rest of the elements
    for (let i = 0; i < restOfElements.length; i++) {
      console.log(`countAnagrams: Checking if the strings '${currentElement}' and '${restOfElements[i]}' are anagrams`)

      if (isAnagram(currentElement, restOfElements[i]) && currentElement.length === restOfElements[i].length) {
        console.log(`\tcountAnagrams: ${currentElement} is an anagram of ${restOfElements[i]}`)
        counter++
        console.log(`\tcountAnagrams: We found ${counter} more anagram.`)
      } else{
        console.log(`countAnagrams: Not an anagram, not same length or matching letters`)
      }
    }
  
   return counter
  }

  function isAnagram(str1, str2) {
    const hist = {}
    console.log(`\tisAnagram: Checking characters in the string '${str1}'`)
    for (let i = 0; i < str1.length; i++) {
      const char = str1[i]
      console.log(`\tisAnagram: Checking character: ${char}`)
      if (hist[char]) {
        hist[char]++
        console.log(`\tisAnagram: Found another '${char}' in ${str1}`)
      } else {
        hist[char] = 1
        console.log(`\tisAnagram: Found '${char}' in ${str1}`)
      }
    }
    console.log(`\tisAnagram: Checking if the characters in the string ${str2} are in the string ${str1}`)

    for (let j = 0; j < str2.length; j++) {
      const char = str2[j]
      console.log(`\tisAnagram: Checking character: ${char}`)
      if (hist[char]) {
        hist[char]--
        console.log(`\tisAnagram: Found '${char}' in '${str2}'`)
      } else {
        console.log(`\tisAnagram: '${char}' not found in '${str1}'`)
        return false
      }
    }
    console.log(`\t isAnagram: '${str1}' and '${str2}' are anagrams.`)
    return true
  }
  
  