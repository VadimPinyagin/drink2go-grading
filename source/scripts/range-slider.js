import {sliderElement} from './constants.js';

export function rangeSlider(){

    const formatForSlider = {
    from: function (formattedValue) {
      return Number(formattedValue); // Преобразуем форматированное значение в число
    },
    to: function (numericValue) {
      return Math.round(numericValue); // Округляем число до ближайшего целого
    },
  };

  noUiSlider.create(sliderElement, {
    start: [0,900],
    connect: true,
    range: {
      min: 0,
      max: 1000,
    },
    format:formatForSlider,
  });

  const formatValues = [
    document.getElementById("min-num"), // Поле для минимального значения
    document.getElementById("max-num"), // Поле для максимального значения
  ];

  sliderElement.noUiSlider.on("update", function (values, handle) {
    formatValues[handle].value = values[handle]; // Обновляем поля при движении ползунка
  });
}
