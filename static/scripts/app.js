const letters = "abcdefghijklmnopqrstuvwxyz";

// document.querySelector("h1").onmouseover = (ele) => {
let ele = document.querySelector("h1");
let value = ele.innerText;
let iterations = 0;
ele.innerText = "";
const interval = setInterval(() => {
    
    let letterIntervalCount = 0;
    const letterInterval = setInterval(() => {
        if (letterIntervalCount >= 5 || iterations >= 11) {
            clearInterval(letterInterval);
        }
        else {
            ele.innerText = value.slice(0, iterations) + letters[Math.floor(Math.random() * 26)];
        }
        letterIntervalCount++;
    }, 30);
    
    ele.innerText = value.slice(0, iterations) + value[iterations];
    
    if(iterations >= value.length - 1) { clearInterval(interval); console.log(iterations)}
    iterations++;
}, 100);