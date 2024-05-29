//your JS code here. If required.
const line = document.getElementById("line");
let angle = 0;
function rotate(){
    angle = (angle + 2) % 360; // Ensure angle stays within 0-359 degrees
    line.style.transform = `translate(-50%, 50%) rotate(${angle}deg)`;
    
}
setInterval(rotate,20);