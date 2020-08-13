// Problem: We need a simple way to look at a user's badge count and JavaScript points
// Solution: Use Node.js to connect to Treehouse's API to get profile information to print out

//require https module
const https = require("https");

function printError(error) {
    console.error(error.message);
}

//To print message to console:
function printMessage(username, badgeCount, points) {
    const message = `${username} has ${badgeCount} total badge(s) and ${points} points in JavaScript`;
    console.log(message);
}

function getProfile(username) {
    try {
        //connect to API url (https://teamtreehouse.com/username.json)
        const request = https.get(`https://teamtreehouse.com/${username}.json`, response => {
            let body = "";
            //read data
            response.on('data', data => {
                body += data.toString();
            });
            response.on('end', () => {
                try {
                    //parse data
                    const profile = JSON.parse(body);
                    //console.dir(profile);
                    //print data
                    printMessage(username, profile.badges.length, profile.points.JavaScript);
                    //console.log(body);
                    //console.log(typeof body);//string
                } catch (error) {
                    printError(error);
                }
            });
        });
        //request.on('error', error => console.error(`Problem with request: ${error.message}`));
        request.on('error', printError);
    } catch (error) {
        printError(error);
    }
}

//getProfile("chalkers");
//getProfile("olenahryhorets");// my result will return first because I don't have as many badges as Chalkers do;)

//const users = ["chalkers", "olenahryhorets"];
const users = process.argv.slice(2);
users.forEach(getProfile);
