let secBar = document.getElementById("secondary-bar");
let secBarY = 60;
let scrY0 = window.scrollY;
window.onscroll = function() {
    let scrY = window.scrollY;
    if (scrY > window.visualViewport.height) {
        secBar.style.position = "fixed";
        secBar.style.top = "60px";
        if (scrY > scrY0) {
            secBarY = Math.max(10, secBarY -= (scrY-scrY0)/5);
        } else {
            secBarY = Math.min(60, secBarY -= (scrY-scrY0)/5);
        }
        secBar.style.top = secBarY+"px";
    } else {
        secBar.style.position = "absolute";
        secBar.style.top = "100vh";
    }
    scrY0 = scrY;
}