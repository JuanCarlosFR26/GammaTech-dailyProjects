const container = document.querySelector('.container');
const arrColors = ['red', 'blue', 'pink', 'orange', 'purple', 'green', 'crimson', 'gold', 'white'];


for(let i = 0; i <= 498; i++) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('div')
    container.appendChild(newDiv);

    newDiv.addEventListener('mouseover', e => {
        let randomColor = arrColors[Math.floor(Math.random() * arrColors.length)]
        e.target.style.backgroundColor = randomColor;
        e.target.style.transition = 'none'
        e.target.style.boxShadow = '0 0 30px rgba(255, 255, 255, 0.5)'
    })

    newDiv.addEventListener('mouseleave', e => {
        e.target.style.backgroundColor = '#1d1d1d';
        e.target.style.transition = 'all 1.3s'
        e.target.style.boxShadow = 'none'
    })
}