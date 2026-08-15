// 1.შექმენით მანქანის მასივი, 4 ელემენტით; 

// 2. შექმენით სხვადასხვა character-ების 4 მასივი; 
// 3. შეართეთ ეს მასივები და დაამატეთ 2 რიცხვი და true. 

// 4. ეს გაერთიანებული მასივები შემოატრიალეთ. 
// 5. ამოიღეთ შუა 3 ელემენტი;
// 6. დაამატეთ ბოლო ელემენტი, მაგ: სახელი; 
// 7. წაშალეთ მესამე ელემენტიდან 4 ელემენტი;
// 8. ბოლო წინა ელემენტთან დაამატეთ: 2 ქალაქის სახელი; 
// 9. საბოოლოო ვერსია გადაიყვანეთ სტრინგში;


const cars = ['BMW', 'Tesla', 'Porsche', 'Jeep']

const fruits = ['🍉', '🍒', '🍍', '🍌']

const check_el = fruits.includes('🍒')
console.log(check_el);

const comb_el = cars.concat(fruits, 2, 4, true)

const reverse_comb_el = comb_el.reverse()

const middle_el = reverse_comb_el.slice(3, 5)
console.log(middle_el);


const add_last_el = reverse_comb_el.push('Giori')

const remove_el = reverse_comb_el.splice(3, 5)

const add_el = reverse_comb_el.splice(-1, 0, 'Tbilisi', 'Batumi')

const join_el = reverse_comb_el.join(' - ')

console.log(join_el);

