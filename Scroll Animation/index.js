const divs = document.querySelectorAll('.containerBox');

window.addEventListener('scroll', () => {
    const trigg = window.innerHeight / 5 * 4;

    divs.forEach(div => {
        const divTop = div.getBoundingClientRect().top

        if(divTop < trigg) {
            div.classList.add('bringCenter')
        } else {
            div.classList.remove('bringCenter')
        }
    })
})