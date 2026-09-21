// ! For Loop

// ! for აქვს სამი ბრძანება: 
// * 1) ინიციალიზაცია, საიდან დაიწყოს მოქმედება
// * 2) პირობა
// * 3) ინკრემენტი / დეკრემენტი
// ! ++ გაზრდა ერთით
// ! -- კლება ერთით


// let num = 20
// console.log(num);
// g

// for(let i = 0; i <= num; i+=2) {
//     console.log(i);
    
// }

// for(let i = 50; i >= 20; i-=5) {

//     console.log(i, '50-დან 20-მდე');
    
// }

// for(let i = 10; i <= 30; i+=3) {

//     console.log(i, '10-დან 30-მდე');
    
// }

// const cars = ['BMW', 'TESLA', 'LEXUS']

// for(let i = 0; i < cars.length; i++) {

//     console.log(i, cars[i]);
    
// }




// ! მასივში ობიექტები - 18< > კლუბში არ ვუშვებთ

// const studentIsAdult = [
//     {
//         name: 'გიორგი',
//         age: 23
//     },
//     {
//         name: 'ნუცა',
//         age: 18
//     },
//     {
//         name: 'საბა',
//         age: 15
//     }
// ]

// for(let i = 0; i < studentIsAdult.length; i++) {

//     let age_line = studentIsAdult[i].age >= 18 ? 'შეუძლია კლუბში შესვლა' : 'კლუბში ვერ შევა'
//     console.log(`${studentIsAdult[i].name} არის ${studentIsAdult[i].age} წლის: ${age_line}.`);
    
// }


// ! სტუდენტი ანა - [ 45, 90, 18] -საშუალო - მათემატიკაში
// ! თუ სტუდენტის საშუალო 51-ზე ნაკლებია, ვერ ჩააბარა გამოცდა ;
// ! დათვალეთ რამდენმა სტუდენტმა ვერ ჩააბარა ან ჩააბარა გამოცდა;
// ! იპოვეთ რამდენმა მიიღო 85-ზე მაღალი ქულა. 

// let students = [
//     {
//         name: 'ანა',
//         grade: [45, 90, 18]
//     },
//     {
//         name: 'გიორგი',
//         grade: [10, 98, 38]
//     },
//     {
//         name: 'ნინი',
//         grade: [89, 92, 78]
//     }
// ]

// for(let i = 0; i < students.length; i++) {

//     let total = 0

//     for(let g = 0; g < students[i].grade.length; g++) {
//         total += students[i].grade[g];
//     }

//     let avg = total / students[i].grade.length

//     let pass = avg >= 51 ? 'ჩააბარა' :
//                            'ჩაიჭრა'
    
//     console.log(`${students[i].name} საშვალო ქულაა ${avg}. ${pass}`);
 
// }




// ! იპოვეთ 100-დან უმაღლესი რიცხვი  და უმდაბლესი.
// ! გამოიყენეთ min და max საჭიროების შემთხვევაში. 

// let numbers = [20, 40, 21, 121, 440, 23]

// let minNum = Math.min(...numbers)
// let maxNum = Math.max(...numbers)

// console.log(`ამ რიცხვებიდან: ${numbers} 
// მაქსიმალურია - ${minNum}
// მინიმალურია - ${maxNum}`);
    

// ! იპოვეთ ყველა ლუწი რიცხვი მასივში და დააჯამეთ. 


// * ლუწის რიცხვების დაჯამება 
// let evenSum = 0

// for(i = 0; i <= 100; i++) {

//     if(i % 2 === 0){
//         evenSum += i
//     }

// }

// console.log(`ლუწი რიცხვების ჯამია: ${evenSum}`);

// * ლუწი რიცხვების დაჯამება 2
// let num = [1, 2, 3, 4, 5, 6, 76, 21, 54, 100]
// let sum = 0

// for (let i = 0; i < num.length; i++) {
//     if(num[i] % 2 === 0) {
//         sum += num[i]
        
//         console.log(num[i]);
        
//     }

    
// }

// console.log(`ლუწი რიცხვებია ჯამია: ${sum}`);




// ! თუ რიცხვები მეორდება, მხოლოდ ერთხელ შემოიტანეთ, თუ არ მეორდება ცალკე დააჯამათ
// ! იპოვეთ ორი მასივის საერთო ელემენტები;
// ! თუ ორივე მასივში მეორდება ელემენტები, შემოიტანეთ მხოლოდ რაც არ მეორდება;







// ! for of - გამოიყენება მასივის მნიშვნელობასთან
// ! for in - გამოიყენება მხოლოდ ობიექტის key-თან

// const fruits = ['apple', 'banana', 'orange']

// for(const fruit of fruits) {
//     console.log(fruit);
// }

// const person = {
//     name: 'john',
//     surname: 'Doe',
//     age: 309,
//     city: 'Tbilisi'
// }

// for (const user in person) {
//     console.log(user, person[user]);
    
// }