



const loader = () => {
    const letters = "abcdefghijklmnopqrstuvwxyz";
    let ele = document.querySelector(".loader-text");
    $(ele).css("opacity", "1");
    let value = ele.innerText;
    let iterations = 0;
    ele.innerText = "";
    const interval = setInterval(() => {
        
        let letterIntervalCount = 0;
        const letterInterval = setInterval(() => {
            if (letterIntervalCount >= 3 || iterations >= 11) {
                clearInterval(letterInterval);
            }
            else {
                ele.innerText = value.slice(0, iterations) + letters[Math.floor(Math.random() * 26)];
            }
            letterIntervalCount++;
        }, 35);
        
        ele.innerText = value.slice(0, iterations) + value[iterations];
        
        if(iterations >= value.length - 1) { clearInterval(interval); loaderWindow(ele)}
        iterations++;
    }, 100);

    const loaderWindow = (ele) => {
        setTimeout(() => {
            $(ele).css("transition", "opacity 0.25s ease-out");
            $(ele).css("opacity", "0");
            $(".loader-bg").css("transition", "height 0.25s ease-out");
            $(".loader-bg").css("height", "0%")
        }, 180)
    }
}






document.onload = loader()