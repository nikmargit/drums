var buttons = Array.from(document.querySelectorAll(".keys"));

function playSound(e) {
    var key =
        document.querySelector("button[data-key='" + e.key + "'") ||
        document.querySelector("button[data-key='" + this.innerHTML + "'");
    var sound =
        document.querySelector("audio[data-key='" + e.key + "'") ||
        document.querySelector("audio[data-key='" + this.innerHTML + "'");
    if (!sound) return;
    sound.currentTime = 0;
    sound.play();
    key.classList.add('big');
}

function removeClass() {
    this.classList.remove("big");
}

buttons.forEach(function (button) { button.addEventListener("click", playSound) });
buttons.forEach(function (button) { button.addEventListener("transitionend", removeClass) });
window.addEventListener("keydown", playSound);
