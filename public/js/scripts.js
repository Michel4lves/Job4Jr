function scrollMonitor() {
    let scrollPosition = window.scrollY;
    let scrollNavbar = document.getElementById('scrollNavbar');

    if (scrollNavbar) {

        if (scrollPosition >= 370) {
            scrollNavbar.style.top = "0px";
        }else{
            scrollNavbar.style.top = "-76px";
        };
    }

};

let pagePosition = window.addEventListener("scroll", scrollMonitor);
