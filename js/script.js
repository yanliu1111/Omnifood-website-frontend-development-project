// console.log('hello world!'); test connection

const yearElement = document.querySelector('.year');
yearElement.textconContent = new Date().getFullYear();

//make mobile nav work
const btnNavEl = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.header');
btnNavEl.addEventListener('click', function () {
  headerEl.classList.toggle('nav-open'); // adding and removing at the same time
});

// smooth scrolling animation
const allLinks = document.querySelectorAll('a:link');
// console.log(allLinks);
allLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const href = link.getAttribute('href');
    if (href === '#') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
    if (href !== '#' && href.startsWith('#')) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: 'smooth' });
    }
    if (link.classList.contains('main-nav-link')) {
      headerEl.classList.toggle('nav-open');
    }
  });
});
