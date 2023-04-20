let charge = document.querySelector('.countNumber');

let count = 0;
let interval = setInterval(function() {
    count += 1;
    if(count > 100) {
        count = 100;
        // clearInterval(interval)
    }

    charge.innerText = count;
}, 20)

