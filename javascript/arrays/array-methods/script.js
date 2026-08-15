// <!-- 
//     ! shift()- შლის პირველ ელემენტს მასივიდან და აბრუნებს ამ ელემენტს.
//     ! unshift()- ამატებს ახალ ელემენტს მასივის დასაწყისში
//     ! pop()- შლის ბოლო ელემენტს მასივიდან 
//     ! push()- ამატებს ახალ ელემენტს მასივის ბოლოს

//     ! join()- აერთიანებს მასივის ყველა ელემენტს ერთ სტრინგად, რომელიც გამოყოფილია მითითებული სიმბოლოთი, დსაამატოთ სიმბოლოები, ტექსტები და ა.შ
//     ! includes()- ამოწმებს, შეიცავს თუ არა მასივი მითითებულ ელემენტს და აბრუნებს true ან false
//     ! concat()- აერთიანებს ორ ან მეტ მასივს ერთ მასივში, ასევე სუძლია გააერთიანოს ცვლადები, ტექსტები და ა.შ
//     ! reverse()- აბრუნებს მასივის ელემენტებს საპირისპირო რიგით

//     ! slice()- აბრუნებს მასივის ნაწილს ახალ მასივში, რომელიც იწყება მითითებული ინდექსიდან და მთავრდება მითითებულ ინდექსამდე (მთავარი ინდექსი არ შედის)

//     ! splice()- ამოჭრის მასივის ნაწილს და აბრუნებს ამ ნაწილს ახალ მასივში, ასევე შეუძლია დაამატოს ახალი ელემენტები მითითებულ ინდექსზე
// *            1. წაშალოს
// *            2. წაშალოს და დაამატოს
// *            3. დაამატოს
    
//     -->



// const fruits = ['🍋', '🍑', '🍍', '🍌', '🍓']
// console.log(fruits);

// const animals = ['🐕', '🐐', '🐆', '🦍', '🐉']
// console.log(animals);

// fruits.shift()
// console.log(fruits);

// const del_el = fruits.shift()
// console.log(del_el);
// console.log(fruits);


// const add_el = fruits.unshift('🍌', '🍓')
//  console.log(fruits);
 

//  const del_last_el = fruits.pop('🍓')
//  console.log(fruits);

//  const add_last_el = fruits.push('🍍')
//  console.log(fruits);
  


// const str = fruits. (' - ')
// console.log(str);


// const check_el = fruits.includes('🍍')
// console.log(check_el);
 

// const add_erray = fruits.concat(animals, 'hello', 21, name)

// const reversed_fruits = fruits.reverse()
// console.log(reversed_fruits);


// console.log(add_erray);



// const nums = [1, 2, 3, 40, 20, 122, 7, 100, 10]
// console.log(nums);


// const sliced_nums = nums.slice(1, 4)
// const sliced_nums = nums.slice(4)
// const sliced_nums = nums.slice(1, 2)
// const sliced_nums = nums.slice(-3, -1)
// console.log(sliced_nums);
// console.log(nums);


//! splice()
//! delete

// const del_el = nums.splice(6, 8)
// console.log(del_el);
// console.log(nums); 


//! 2 delete el and add new el

// const del_el = nums.splice(0, 3, 'hello', 3123213, true, 'world')
// console.log(del_el)
// console.log(nums);


//! 3 add new el
//  const add_el = nums.splice(0, 0, 'hello', 3123213, true, 'world')
//  console.log(nums);
 




