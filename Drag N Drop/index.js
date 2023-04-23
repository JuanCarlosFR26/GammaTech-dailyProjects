let dragged;

const element = document.getElementById('puzzle');
const cajas = document.querySelectorAll('.caja');

element.addEventListener('drag', e => {
    console.log('drag');
})

element.addEventListener('dragstart', e => {
    dragged = e.target
    e.target.classList.add('dragged');
})

element.addEventListener('dragend', e => {
    e.target.classList.remove('dragged');
})


cajas.forEach(caja => {
    caja.addEventListener('dragover', e => {
        e.preventDefault();
    }, false)

    caja.addEventListener('dragenter', e => {
        if(e.target.classList.contains('caja')) {
            e.target.classList.add('cajaEmpty');
        }
    })

    caja.addEventListener('dragleave', e => {
        if(e.target.classList.contains('caja')) {
            e.target.classList.remove('cajaEmpty');
        }
    })

    caja.addEventListener('drop', e => {
        e.preventDefault()

        if(e.target.classList.contains('caja')) {
            e.target.classList.remove('cajaEmpty');
            e.target.appendChild(dragged)
        }
    })

})