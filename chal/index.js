

// loop through every char in string url
// if we find an f
// also look for oo


// find foo => baz
// 

function removeFooFromUrl(string){
    let [domain, keys] = string.split('?') // -> url + keys

    if (substrs.length < 2){
        return string
    }

    // foo=bar&foo=baz

    const keysValsArr = keys.split('&')
    // ['foo=bar','foo=baz']

    const correctKeys = keysValsArr.filter(key => key.startsWith('foo=') )

    if(correctKeys.length > 0){
        return domain + '?' + correctKeys.join('&')
    }

    return domain
}



console.log(removeFooFromUrl('https://www.helloworld.com?foo=bar&foo=baz'))
console.log(removeFooFromUrl('https://www.helloworld.com?foo=bar&a=baz'))
console.log(removeFooFromUrl('https://www.helloworld.com'))
console.log(removeFooFromUrl('https://www.foo.com'))

// **
//  * Remove the literal key `foo` and its associated value from
//  * the query string of a url. Return the url with the literal key
//  * `foo` and its associated value removed, if present. If the literal
//  * key `foo` does not exist in the query string, return the input url
//  * unmodified. All inputs are guaranteed to be well formed. All outputs
//  * must be well formed.
//  *
//  * @param {string} url
//  * @return {string}
//  */

// it('should remove multiple occurrences of the query param foo', () => {
//     expect(removeFooFromUrl('https://www.helloworld.com?foo=bar&foo=baz')).to.equal('https://www.helloworld.com');
//   });

//   it('should remove `foo` but maintain the `?` delimeter if `foo` is first of many query parameters', () => {
//     expect(removeFooFromUrl('https://www.helloworld.com?foo=bar&a=b')).to.equal('https://www.helloworld.com?a=b');
//   });

// it('should return the string unmodified if there are no query params', () => {
//     expect(removeFooFromUrl('https://www.helloworld.com')).to.equal('https://www.helloworld.com');
//   });

//   it('should return the string unmodified if there is a single query param and `foo` is not present', () => {
//     expect(removeFooFromUrl('https://www.helloworld.com?a=b')).to.equal('https://www.helloworld.com?a=b');
//   });

// it('should return the string unmodified if `foo` is present in the sitename', () => {
//     expect(removeFooFromUrl('https://www.foo.com')).to.equal('https://www.foo.com');
//   });

//   it('should return the string unmodified if `foo` is present in the top level domain', () => {
//     expect(removeFooFromUrl('https://www.segment.foo')).to.equal('https://www.segment.foo');
//   });
//   it('should return the string unmodified if `foo` is present in the subdomain', () => {
//     expect(removeFooFromUrl('https://foo.segment.com')).to.equal('https://foo.segment.com');
//   });

//   it('should return the string unmodified if `foo` is present as a value in the query string', () => {
//     expect(removeFooFromUrl('https://www.helloworld.com?a=foo')).to.equal('https://www.helloworld.com?a=foo');
//   });

