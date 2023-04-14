const img = document.querySelectorAll('.img-container');

img.forEach(image => {
    image.addEventListener('click', () => {
        if(image.style.flexGrow !== '1') {
            console.log(image);
            const parent = image.parentElement;
            const children = parent.children
            for(let i = 0; i < children.length; i++) {
                if(children[i].style.flexGrow === '1') {
                    children[i].style.flexGrow = '0'
                }
            }
            image.style.flexGrow = '1'
        }
    })
})