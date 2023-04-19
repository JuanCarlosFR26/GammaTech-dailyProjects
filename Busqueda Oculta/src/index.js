const icon = document.querySelector('i');
const inputContainer = document.querySelector('.input-container');
const input = document.getElementById('input')

input.setAttribute('placeholder', 'Search...')

icon.addEventListener('click', () => {
    inputContainer.classList.toggle('close');
    if(inputContainer.classList.contains('close')) {
        input.removeAttribute('placeholder')
    } else {
        input.setAttribute('placeholder', 'Search...')
    }
})