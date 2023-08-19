const main = document.querySelector("main");

const logo_btn = document.querySelector("#logo-btn");
const home_btn = document.querySelector(".home-btn");
const about_btn = document.querySelector(".about-btn");
const services_btn = document.querySelector(".services-btn");
const features_btn = document.querySelector(".features-btn");

const home = document.querySelector(".home");
const about = document.querySelector(".about");
const services = document.querySelector(".services");
const features = document.querySelector(".features");

// Profile and Wallet section
const profile_btn = document.querySelector(".profile-box");

// Drop Down section
const dropDownWrapper = document.querySelector(".drop-down-wrapper");

logo_btn.onclick = (() => {
    var pos = home.offsetTop - home.offsetTop;
    main.scrollTop = pos;
    console.log(pos);
});

home_btn.onclick = (() => {
    var pos = home.offsetTop - home.offsetTop;
    main.scrollTop = pos;
    console.log(pos);
});

services_btn.onclick = (() => {
    main.scrollTop = services.offsetTop - home.offsetTop;
});

features_btn.onclick = (() => {
    main.scrollTop = features.offsetTop - home.offsetTop;
});

about_btn.onclick = (() => {
    main.scrollTop = about.offsetTop - home.offsetTop;
});

// Profile Wallet event handling
profile_btn.onclick = (() => {
    dropDownWrapper.classList.toggle("hidden");
    overlay.classList.toggle("hidden");
})

VanillaTilt.init(document.querySelectorAll(".profile-box"), {
    max: 10,
    speed: 400,
    glare: true,
});