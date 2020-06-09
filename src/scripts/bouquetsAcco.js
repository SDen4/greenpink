const moveLeft = document.querySelector("#button_left");
const moveRight = document.querySelector("#button_right");
const bouquetsNum = document.querySelectorAll(".bouquets__acco_item");
const line = document.querySelector("#line");
let move = 0;

moveRight.addEventListener('click', () => {
    if(move > -bouquetsNum.length+1) {
        move -= 1;
        line.style.left = `${move*100}%`;
    };
});

moveLeft.addEventListener('click', () => {
    if(move<0) {
        move += 1;
        line.style.left = `${move*100}%`;
    };
});