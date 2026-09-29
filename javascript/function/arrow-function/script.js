// ! arrow function

// const user2 = (name) => {
//     return 'Hello ' + name
// } 

// console.log(user2('Giorgi'));


// ! short arrow function

// const user3 = name => 'Hello ' + name
// console.log(user3('Nini'));


// const age = 18

// const user4 = (name, age) => 'hello ' + name + ' your age is ' + age
// console.log(user4('ana', age));

// const checkAge = (age) => age >= 18 ? 'you can drive' : 'you can not drive'

// console.log(checkAge(18));



// ! 3 სტუდენტის ფუნქცია, გამოიყენოთ სამი სხვადასხვა ფუნქცია
// ! declaration, expression, arrow function


// const firstScore = function(x, y) {

//     return (x + y) % 2
// }

// function secondScore(x, y) {
//     return (x * y) / 2


// }

// const thirdScore = (x, y) => {
    
//     return (x - y) / 2
// }

// const students = [firstScore, secondScore, thirdScore]

// console.log(students);

// for(let i = 0; i < students.length; i++) {
//     console.log(i, students[i](40,20));
    
// }

// const user = {
//     name: 'ana',
//     age: 18,
//     score: [90, 51, 73],
//     lang: 'Javascript',
//     paid: true
// }

// const canPass = (user) => {
    
//     let secCourse = user.lang = 'Javascript' && user.age >= 18 ? 'შეუძლია შემდეგ კურსზე გადასვლა' : 'ვერ გადავა შემდეგ კურსზე'

//     return secCourse


// }

// console.log(canPass(user));









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



let items = {
    fruits: [
        {
            name: 'Apple',
            desc: 'This is apple',
            price: 0.4,
            quantity: 1,
            country: 'Georgia' 
        },

        {
            name: 'Banana',
            desc: 'This is banana',
            price: 1.4,
            quantity: 1,
            country: 'Ecuador' 
        },

        {
            name: 'Orange',
            desc: 'This is Orange',
            price: 3,
            quantity: 1,
            country: 'Georgia' 
        }
    ],

    drinks: [
        {
            name: 'Coca-Cola',
            desc: 'This is Coca-Cola',
            price: 1.75,
            quantity: 1,
            country: 'Georgia' 
        },

        {
            name: 'Pepsi',
            desc: 'This is Pepsi',
            price: 1.80,
            quantity: 1,
            country: 'Georgia' 
        },
        
        {
            name: 'XL',
            desc: 'This is XL',
            price: 3.95,
            quantity: 1,
            country: 'Georgia' 
        }
    ],

    snacks: [
        {
            name: 'Bounty',
            desc: 'This is Bounty',
            price: 2.890,
            quantity: 1,
            country: 'Georgia' 
        },

        {
            name: 'Snickers',
            desc: 'This is Snickers',
            price: 1.99,
            quantity: 1,
            country: 'Georgia' 
        },

        {
            name: 'Skittles',
            desc: 'This is Skittles',
            price: 1.69,
            quantity: 1,
            country: 'Georgia' 
        }
    ]
}

const cart = [];
const price_limit = 50;

const findItem = (productName) => {
    
    for (const category in items) {
        const products = items[category]
        let i = 0


        while (i < products.length) {

            if(products[i].name === productName) {
                return products[i]
            }

            i++
        }
    }

    


    return null
}

const addToCart = (productName) => {
    const product = findItem(productName)

    if (product === null) {
        console.log('X ' + productName + ' არ არის ესეთი პროდუქტი, კალათაში ვერ დავამატებთ.');

        return
        
    }

    cart.push(product)

    console.log('წარმატებით დაემატა ' + product.name + ' (' + product.price + ' ლ)');
    
}

const countCartItems = () => {
    return cart.length
}

const calculateTotal = () => {
    let total = 0

    for(let i = 0; i < cart.length; i++) {
        total += cart[i].price;
    }

    return total
}

const checkout = () => {
    const total = calculateTotal();
    console.log('პროდუქტის რაოდენობა: ' + countCartItems());
    console.log('კამური ღირებულება: ' + total + ' ლ');
    
    if(total <= price_limit) {
        console.log('შეძენა წარმატებით განხორციელდა.');
        
        return true
    } else {
        console.log('ლიმიტი (' + price_limit + ' ლ) გადააჭარბა, შეძენა ვერ მოხერხდება.');

        return false
        
    }
    
}

const removeOne = (productName) => {
    for(let i = 0; i < cart.length; i++) {
        if (cart[i].name === productName) {
            cart.splice(i, 1)

            console.log('წაიშალა: ' + productName);
            
        } else {
            console.log('კალათაში ' + productName + ' არ არის.');
            
        }
    }
}

const removeMany = (namesArray) => {
    for( let i = 0; i < namesArray.length; i++) {
        removeOne(namesArray[i])
    }
}

function clearCart() {
    cart.length = 0
    console.log('კალათა გასუფთავდა');
    
}

// console.log(cart);

addToCart('XL')
addToCart('Coca-Cola')

checkout()

addToCart('Skittles')

checkout()

removeOne('XL')

checkout()

clearCart()