/* в этот файл добавляет скрипты*/
import {rangeSlider} from './range-slider.js';
import {mainNavOpenClose} from './moblie-nav.js';

new Swiper('.swiper', {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

rangeSlider();
mainNavOpenClose();
