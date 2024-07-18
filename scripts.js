// Este arquivo pode ser usado para funcionalidades interativas, como sliders, modais, etc.
// Por exemplo:

// Slider de imagens na seção de receitas em destaque
const slider = document.querySelector('.featured-recipes .container');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
});

slider.addEventListener('mouseup', () => {
    isDown = false;
});

slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3; // Velocidade de deslocamento do scroll
    slider.scrollLeft = scrollLeft - walk;
});
