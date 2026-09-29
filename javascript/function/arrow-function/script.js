// ! arrow function

const user2 = (name) => {
    return 'Hello ' + name
} 

console.log(user2('Giorgi'));


// ! short arrow function

const user3 = name => 'Hello ' + name
console.log(user3('Nini'));


const age = 18

const user4 = (name, age) => 'hello ' + name + ' your age is ' + age
console.log(user4('ana', age));

const checkAge = (age) => age >= 18 ? 'you can drive' : 'you can not drive'

console.log(checkAge(18));



// ! 3 სტუდენტის ფუნქცია, გამოიყენოთ სამი სხვადასხვა ფუნქცია
// ! declaration, expression, arrow function


const firstScore = function(x, y) {

    return (x + y) % 2
}

function secondScore(x, y) {
    return (x * y) / 2


}

const thirdScore = (x, y) => {
    
    return (x - y) / 2
}

const students = [firstScore, secondScore, thirdScore]

console.log(students);

for(let i = 0; i < students.length; i++) {
    console.log(i, students[i](40,20));
    
}

const user = {
    name: 'ana',
    age: 18,
    score: [90, 51, 73],
    lang: 'Javascript',
    paid: true
}

const canPass = (user) => {
    
    let secCourse = user.lang = 'Javascript' && user.age >= 18 ? 'შეუძლია შემდეგ კურსზე გადასვლა' : 'ვერ გადავა შემდეგ კურსზე'

    return secCourse


}

console.log(canPass(user));









// ! შექმენით ორეტაპიანი პატარა აპლიკაცია, მხოლოდ ფუნქციებისა და უკვე გავლილი მასალის გამოყენებით.

// ! შექმენით პროდუქტების მონაცემთა ბაზა, სადაც იქნება სხვადასხვა კატეგორიის პროდუქტი:

// * ხილი;
// * სასმელი;
// * ტკბილეული.

// ! თითოეულ პროდუქტს უნდა ჰქონდეს:

// * სახელწოდება;
// * აღწერა;
// * ფასი;
// * რაოდენობა;
// * წარმოების ქვეყანა.

// ! შექმენით ფუნქცია, რომელიც შეამოწმებს, არსებობს თუ არა კონკრეტული პროდუქტი ბაზაში. პროდუქტი კალათაში უნდა დაემატოს მხოლოდ იმ შემთხვევაში, თუ ის ბაზაში არსებობს.

// ! კალათაში დაამატეთ რამდენიმე სხვადასხვა, წინასწარ შემოწმებული პროდუქტი.

// ! შემდეგ:

// ! დაითვალეთ კალათაში დამატებული პროდუქტების საერთო რაოდენობა;
// ! დაითვალეთ პროდუქტების ჯამური ფასი.

// ! მომხმარებლის ბარათზე ხელმისაწვდომი თანხა არის მაქსიმუმ 50 ლარი.

// ! შეამოწმეთ:

// ! თუ კალათის ჯამური ღირებულება 50 ლარს არ აღემატება, მომხმარებელს შეუძლია პროდუქტების შეძენა;
// ! თუ კალათის ღირებულება 50 ლარს გადააჭარბებს, შეძენა ვერ განხორციელდება.

// ! თუ თანხა ლიმიტს აჭარბებს, მომხმარებელს უნდა შეეძლოს:

// ! ერთი პროდუქტის წაშლა;
// ! რამდენიმე პროდუქტის წაშლა;
// ! კალათის სრულად გასუფთავება.

// ! პროდუქტების წაშლის შემდეგ ხელახლა დაითვალეთ კალათის საერთო ღირებულება და შეამოწმეთ, შესაძლებელია თუ არა შეძენა.


