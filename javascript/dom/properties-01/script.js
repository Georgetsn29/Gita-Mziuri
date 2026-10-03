// ! dom -> document object model

const heading = document.getElementById('title')

const heading2 = document.getElementsByClassName('head')

const heading3 = document.getElementsByTagName('h1')


const heading4 = document.querySelector('.head')

const heading5 = document.querySelector('#title')

const heading6 = document.querySelectorAll('h1')



console.log(heading, heading2, heading3);

console.log(heading4, heading5);

console.log(heading6);

// const lists = document.querySelectorAll('li')

// const ul_lists = document.querySelector('ul li')

const paragraph = document.querySelector('.para-text')
console.log(paragraph);
console.log(paragraph.innerText);
console.log(paragraph.textContent);



// ! innerHTML ->
// ! innerText ->
// ! textContent -> 

const ul_lists = document.querySelector('ul')

ul_lists.innerHTML += `<li>wine</li>`