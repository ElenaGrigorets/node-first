// connect to https://home.openweathermap.org/api_keys for getting current temperature
const weather = require('./weather');

const query = process.argv.slice(2).join(' ');

//query zip
//query city

weather.get(query);



// const https = require('https');
//
// try {
//     const request = https.get('myawesomeapi.com/comments.json', (response) => {
//
//     });
//
//     request.on(error => console.error('Asynchronous error') );
// } catch(error) {
//     console.error('URL parse error'); //WILL OCCURS
// }
