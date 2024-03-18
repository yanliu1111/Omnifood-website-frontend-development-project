// console.log('hello world!'); test connection

const yearElement = document.querySelector('.year');
yearElement.textconContent = new Date().getFullYear();

//make mobile nav work
const btnNavEl = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.header');
btnNavEl.addEventListener('click', function () {
  headerEl.classList.toggle('nav-open'); // adding and removing at the same time
});
