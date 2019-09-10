import Person from "./modules/dataObject.js"

// IIFE - Immediately Invoiced function expression
(() => {
    console.log('fired!');

    console.log(Person);

    debugger;
})();