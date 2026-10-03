// const title = document.querySelector('#title')
// console.log(title);

// title.style.backgroundColor = 'red'
// title.style.color = '#419911'

// ! დინამიურად სტილიზაციის დამატება
// classList.add();

// ! დინამიურად სტილიზაციის წაშლა
// classList.remove()

// ! დინამიურად სტილიზაციის დამატება/წაშლა
// classList.toggle()

// title.classList.add('heading')


// ! createElement() - დინამიურად ელემენტის შექმნა
// ! appendChild() - დინამიურად ელემენტის დამატება
// ! append / prepend - დინამიურად ელემენტის დამატება (append - ბოლოში, prepend - დასაწყისში)
// ! remove() - დინამიურად ელემენტის წაშლა
// ! removeChilde() - დინამიურად ელემენტის წაშლა

// const ul_list = document.querySelector('ul')
// console.log(ul_list);

// const new_list = document.createElement('li')
// new_list.textContent = 'new list item'

// ul_list.appendChild(new_list)

// ! setAttribute -> დინამიურად ატრიბუტის დამატება
// ! getattribute -> დინამიურად ატრიბუტის მიღება

// const ul_list = document.querySelector('ul')
// ul_list.setAttribute('id', 'list')

// console.log(ul_list);

// ul_list.getAttribute('class')
// console.log(ul_list);

// ! შექმენით parent-box
// ! ჰ1, ლინკი
// ! იყოს ჩადებული child-box - სურათი

const body = document.body

const parent_box = document.createElement('div')

parent_box.setAttribute('id', 'parent_box')

parent_box.innerHTML += '<h1>This is h1</h1>'
parent_box.innerHTML += '<a href="#">This is link</a>'

body.appendChild(parent_box)

const child_box = document.createElement('div')

child_box.setAttribute('class', 'child_box')

child_box.innerHTML += '<img src="https://images.pexels.com/photos/6198224/pexels-photo-6198224.jpeg" width="100" height="100">'

parent_box.appendChild(child_box)

console.log(child_box);


console.log(parent_box);