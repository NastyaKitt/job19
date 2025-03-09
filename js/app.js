function setCursorPosition(pos, e) {
    e.focus();
    if (e.setSelectionRange) {
        e.setSelectionRange(pos, pos);
    } else if (e.createTextRange) {
        var range = e.createTextRange();
        range.collapse(true);
        range.moveEnd("character", pos);
        range.moveStart("character", pos);
        range.select();
    }
}

function mask(e) {
    var matrix = this.placeholder, // .defaultValue
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, "");
    
    def.length >= val.length && (val = def);
    matrix = matrix.replace(/[_\d]/g, function(a) {
        return val.charAt(i++) || "_";
    });
    
    this.value = matrix;
    i = matrix.lastIndexOf(val.substr(-1));
    i < matrix.length && matrix != this.placeholder ? i++ : i = matrix.indexOf("_");
    setCursorPosition(i, this);
}

window.addEventListener("DOMContentLoaded", function() {
    // Изменяем здесь, если это нужно
    var input = document.querySelector("#tel1");
    
    input.addEventListener("input", mask, false);
    input.focus();
    setCursorPosition(3, input);
});

// 

let currentIndex = 0;
const slides = document.querySelectorAll('.items');
const totalSlides = slides.length;

function showSlides(index) {
    const firstSlideIndex = index;
    const secondSlideIndex = (index + 1) % totalSlides; // Второй слайд

    slides.forEach((slide, i) => {
        slide.classList.remove('show');
        if (i === firstSlideIndex || i === secondSlideIndex) {
            slide.classList.add('show');
        }
    });
}

function nextSlides() {
    currentIndex = (currentIndex + 1) % totalSlides; // Переход к следующему слайду
    showSlides(currentIndex);
}

showSlides(currentIndex); // Показываем первые два слайда
setInterval(nextSlides, 3000); // Смена слайдов каждые 3 секунды


// 

// Используйте корректный селектор для кнопок
const buttons = document.querySelectorAll('.tyda'); // Пример: если ваши кнопки имеют класс tyda
const target = document.getElementById('targetElement');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const targetPosition = target.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = targetPosition - (window.innerHeight / 2) + (target.clientHeight / 2);

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth' // Плавная прокрутка
        });
    });
});

// 

let callPolit = document.getElementById('callPolit')
let politicWin = document.getElementById('politicWin')
let clsPoloit = document.getElementById('clsPoloit')

callPolit.addEventListener('click', function(){
    politicWin.classList.add('show')
})
clsPoloit.addEventListener('click', function(){
    politicWin.classList.remove('show')
})