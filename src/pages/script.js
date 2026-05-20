document.addEventListener('DOMContentLoaded', () => {

const list = document.getElementById('list');
const left = document.getElementById('left');
const right =document.getElementById('right');

left.addEventListener('click', () => {
  list.scrollBy({
    left: 250,
    behavior: 'smooth'
  });
});

right.addEventListener('click', () => {
  list.scrollBy({
    right: 250,
    behavior: 'smooth'
  });
});
})
