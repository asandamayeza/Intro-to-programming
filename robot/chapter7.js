"use strict";
/*document.getElementById("lefteye").style.backgroundColor = "purple";
document.getElementById("head").style.transform = "rotate(15deg)";

// Put a 2‐pixel‐wide, solid black border around his body.
document.getElementById("body").style.border = "2px black solid";

// Round the corners of his mouth. 
document.getElementById("mouth").style.borderRadius = "4px";

// Put yellow dots around his right eye.
document.getElementById("righteye").style.border =
    "4px yellow dotted";

// Change his left arm’s color.
document.getElementById("leftarm").style.backgroundColor =
    "#FF00FF";

// Change the text color.
document.getElementById("body").style.color = "#FF0000";

// Give Douglas hair.
document.getElementById("head").style.borderTop =
    "5px black solid";

// my turn 
// head tilt to the the our side
document.getElementById("head").style.transform = "rotate(-30deg)";

//make nose round
document.getElementById("nose").style.borderRadius = "50%";

// right arm green
document.getElementById("rightarm").style.backgroundColor = "#00FF00";

//make lips pinks
document.getElementById("mouth").style.backgroundColor = "#FFD3E9"; */

let rightEye = document.getElementById("righteye");
let leftEye = document.getElementById("lefteye");
let leftArm = document.getElementById("leftarm");
let rightArm = document.getElementById("rightarm");
let nose = document.getElementById("nose");

rightEye.addEventListener("click", moveUpDown);
leftEye.addEventListener("click", moveUpDown);
leftArm.addEventListener("click", moveRightLeft);
rightArm.addEventListener("click", moveLeftRight);
nose.addEventListener("click",moveUpDownNose);


alert("click on my body parts and watch me dance!")
function moveUpDown(e) {
    let robotPart = e.target;
    let top = 0;
    let id = setInterval(frame, 10) // draw every 10ms
    function frame() {
        robotPart.style.top = top + '%';
        top++;
        if (top === 20) {
            clearInterval(id);
        }
    }
}

function moveRightLeft(e) {
    let robotPart = e.target;
    let left = 0;
    let id = setInterval(frame, 10) // draw every 10ms
    function frame() {
        robotPart.style.left = left + '%';
        left++;
        if (left === 70) {
            clearInterval(id);
        }
    }
}

function moveUpDownNose(e) {
    let robotPart = e.target;
    let top = 45;
    let id = setInterval(frame, 100) // draw every 10ms
    function frame() {
        robotPart.style.top = top + '%';
        top++;
        if (top === 50) {
            clearInterval(id);
        }
    }
}
function moveLeftRight(e) {
    let robotPart = e.target;
    let left = 0;
    let id = setInterval(frame, 10) // draw every 10ms
    function frame() {
        robotPart.style.left = left + '%';
        left++;
        if (left === 21) {
            clearInterval(id);
        }
    }
}

function changeToSmile() {
    let mouth = document.getElementById("mouth");
    mouth.classList.add("smile");
}
function changeToMouth() {
    let mouth =document.getElementById("mouth");
    mouth.classList.remove("smile");
}
