const tokitoDiv = document.querySelector('.tokitoContainer');
const mitsuriDiv = document.querySelector('.mitsuriContainer');
const buttonTokito = document.querySelector('.tokitoContainer button');
const buttonMitsuri = document.querySelector('.mitsuriContainer button');

tokitoDiv.addEventListener('mouseenter', () => {
    tokitoDiv.style.width = '90%'
    console.log('Hola')
})

tokitoDiv.addEventListener('mouseout', () => {
    tokitoDiv.style.width = '50%'
    console.log('Hola')
})

mitsuriDiv.addEventListener('mouseenter', () => {
    mitsuriDiv.style.width = '90%'
    console.log('Hola')
})

mitsuriDiv.addEventListener('mouseout', () => {
    mitsuriDiv.style.width = '50%'
    console.log('Hola')
})

