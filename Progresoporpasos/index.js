// const containers = document.querySelector('.container');
// const rounds = document.querySelectorAll('.round');
// const dividers = document.querySelectorAll('.divider');
// const prevButton = document.querySelector('#prev');
// const nextButton = document.querySelector('#next');



const colorChange = document.querySelector('#color-change')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const rounds = document.querySelectorAll('.round')

let activeRound = 1

next.addEventListener('click', () => {
    activeRound++

    if(activeRound > rounds.length) {
        activeRound = rounds.length
    }

    update()
})

prev.addEventListener('click', () => {
    activeRound--

    if(activeRound < 1) {
        activeRound = 1
    }

    update()
})

function update() {
    rounds.forEach((round, i) => {
        if(i < activeRound) {
            round.classList.add('active')
        } else {
            round.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')

    colorChange.style.width = (actives.length - 1) / (rounds.length - 1) * 100 + '%'

    if(activeRound === 1) {
        prev.disabled = true
    } else if(activeRound === rounds.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}