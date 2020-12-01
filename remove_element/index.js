


const removeElement = (numbers, element) => {
    // return numbers.filter(num => num !== element).length // creates new array
    for(let i = 0; i< numbers.length; i++){
        if(numbers[i] === element){
            numbers.splice(i,1)
            i--
        }
    }
    return numbers
}

console.log(removeElement([3,2,2,3],3))