const string = 'maze'

const https = require("https")
const request = require('request');


const axios = require('axios');

console.log(getData2(string))

function getData2(string){
  const url = `https://jsonmock.hackerrank.com/api/movies/search/?Title=${string}`

  // const response  = await axios.get(url)
  // console.log(response.data.total)

  // console.log(result)
  axios.get(url)
    .then((response) => {
      console.log(response.data.total)
      process.stdout.write(response.data.total)
    })
    .catch((error) => {
      console.log(error);
    })
  }

async function getData(string){
    const url = `https://jsonmock.hackerrank.com/api/movies/search/?Title=${string}`

    // const response  = await axios.get(url)
    // console.log(response.data.total)

    // console.log(result)
    axios.get(url)
      .then((response) => {
        console.log(response.data.total)
      })
      .catch((error) => {
        console.log(error);
      })


    // function myFetch(url) {
    //   return new Promise((resolve, reject) => {
    //     request(url, function (error, response, body) {
    //       if(error) reject(error)
    
    //       else resolve(result = JSON.parse(body))
    //     });
    //   });
    // }


    // myFetch(url).then(()=> {
    //   // console.log(result.total)
    //   return result.total
    // })




    // https.get(url, (res) => {
    //     res.setEncoding("utf8");
        
    //     let body = "";
        
    //     res.on("data", data => {
    //         body += data;
    //         //console.log(data)
    //     });
        
    //     res.on("end", () => {
    //         //console.log(body)
    //         body = JSON.parse(body);
    //         console.log(body.total);
    //     });
    // });
    
    // https.get(url, (res) => {
    //   console.log('statusCode:', res.statusCode);
    //   console.log('headers:', res.headers);
    
    //   res.on('data', (d) => {
    //     body = JSON.parse(d)
    //     // process.stdout.write(body);
    //     result += body.total
    //     // console.log(result)
    //   });
    
    // }).on('error', (e) => {
    //   console.error(e);
    // });

    // console.log(result)
    // if (result) return result
    // return result 
}


// const result = getData(string)


// console.log(result)



    // Write your code here
    if(numbers.length === 0 )return 0
    
    let min = numbers[0]
    for(let number of numbers){
        min = Math.min(min, number)
    }
    let result = 0
    for(let number of numbers){
        result += number - min
    }
    return result




    const s = starting.sort((a, b) => a-b)
    const e = ending.sort((a, b) => a-b)
    
    const sS = [...new Set(starting)]
    const eS = [...new Set(ending)]
    
    
    

    
    console.log(sS)
    console.log(eS)
    let c = 1
    let end = eS[0]
    console.log(end)
    
    for(let i = 1; i< starting.length; i++){
        if(s[i] >= end){
            end = e[i]
            c++
        } 
    }
    // c is the amount of removed intervals
    // let length = sS.length * eS.length
    console.log(c)
    return sS.length - c