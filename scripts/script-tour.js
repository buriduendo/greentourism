const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const photos = document.querySelectorAll('.photo');

nextBtn.addEventListener('click', () => {
    const srcArray = Array.from(photos).map(photo => photo.src);
    for (let i = 0; i < photos.length; i++) {
        if (i === photos.length - 1) {
            photos[i].src = srcArray[0];
        } else {
            photos[i].src = srcArray[i + 1];
        }
    }
});

prevBtn.addEventListener('click', () => {
    const srcArray = Array.from(photos).map(photo => photo.src);
    for (let i = 0; i < photos.length; i++) {
        if (i === 0) {
            photos[i].src = srcArray[photos.length - 1];
        } else {
            photos[i].src = srcArray[i - 1];
        }
    }
});

const booking = document.getElementById("booking");
const bookingOffset = booking.offsetTop;

window.addEventListener("scroll", function() {
    if (window.scrollY > bookingOffset) {
        booking.style.position = "fixed";
        booking.style.top = "20px";
    } else {
        booking.style.position = "absolute";
        booking.style.top = bookingOffset + 10 + "px";
    }
});

const datePicker = document.getElementById('date');
// Получаем элемент ввода количества гостей
const guestInput = document.getElementById('guests');
// Получаем кнопку уменьшения количества гостей
const minusButton = document.querySelector('.minus-guest');
// Получаем кнопку увеличения количества гостей
const plusButton = document.querySelector('.plus-guest');
// Получаем элемент отображения цены
const priceDisplay = document.getElementById('price');
const bookButton = document.querySelector('.book-button');

// Задаем начальное количество гостей
let guests = 1;
// Задаем начальную цену (цена за одного гостя)
let price = 5500;

// Функция для обновления цены на основе текущего количества гостей.
function updatePrice() {
  // Рассчитываем цену
  price = guests * 5500; 
  // Обновляем текстовое содержимое элемента priceDisplay с новой ценой
  priceDisplay.textContent = `${price} ₽`;
}

// Обработчик события на кнопку уменьшения количства гостей
minusButton.addEventListener('click', () => {
  // Уменьшаем количество гостей, если оно больше 1
  if (guests > 1) {
    guests--; // Уменьшаем количество гостей на 1
    guestInput.value = guests; // Обновляем значение в поле ввода
    updatePrice(); // Обновляем отображаемую цену
  }
});

// Обработчик события на кнопку увеличения количства гостей
plusButton.addEventListener('click', () => {
    // Увеличиваем количество гостей, если оно меньше 15
    if (guests < 15) {
      guests++; // Увеличиваем количество гостей на 1
      guestInput.value = guests; // Обновляем значение в поле ввода
      updatePrice(); // Обновляем отображаемую цену
    }
});
  
guestInput.addEventListener('input', () => {
  guests = parseInt(guestInput.value);
  if (isNaN(guests) || guests < 1) {
    guests = 1;
  } else if (guests > 15) {
    guests = 15;
  }
  guestInput.value = guests;
  updatePrice();
});

bookButton.addEventListener('click', () => {
  const date = datePicker.value;
  if (date && guests > 0) {
    alert(`Бронирование на ${date} для ${guests} гостей на сумму ${price} рублей.`);
  } else {
    alert('Пожалуйста, выберите дату и количество гостей.');
  }
});

