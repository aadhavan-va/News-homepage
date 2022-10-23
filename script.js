let menu = document.querySelector('.hamburger-menu');
let navLinks = document.querySelector('.links');

let lineOne = document.querySelector('.line-1');
let lineTwo = document.querySelector('.line-2');
let lineThree = document.querySelector('.line-3');

menu.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    lineOne.classList.toggle('degree-minus-45');
    lineTwo.classList.toggle('degree-none');
    lineThree.classList.toggle('degree-45');
    menu.classList.toggle('zero-gap');
})