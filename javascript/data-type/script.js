//   index.js, script.js, app.js, main.js, ...

// * primitive data types
// * string, number, boolean, null, undefined, symbol, bigint

// ! non-primitive data types
// ! array, function, object

// console.log(123 + 2334); // number
// console.log('hello world'); //string

// * პირველი ასო-ბგერა lowercase-ით უნდა იყოs.

// * თუ სიტყვა შედგება რამდენიმე ასო-ბგერიდან, მაშინ თითოეული ახალი სიტყვა უნდა იწყებოდეს დიდი ასო-ბგერით. (camelCase)

// * არ შეიძლება დაიწყოს რიცხვით, სასვენი ნიშნებით და სიმბოლოებით

// * არ ვიყენებთ ჩაშენებულ სიტყვებს (keywords) როგორიცაა: if, else, for, while, function, return, var, let, const, new, this, class, try, catch, throw, switch, case, break, continue, default, do, finally, import, export

// * var, let, const - ცვლადები

// * სადაც ინახება ერთი ტიპის მონაცემები (data types) როგორიცაა: string, number, boolean, undefined, null, symbol, bigint

// * `` - iteral operator



// var name = 'Giorgi'

// var age = 23
// console.log(name, age);  

// var name = 'Nini'
// console.log(name);


// let name = 'Giorgi'
// console.log(name);

// let name = 'Nini'
// console.log(name);

// const name = 'Giorgi'

// const name = 'Nini'
// console.log(name);


// const name = 'Giorgi'
// const age = 23 

// console.log('My name is ' + name + ' and I am ' + age + ' years old.');

// console.log(`My name is ${name} and I am ${age} years old.`);


// const firstNumber = 5
// const secondNumber = 20
// const thirdNumber = 7

// const sumNumber = firstNumber + secondNumber + thirdNumber

// console.log(sumNumber);


let name = 'Giorgi'
let age = 23

if (age >= 18) {
    console.log(`მე მქვია ${name} და ვარ სტუდენტი.`);
} else {
    console.log(`მე მქვია ${name} და არ ვარ სტუდენტი`);
}