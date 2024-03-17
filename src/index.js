let scrY0 = window.scrollY;
let scrY = window.scrollY;
let secBar = document.getElementById("secondary-bar");
let secBarY = 60; // px
window.onscroll = function() {
    let vh = window.visualViewport.height;
    scrY = window.scrollY;
    let dScrY = scrY-scrY0;

    // secondary bar
    if (scrY > vh) {
        secBar.style.position = "fixed";
        secBar.style.top = "60px";
        if (dScrY > 0) {
            secBarY = Math.max(10, secBarY -= dScrY/5);
        } else {
            secBarY = Math.min(60, secBarY -= dScrY/5);
        }
        secBar.style.top = secBarY+"px";
    } else {
        secBar.style.position = "absolute";
        secBar.style.top = "100vh";
    }

    scrY0 = scrY;
}