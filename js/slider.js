const slider = document.querySelector('.slider');
const slideContainer = document.querySelector('.slide-container');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const slideInfo = document.getElementById('slide-info');

const slides = [
    { img: 'assets/images/gora.jpeg', caption: 'Гора' },
    { img: 'assets/images/hrebet.png', caption: 'Хребет' },
    { img: 'assets/images/ozero.png', caption: 'Озеро' },
    { img: 'assets/images/hram.jpeg', caption: 'Храм' },
    { img: 'assets/images/tropa.jpeg', caption: 'Тропа' },
];

let currentSlide = 0;

slides.forEach((slide, index) => {
    const slideElement = document.createElement('div');
    slideElement.classList.add('slide');
    slideElement.style.backgroundImage = `url(${slide.img})`;
    const caption = document.createElement('div');
    caption.classList.add('slide-caption');
    caption.textContent = slide.caption;
    slideElement.appendChild(caption);
    slideContainer.appendChild(slideElement);
});

function showSlide(index) {
    const allSlides = document.querySelectorAll('.slide');
    allSlides.forEach(slide => slide.classList.remove('visible'));
    allSlides[index].classList.add('visible');
    slideInfo.textContent = `${index + 1} слайд из ${slides.length}`;

    prevButton.disabled = (index === 0);
    nextButton.disabled = (index === slides.length - 1);
}

prevButton.addEventListener('click', () => {
    if (currentSlide > 0) {
        currentSlide--;
        showSlide(currentSlide);
    }
});

nextButton.addEventListener('click', () => {
    if (currentSlide < slides.length - 1) {
        currentSlide++;
        showSlide(currentSlide);
    }
});

showSlide(currentSlide);
