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

//Sign in wrapper 
// const signWrapper = document.querySelector(".signin");

// Profile and Wallet section
const profile_btn = document.querySelector(".profile-box");
const walletWrapper = document.querySelector(".wallet-wrapper");

const addMoney_btn = document.querySelector(".wallet-add-money-btn")

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

// Profile event handling
profile_btn.onclick = (() => {
    dropDownWrapper.classList.toggle("hidden");
    overlay.classList.toggle("hidden");
});

// Overlay handling 
overlay.onclick = (() => {
    if (dropDownWrapper.classList.contains("hidden") === false) {
        dropDownWrapper.classList.add("hidden");
        overlay.classList.add("hidden");
    }
});


