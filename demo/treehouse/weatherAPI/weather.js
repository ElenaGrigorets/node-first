const https = require('https');
const querystring = require('querystring');
const api = require('./api.json');
const http = require('http');

// Print out temp details
function printTemp(cityName, temp) {
    console.log(`The temperature in ${cityName} is ${temp} in Fahrenheit`);
}

// Print out error message
function printError(error) {
    console.error(error.message);
}
// for get temperature in Fahrenheit use units=imperial
// for temperature in Celsius use units=metric
// temperature in Kelvin is used by default, no need to use units parameter in API call
function get(query) {
    try{
        const parameters = {
            APPID: api.key,
            units: 'imperial'
        };

        const zipCode = parseInt(query);
        if (!isNaN(zipCode)) {
            parameters.zip = zipCode + ',us';
        } else {
            parameters.q = query + ',us';
        }

        const url = `https://api.openweathermap.org/data/2.5/weather?${querystring.stringify(parameters)}`;
        //console.log(url);

        const request = https.get(url, response => {
            if( response.statusCode === 200 ) {
                let body = "";
                // Read the data
                response.on('data', chunk => {
                    body += chunk;
                });
                response.on('end', () => {
                    try{
                        //console.log(body);
                        //Parse data
                        const result = JSON.parse(body);
                        //Print the data
                        printTemp(result.name, result.main.temp)
                    } catch(error) {
                        printError(error);
                    }
                });
                //if we have an error, we need to handle the error with the "error" event,
                // because if we not - unexpected things can happen.
                response.on("error", error => {
                    console.error(`Error: ${error.message}, problem with the request`);
                });
            } else {
                const statusErrorCode = new Error(`There was an error for "${query}": ${http.STATUS_CODES[response.statusCode]}`);
                printError(statusErrorCode);
            }
        });
    } catch(error) {
        printError(error);
    }
}

module.exports.get = get;

