const openWeb = document.getElementById('open');
const closeWeb = document.getElementById('close')
const containerWeb = document.querySelector('.container');


openWeb.addEventListener('click', () => {
    containerWeb.classList.add('show');
})

closeWeb.addEventListener('click', () => {
    containerWeb.classList.remove('show')
})