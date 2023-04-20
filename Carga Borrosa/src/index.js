let charge = document.querySelector('.countNumber');

function counter() {
    for(let i = 0; i <= 100; i++) {
        console.log(i);
        charge.innerText = i;
    }
}

setTimeout(() => {
    counter();
}, 1000)

clearTimeout(counter());

// setInterval(counter, 1000)

