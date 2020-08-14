'use strict';

const originalFlavors = ['Chocolate', 'Vanilla'];

const newFlavors = ['Strawberry', 'Mint Chocolate Chip'];

const inventory = ['Rocky Road', ...originalFlavors, 'Neopolitan', ...newFlavors];

console.log(inventory);



function myFunction (name, iceCreamFlavor) {
    console.log(`${name} really likes ${iceCreamFlavor} ice cream.`)
}

let args = ['Ken', 'Vanilla'];

myFunction(...args);
