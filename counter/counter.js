let count = 0;

const clickSound = new Audio("mouse.mp3");

function playSound() {
    clickSound.currentTime = 0;
    clickSound.play().catch(() => {});
}

window.onload = function () {
    let saved = localStorage.getItem("counter");

    if (saved !== null) {
        count = parseInt(saved);
    }

    updateDisplay();
};

function updateDisplay() {
    document.getElementById("counter").innerText = count;

    let status = document.getElementById("status");

    if (count > 0) status.innerText = "Positive";
    else if (count < 0) status.innerText = "Negative";
    else status.innerText = "Zero";

    localStorage.setItem("counter", count);
}

function increment() {
    count++;
    playSound();
    updateDisplay();
}

function decrement() {
    if (count > 0) {
        count--;
    }
    playSound();
    updateDisplay();
}

function reset() {
    count = 0;
    playSound();
    updateDisplay();
}