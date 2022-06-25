"use strict";
let firstName = 'Uzair';
let lastName = 'Anwaar';
let age = 35;
const output = `My name is ${firstName} ${lastName} and I am ${age} years old`;
alert(output);
console.log(output);
console.log('Hello World!....');
let theFunction = function (name, age) {
    return `My name is ${name} and I am ${age} years old`;
};
let person = {
    firstName: 'Uzair',
    lastName: 'Anwaar',
    age: 18,
    calculateValues() {
        return `My name is ${this.firstName} ${this.lastName} and I am ${this.age} years old`;
    }
};
