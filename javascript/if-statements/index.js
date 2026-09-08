// ! switch case

// let color = 'red'

// if(color === 'green') {
//     console.log('green color');
    
// } else if(color === 'red') {
//     console.log('red color');
    
// } else {
//     console.log('here is no red color');
    
// }

// switch(color){
//     case 'black' :
//     console.log('it is black');
//     break

//     case 'green' :
//     console.log('it is green');
//     break

//     case 'red' :
//         console.log('it is red');
//     break

//     default :
//     console.log('it is not red color');
    
// }



// ! ვინ შევიდა სისტემაში?
// * იურისტი, მენეჯერი, კლიენტი

let login = 'კლიენტი'

// switch(login) {

//     case 'იურისტი' :
//     console.log('სისტემაში შევიდა იურისტი');
//     break

//     case 'მენეჯერი' :
//     console.log('სისტემაში შევიდა მენეჯერი');
//     break 

//     case 'კლიენტი' :
//     console.log('სისტემაში შევიდა კლიენტი');
//     break
    
//     default : 
//     console.log('სისტემაში არავინ შესულა');
//     break
    
    
// }

// let fruit = ['apple', 'pear']
// let action = 'join'

// switch(action) {
//     case join: 
//     console.log(fruit.join(' - '));
    
// }



//  ! 1. თუ არის ამდენი წლის და არის ან სტუდენტი, ან პენსიონერი ან მოსწავლე, მაგ შემტხევაში შეუძლია შევიდეს : ბიბლიოთეკაში, კლუბში ან პანსიონატი.  - else if, ternary, switch
// ! რამდენი ელემენტია მასივში - array-length (ternary)
// ! თუ არის უზერებიდან ვინმე სტუდენტი - მოსწავლე; 
// ! რა skill-ს აქვს სტუდენტს, მაგ: html, css, js, bootstap - თუ იცის ეს სქილები, გადავიდეს მეორე სემესტრში; 
// ! პროდუქცია - სახელი, რაოდენობა, ფასი: თუ ფასი არის 500-ზე მეტი და 1000-ზე ნაკლები, შეიძლება ყიდვა ან ძვირია - ან რაოდენობაც დაიტვალოთ რამდენია.  და ათუკი არის რაიმე ფასდკალება რომელიმე პროდუქციაზე.


// ! 1.
// * ternary 
let age = 23

let canEnter = age >= 6 && age <= 17 ? 'სკოლის მოსწავლეა და შეუძლია ბიბლიოთეკაში შესვლა' :
               age >= 18 && age <= 25 ? 'სტუდენტია და შეუძლია კლუბში შესვლა' :
               age >=25 && age <= 64 ? 'ზრდასრულია და შეუძლია ჯლუბში შესვლა' :
               age >= 65 ? 'პენსიონერია და შეუძლია პანსიონში შესვლა' :
               'ვერსად ვერ შევა'
console.log(canEnter);

// * switch
let personCanEnter = 'სტუდენტი'

switch(personCanEnter) {

    case 'სკოლის მოსწავლე' :
    console.log('არის სკოლის მოსწავლე და შეუძლია ბიბლიოთეკაში შესვლა');
    break

    case 'სტუდენტი' :
    console.log('არის სტუდენტი და შეუძლია კლუბში შესვლა');
    break

    case 'პენსიონერი' :
    console.log('არის პენსიონერი და შეუძ₾ია პანსიონში შესვლა');
    break

    default :
    console.log('არსად შესვლა არ შეუძლია');
    break
    
}


// ! 2.
let numbers = [1, 2, 3, 4, 5, 20, 10, 22, 11]

let length = numbers.length
console.log(length);


// ! 3.

let person = [
    {
        name: 'Giorgi',
        age: 23,
        studies: 'სტუდენტი',
        skills: ['html', 'css', 'js', 'bootstap']
    },

    {
        name: 'Giorgi',
        age: 23,
        studies: 'სტუდენტი',
        skills: ['html', 'css', 'js', 'bootstap']
    }
]

switch(person[1].studies) {
    case 'სტუდენტი' :
    console.log('არის სტუდენტი');
    break

    default :
    console.log('არ არის სტუდენტი');
    break
    
}