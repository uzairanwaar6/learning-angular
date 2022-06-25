let firstName: string = 'Uzair'
let lastName: string = 'Anwaar'
let age: number = 35

const output = `My name is ${firstName} ${lastName} and I am ${age} years old`
alert(output)
console.log(output)
console.log('Hello World!....')

let theFunction = function (name: string, age: number): string {
    return `My name is ${name} and I am ${age} years old`;
}

type student = {
    firstName: string,
    lastName: string,
    age: number
};

let person: {
    firstName: string,
    lastName: string,
    age: number,
    calculateValues: Function
} = {
    firstName: 'Uzair',
    lastName: 'Anwaar',
    age: 18,
    calculateValues(): string {
        return `My name is ${this.firstName} ${this.lastName} and I am ${this.age} years old`;
    }
}