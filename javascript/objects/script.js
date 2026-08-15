// ! Object

// ! example 1

// const user = {
//     key : "value",
//     name : "Giorgi",
//     age : 23,
//     cars : [
//         'Tesla Model 3',
//         'BMW F80 M3'
//     ],
//     address : {
//         city : 'Tbilisi',
//         street : 'Nutsubidze',
//         zipCode : [ '0168', '0122']
//     }
// }

// console.log(user.cars[1]);

// console.log(user.address.street);
// console.log(user.address.zipCode[0]);


// const users = [
//     {
//         name : 'Giorgi',
//         age : 23,
//         lang : ['Eng', 'Geo']
//     },

//     {
//         name : 'Nini',
//         age : 23,
//         lang : ['Eng', 'Geo', 'Ger']
//     }
// ]

// console.log(users[1].lang[1]);




// ! example 2

// const user1 = {}
// user1.name = "Nini"
// user1.age = 23

// console.log(user1);


// ! example 3 OOP

// const user2 = new User()


// * მანქანებზე შევქმნათ რამოდენიმე ობიექტი
// * მანქანის მასივი: სახელი, სერია, წელი, ფერები, ძრავა-ები

const cars = [
    {
        brand : 'BMW',
        model : 'F80 M3',
        year : '2016',
        color : ['Alpine White III', 'Mineral White Metallic', 'Silverstone Metallic', 'Mineral Gray Metallic', 'Black Sapphire Metallic', 'Yas Marina Blue Metallic', 'Austin Yellow Metallic', 'Sakhir Orange Metallic'],
        engine: '3.0'
    },
    {
        brand : 'TESLA',
        model : 'Model 3 Performance',
        year : '2026',
        color : ['Stealth Grey', 'Pearl White Multi-Coat', 'Diamond Black', 'Frost Blue Metallic', 'Ultra Red', 'Quicksilver'],
        engine: 'Dual Motor'
    }
]

console.log(cars);
 