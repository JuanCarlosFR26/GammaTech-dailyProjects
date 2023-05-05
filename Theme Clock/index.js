const textHour = document.getElementById('numbers');
const textDate = document.getElementById('date');
const dayCircle = document.createElement('span');
const dark = document.querySelector('button');

dayCircle.classList.add('spanCircle')

const date = new Date();
let day = date.getDay();
let month = date.getMonth();
let hour = date.getHours();
let minute = date.getMinutes();
let second = date.getSeconds();
let dayMonth = date.getDate();

function writeDate() {
    let hourStr = hour < 10 ? '0' + hour : hour;
    let minuteStr = minute < 10 ? '0' + minute : minute;
    let pmAm = hour >= 12 ? pm = 'PM' : pm = 'AM';

    return `${hourStr}:${minuteStr} ${pmAm}`
}

function week() {
    if(day === 0) {
        return 'Sun';
    }

    if(day === 1) {
        return 'Mon';
    }

    if(day === 2) {
        return 'Tues';
    }

    if(day === 3) {
        return 'Wed';
    }

    if(day === 4) {
        return 'Thur';
    }

    if(day === 5) {
        return 'Fri';
    }

    if(day === 6) {
        return 'Sat';
    }
}

function writeMonth() {
    if(month === 0) {
        return 'Jan'
    }

    if(month === 1) {
        return 'Feb'
    }

    if(month === 2) {
        return 'Mar'
    }

    if(month === 3) {
        return 'Apr'
    }

    if(month === 4) {
        return 'May'
    }

    if(month === 5) {
        return 'Jun'
    }

    if(month === 6) {
        return 'Jul'
    }

    if(month === 7) {
        return 'Aug'
    }

    if(month === 8) {
        return 'Sept'
    }

    if(month === 9) {
        return 'Oct'
    }

    if(month === 10) {
        return 'Nov'
    }

    if(month === 11) {
        return 'Dec'
    }
}

dayCircle.innerText = dayMonth
textHour.innerText = writeDate();
textDate.innerText = `${week()}, ${writeMonth()} `;
textDate.appendChild(dayCircle)

const moveClock = () => {

    const date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();


    const scale = (num, in_min, in_max, out_min, out_max) => {
        return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
    }

    const secondBar = document.querySelector('.second');
    const hourBar = document.querySelector('.hour')
    const minuteBar = document.querySelector('.minute');

    hourBar.style.transform = `translate(-50%, -100%) rotate(${scale(hour, 0, 11, 0, 360)}deg)`;
    minuteBar.style.transform = `translate(-50%, -100%) rotate(${scale(minute, 0, 59, 0, 360)}deg)`;
    secondBar.style.transform = `translate(-50%, -100%) rotate(${scale(second, 0, 59, 0, 360)}deg)`;


}

moveClock();

setInterval(moveClock, 1000);



dark.addEventListener('click', (e) => {
    const hourBar = document.querySelector('.hour')
    const minuteBar = document.querySelector('.minute');
    const html = document.querySelector('html');
    if(html.classList.contains('dark')) {
        html.classList.remove('dark')
        e.target.innerText = 'Dark Mode'
        hourBar.style.backgroundColor = '#000';
        minuteBar.style.backgroundColor = '#000';
        dayCircle.style.backgroundColor = '#000';
    } else {
        html.classList.add('dark');
        e.target.innerText = 'Light Mode';
        hourBar.style.backgroundColor = '#fff';
        minuteBar.style.backgroundColor = '#fff';
        dayCircle.style.backgroundColor = '#fff';
        e.target.style.backgroundColor = '#666'
    }
})

