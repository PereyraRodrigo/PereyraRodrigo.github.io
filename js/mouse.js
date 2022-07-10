"use strict";

const cursor = document.querySelector('.cursor');
window.addEventListener('mousemove', mouseMoveHandler);
window.addEventListener('mousedown', mouseDownHandler);
window.addEventListener('mouseup', mouseUpHandler);

function mouseMoveHandler(e) {
    cursor.style.left = e.clientX - cursor.offsetWidth / 2 + "px";
    cursor.style.top = e.clientY - cursor.offsetHeight / 2 + "px";
    cursor.style.opacity = 1;
}

function mouseUpHandler(e) {
    cursor.style.transform = "scale(1)";
}

function mouseDownHandler() {
    cursor.style.transform = "scale(1.3)";
}