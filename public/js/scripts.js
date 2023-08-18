function scrollMonitor() {
    let scrollPosition = window.scrollY;
    let scrollNavbar = document.getElementById('scrollNavbar');
    if (scrollPosition >= 450) {
        scrollNavbar.style.top = "0px";
    }else{
        scrollNavbar.style.top = "-76px";
    };
};

let pagePosition = window.addEventListener("scroll", scrollMonitor);
