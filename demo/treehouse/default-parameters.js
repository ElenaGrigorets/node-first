'use strict';

function greet(name = 'Guil', timeOfDay = 'Day') {
//  name = name || 'Gill';
//  timeOfDay = timeOfDay || 'Day';
    console.log(`Good ${timeOfDay}, ${name}!`);
}
//greet(); //outpyt: Good Day, Guil!
greet(undefined, 'Afternoon');
