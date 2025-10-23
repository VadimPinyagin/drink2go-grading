const slider = document.querySelector('.slider');
const slides = slider.querySelectorAll('.slide');
const controlButtons = slider.querySelectorAll('.button-radio');
const prevButton = slider.querySelector('.button-prev');
const nextButton = slider.querySelector('.button-next');

const activeSlides = 'slide--active';
const activeButton = 'active';
const inactiveButton = 'aria-disabled';
const currentButton = 'aria-current';
let currentSlide = 0;

export const initializeSlider = () => {
  document.addEventListener('DOMContentLoaded', () => {
    const updateSlider = () => {
      slides.forEach((slide, index) => {
        if (index === currentSlide) {
          slide.classList.add(activeSlides);
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
