"use strict";
let greet;
greet = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
greet('wanss', 'hello');
let calc;
calc = (numOne, numTwo, action) => {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
console.log(calc(3, 5, 'add'));
let logDetails;
logDetails = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
};
