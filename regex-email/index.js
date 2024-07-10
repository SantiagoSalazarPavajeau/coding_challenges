const e1 = 'santi_1234@hackerrank.com'
const e2 = 'san_14@hackerrank.com'
const e3 = 'san@hackerrank.com'
const e4 = 'san324_@hackerrank.com'
const e5 = 'san324@gmail.com'




const vE = (e) => {

    let lRX =  /[a-z]{1,6}_?[0-9]{0,4}@hackerrank\.com$/

    return lRX.test(e)
}

console.log(vE(e1))
console.log(vE(e2))
console.log(vE(e3))
console.log(vE(e4))
console.log(vE(e5))
