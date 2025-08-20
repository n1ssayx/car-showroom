
const slides = document.querySelectorAll('.slide');
const nums = document.querySelectorAll('.slide-num');
let current = 0;

function showSlide(idx) {
  slides.forEach((img, i) => img.classList.toggle('active', i === idx));
  nums.forEach((num, i) => num.classList.toggle('active', i === idx));
  current = idx;
}

nums.forEach((num, i) => {
  num.addEventListener('click', () => showSlide(i));
});
document.querySelector('.prev').onclick = () => showSlide((current - 1 + slides.length) % slides.length);
document.querySelector('.next').onclick = () => showSlide((current + 1) % slides.length);

showSlide(0);
