// Получаем элементы слайдера и карточек отзывов
const testimonialSlider = document.querySelector('.testimonial-slider');
const testimonialCards = document.querySelectorAll('.testimonial-card');

// Инициализируем текущей индекс отзыва
let currentIndex = 0;

// Функция для отображения следующего отзыва
function showNextTestimonial() {
    // Увеличиваем индекс текущего элемента и обрабатываем случай, выхода за пределы количества элементов
    currentIndex = (currentIndex + 1) % testimonialCards.length;
    
    // Прокручиваем контейнер testimonialSlider к новому элементу
    testimonialSlider.scrollTo({
        // Вычисляем положение нового элемента на основе его ширины
        left: currentIndex * testimonialCards.offsetWidth,
        // Добавляем плавную анимацию прокрутки
        behavior: 'smooth'
    });
}