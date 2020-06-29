sherlockAndAnagrams("papa")

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
    
    console.log('Lets count the anagrams: ...')
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
    // iterating over the substrings array
    const currentElement = substrings[currentIndex]
    console.log(`Now the current element is: ${currentElement}`)

    // slicing all the elements after the current element
    const restOfElements = substrings.slice(currentIndex + 1)
    console.log(`The elements for comparison are: ${restOfElements}`)

    let counter = 0
    // An O[n^2] complexity loop
    // comparing the current element to the rest of the elements
    for (let i = 0; i < restOfElements.length; i++) {
      console.log(`Checking if the strings '${currentElement}' and '${restOfElements[i]}' are anagrams`)

      if (currentElement.length === restOfElements[i].length && isAnagram(currentElement, restOfElements[i])) {
        console.log(`\t ${currentElement} is an anagram of ${restOfElements[i]}`)
        counter++
        console.log(`\tFor a total of ${counter} anagrams.`)
      }
    }
  
   return counter
  }

  function isAnagram(str1, str2) {
    const hist = {}
    
    for (let i = 0; i < str1.length; i++) {
      const char = str1[i]
      // console.log(`${char}`)
      if (hist[char]) {
        hist[char]++
        console.log(`Counting ${hist[char]} '${char}'`)
      } else {
        hist[char] = 1
        console.log(`There is ${hist[char]}`)
      }
    }
    console.log(`\t ${hist} checked the current element`)
    for (let j = 0; j < str2.length; j++) {
      const char = str2[j]
      console.log(`${char}`)
      if (hist[char]) {
        hist[char]--
        console.log(`${hist[char]}`)
      } else {
        return false
      }
    }
    console.log(`\t ${hist} checked with the other element`)
    console.log(`\t ${str1} and ${str2} are anagrams.`)
    return true
  }
  
  