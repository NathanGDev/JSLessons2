const api_key = "a6Y2VfFWdVRwUm7rWjhFws2hJZnJcCnTMDXHmFBy"

const url = 'https://api.nasa.gov/planetary/apod?api_key=' + api_key;

fetch(url)
    .then(result => {
        console.log(result)
        result.json()
    })
    .then(json => {
        console.log(json)
        console.log('done')
    })
    .catch(err => {
    console.error(err)
    })