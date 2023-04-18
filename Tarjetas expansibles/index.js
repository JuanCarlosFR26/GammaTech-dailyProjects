const imgs = document.querySelectorAll('.img-container');
const titles = document.querySelectorAll('h1');

imgs.forEach(img => {
    img.addEventListener('click', () => {
        removeClase();
        img.classList.add('open');
    })
})

function removeClase() {
    imgs.forEach(img => {
        img.classList.remove('open');
    })
}