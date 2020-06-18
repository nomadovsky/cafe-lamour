const nav = document.querySelector('nav');
const menuBtn = document.querySelector("nav .menu-btn");


//navigation
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.documentElement.scrollTop > 0) {
        nav.classList.add("nav-opacity");


    } else {
        nav.classList.remove("nav-opacity");

    }
}

//menu
menuBtn.addEventListener("click", function () {
    document.querySelector(".modal-wrap").classList.add('active');
    document.querySelector("body").classList.add('blur');
})

document.querySelector('.modal-exit').addEventListener('click', function () {
    document.querySelector(".modal-wrap").classList.remove('active');
    document.querySelector("body").classList.remove('blur');
})

//banner
const banner_img = ['img/img_1.jpg', 'img/img_2.jpg', 'img/img_3.jpg']
const banner_html = document.querySelector(".banner-area");

let activeBanner = 0;

function changeBanner() {
    activeBanner++
    if (activeBanner == banner_img.length) {
        activeBanner = 0;
    }

    banner_html.style.backgroundImage = 'url(' + banner_img[activeBanner] + ')';
}

setInterval(changeBanner, 5000)