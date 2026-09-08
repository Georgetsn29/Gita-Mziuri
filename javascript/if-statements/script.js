// ! == ===
// ! < > <= >=
// ! && and
// ! || or

// if(23 > 10) {

//     console.log('true number');

// } else {

//     console.log('false number');

// }

// let num = 10

// if(num === 10 || 'red' == 'red') {
//     console.log('true number');
// } else {
//     console.log('false number');
    
// }


// if(30 <= 30 && 'blue' === 'red' || 100 === 100) {
//     console.log('true number');
    
// }


// ! შექმენით ხილის და ფერების მასივები, თითოში 3-4 ელემენტი
// ! 1. იპოვეთ არსებობს თუ არა ამ ხილში კონკრ. ხილის ელემენტი, მაგ: ვაშლი
// ! 2. თუ არსებობს ვაშლი და ეს არის ყვითელი ან წითელი, კალათში არის წითელი ან ყვითელი ვაშლი, ან არ არის ვაშლი;
// ! 3. თუ არსებობს კონკრ ხილი, გადაიყვანეთ სტრინგად. 
// ! 4. თუ მასივში არ არსებობს კონკრ. ხილი, დაამატეთ ბოლო ელემენტად. 
// ! 5. შექმენით უსერების 2 ან 3 ობიექტი: შეამოწმეთ ვინ არის მაგ: სრულწლოვანი და მხოლოდ ის წავიდეს კლუბში :)


// const fruits = ['ვაშლი', 'მსხალი', 'ბანანი', 'ატამი']
// const colors = ['წითელი', 'ყვითელი', 'მწვანე']

// const targetFruit = 'ვაშლი'

// const hasFruit = fruits.includes(targetFruit)
// console.log(hasFruit);

// const currentColor = 'წითელი'

// if(fruits.includes('ვაშლი') && (currentColor === 'წითელი' || currentColor === 'ყვითელი')) {

//     console.log(`კალათაში არის ${currentColor} ვაშლი`);

// } else (

//     console.log('კალათაში არ არის ვაშლი')
    
// )

// if(hasFruit === true) {
//     const fruitString = targetFruit.toString()

//     console.log(fruitString);
    
// }

// const newFruit = 'ანანასი'

// if(fruits.includes(newFruit) === false) {
//     fruits.push(newFruit)
// }

// console.log(fruits);


// const users = [
//     {
//         name: 'Giorgi',
//         age: 23,
//         adult: true
//     },

//     {
//         name: 'saba',
//         age: 17,
//         adult: false
//     }
// ]

// if(users[1].age >= 18) {
//     console.log(`${users[1].name} შეძლებს კლუბში შესვლას`);  
// } else {
//     console.log(`${users[1].name} ვერ შეძლებს კლუბში შესვლას`);
// }


//! მასწის
// const color = 'red'
// const fruit = 'apple'

// if(color === 'green' && fruit === 'apple') {

//     console.log('this is no an apple');

// } else if(color === 'red' && fruit === 'apple') {

//     console.log('this is an apple');

// } else {

//     console.log('not fruit');
    
// }


//! ternary operator
//  const age = 23

//  const userAge = age < 19 ? 'teenager' : 'adult'
//  console.log(userAge);
 

// const score = 87

// if(score >= 90) {
//     console.log('grade A');
    
// } else if(score >= 80 && score < 89) {
//     console.log('grade B');
    
// } else if(score >= 70 && score < 79) {
//     console.log('score C');
    
// } else {
//     console.log('Fail');
    
// }

// let grade = score >= 90 ? 'A' : score >= 80 ? 'B' : score >= 70 ? 'C' : 'Fail'

// let grade = score >= 90 ? 'A' : 
//             score >= 80 ? 'B' :
//             score >= 70 ? 'C' :
//             'Fail'
 
// console.log(grade);




// ! 1. რიცხვი კენტია თუ ლუწი 
// ! 2. რამდენი გრადუსია - ცივა, თბილა თუ ცხელა 

// * 1.
// let number = 22

// let evenOrOdd = number % 2 === 0 ? 'ლუწია' : 'კენტია' 
// console.log(evenOrOdd);

// * 2.
// let celsius = 23

// let weather = celsius >= 30 ? 'ცხელა' : 
//               celsius >= 18 ? 'თბილა' : 
//               celsius >= 0 ? 'ცივა' :
//               'ყინავს'
// console.log(weather);
