const slider = document.querySelector('.slider');
const sliderItems = document.querySelectorAll('.slider-item');
const btnLeft = document.getElementById('btn-left');
const btnRight = document.getElementById('btn-right');
let currentSlide = 0;

// Função para exibir o slide atual
function showSlide() {
  const slideWidth = sliderItems[0].clientWidth;
  const offset = -currentSlide * slideWidth;
  slider.style.transform = `translateX(${offset}px)`;
}

// Função para avançar para o próximo slide
function nextSlide() {
  currentSlide++;
  if (currentSlide >= sliderItems.length) {
    currentSlide = 0;
  }
  showSlide();
}

// Função para voltar para o slide anterior
function prevSlide() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = sliderItems.length - 1;
  }
  showSlide();
}

// Adicionar os ouvintes de evento aos botões de próxima e anterior
btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', prevSlide);

// Exibir o primeiro slide inicialmente
showSlide();
