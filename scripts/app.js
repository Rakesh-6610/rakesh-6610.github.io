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
            $(ele).fadeOut("fast")
            $(".loader-bg").slideUp(350, () => {
                $(".loader-bg").css("display", "none");
                $(".spinner").animate({
                    scale: 0
                }, () => {
                    $(".spinner").css("display", "none");
                    $(".loader").css("display", "none");
                    $(".social-icons .line").animate({
                        height: "80px"
                    }, () => {
                        $(".social-icons a:nth-child(4)").animate({
                            scale: 1
                        }, "fast" , () => {
                            $(".social-icons a:nth-child(3)").animate({
                                scale: 1
                            }, "fast" , () => {
                                $(".social-icons a:nth-child(2)").animate({
                                    scale: 1
                                }, "fast" , () => {
                                    $(".social-icons a:nth-child(1)").animate({
                                        scale: 1
                                    }, "fast")
                                })
                            })
                        })
                    })
                })
            })
        }, 180)
    }
}






$(document).ready(loader)