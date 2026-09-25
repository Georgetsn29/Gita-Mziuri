// ! function declaration
// ! function expression
// ! arrow function
// ! short arrow function
// ! callback function
// ! higher order function


// const user = new Object()


// ! function declaration

// function sayHello(num) {
//     console.log(34 + num);    
// }

// sayHello(100)
// sayHello(200)
// sayHello(300)



// const num1 = 10

// function sayHello(num) {

//     const num2 = 10

//     console.log("hallo");    

//     return num2 + num

//     // * return ის შემდეგ აქრობს(აღარ კითხულობს)
//     console.log('hello');
//     return 'hello'
// }

// console.log(sayHello(100));    
// console.log(sayHello(200));


// ! (x + y) / z
// ! global scope - x
// ! block scope - y
// ! parameter scope - z

// const x = 20

// function first(z) {

//     const y = 30

//     return (x + y) / z
    
// }

// console.log(first(2));




// ! function expression

// const sumNum = function(num) {

// }

// function sumNum1(num) {

// }

// console.log(sumNum, sumNum1);




// const sumNum = function(num) {
//     return 10 + num
// }

// console.log(sumNum(10));



console.log('---1---');

// ! 18 + - (წავიდეს თუ არ წავიდეს კლუბში)
const clubFace = function(age) {
    let canPass = age >= 18 ? `არის ${age} წლის და შეუძლია შესვლა` : 'ვერ შევა'

    return canPass
}

console.log(clubFace(23));

console.log('');
console.log('---2---');


// ! first-name, last-name
const fullName = function(firstName, lastName) {
    return `ჩემი სახელია და გვარია - ${firstName} ${lastName}`
} 

console.log(fullName('გიორგი', 'ცნობილაძე'));



console.log('');
console.log('---3---');

// ! იპოვეთ 100-დან უმაღლესი რიცხვი  და უმდაბლესი.
// ! გამოიყენეთ min და max საჭიროების შემთხვევაში. 

let numbers = [20, 40, 21, 121, 440, 23]

const calcMinMax = function(minNum, maxNum) {


    return `ამ რიცხვებიდან: ${numbers} 
    მაქსიმალურია - ${minNum}
    მინიმალურია - ${maxNum}`
    
}

console.log(calcMinMax(Math.min(...numbers), Math.max(...numbers)));

    
console.log('');
console.log('---4---');

// ! იპოვეთ ყველა ლუწი რიცხვი მასივში და დააჯამეთ. 


// * ლუწის რიცხვების დაჯამება 
const evenSum = function(evenSumNum) {

    for(i = 0; i <= 100; i++) {
        if(i % 2 === 0) {
            evenSumNum += i
        }
    }

    return `ლუწი რიცხვების ჯამია: ${evenSumNum}`
}

console.log(evenSum(0));



// * ლუწი რიცხვების დაჯამება 2
let evenSum2 = function(sum) {
    let num = [1, 2, 3, 4, 5, 6, 76, 21, 54, 100]
    let i = 0

    while(i < num.length) {

        if(num[i] % 2 === 0) {
            sum += num[i]
        }

        i++
    }

    return `ლუწი რიცხვებია ჯამია: ${sum}`
}

console.log(evenSum2(0));



console.log('');
console.log('---5---');

let word = 'hello world!!'

// * დამარცვლა
const syllab = function(result) {
    let i = 0

    while ( i < word.length) {

        result.push(word[i])

        i++
    }

    return result
}

console.log(syllab([]));



// * შეტრიალებული დამარცვლა
const syllabReversed = function(reversed) {
    let i = word.length - 1

    while(i >= 0) {
        reversed += word[i]
        
        i--
    }

    return reversed
}

console.log(syllabReversed(""));



console.log('');
console.log('---6---');

let fruits = ['ვაშლი', 'მსხალი', 'ატამი', 'ბანანი', 'ანანასი', 'ატამი', 'საზამთრო']

// * 6-ზე მეტი
const moreThanSix = function(result) {
    let i = 0

    while(i < fruits.length) {
        if(fruits[i].length >= 6) {
            result.push(fruits[i])
        }

        i++
    }

    return result
}

console.log(moreThanSix([]));



// * ყველაზე გრძელი სიტყვა
const longestFruit = function(longest) {
    let i = 1

    while(i < fruits.length) {
        if (fruits[i].length > longest.length) {
            longest = fruits[i]
        }

        i++
    }

    return `გრძელი სიტყვაა - ${longest}`
}

console.log(longestFruit(fruits[0]));
