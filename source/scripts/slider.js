const slider = document.querySelector('.slider');
const slides = slider.querySelectorAll('.slide');
const controlButtons = slider.querySelectorAll('.slider__controls-button-radio');
const prevButton = slider.querySelector('.slider__prev');
const nextButton = slider.querySelector('.slider__next');

const activeSlides = 'slide--active';
const activeButton = 'active';
const inactiveButton = 'aria-disabled';
const currentButton = 'aria-current';
let currentSlide = 0;

const getColorFromData = (color) => {
  switch (color) {
    case 'decaf-flute-white':
      return 'var(--decaf-flute-white, #f3ebe1)';
    case 'lavender-latte':
      return 'var(--lavender-latte, #f1e8ff)';
    case 'triple-espresso':
      return 'var(--base-gray, #bdbdbd)';
    default:
      return '#f3ebe1';
  }
};

export const initializeSlider = () => {
  document.addEventListener('DOMContentLoaded', () => {

    const updateSlider = () => {
      slides.forEach((slide, index) => {
        if (index === currentSlide) {
          slide.classList.add(activeSlides);
          const newColor = slide.getAttribute('data-color');
          slider.style.backgroundColor = getColorFromData(newColor);
          slider.style.setProperty('--slider-background', getColorFromData(newColor));
        } else {
          slide.classList.remove(activeSlides);
        }
      });

      controlButtons.forEach((button, index) => {
        if (index === currentSlide) {
          button.classList.add(activeButton);
          button.setAttribute(currentButton, 'true');
        } else {
          button.classList.remove(activeButton);
          button.removeAttribute(currentButton);
        }

        prevButton.setAttribute(inactiveButton, currentSlide === 0 ? 'true' : 'false');
        nextButton.setAttribute(inactiveButton, currentSlide === slides.length - 1 ? 'true' : 'false');
      });
    };

    controlButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
        if (index < slides.length) {
          currentSlide = index;
          updateSlider();
        }
      });
    });

    prevButton.addEventListener('click', () => {
      if (currentSlide > 0) {
        currentSlide--;
        updateSlider();
      }
    });

    nextButton.addEventListener('click', () => {
      if (currentSlide < slides.length - 1) {
        currentSlide++;
        updateSlider();
      }
    });

    slider.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowLeft' && currentSlide > 0) {
        currentSlide--;
        updateSlider();
      } else if (event.key === 'ArrowRight' && currentSlide < slides.length - 1) {
        currentSlide++;
        updateSlider();
      }
    });

    updateSlider();
  });
};
