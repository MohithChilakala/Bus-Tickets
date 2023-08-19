const main = document.querySelector("main");

const home_btn = document.querySelector(".home-btn");
const about_btn = document.querySelector(".about-btn");
const services_btn = document.querySelector(".services-btn");
const features_btn = document.querySelector(".features-btn");

const home = document.querySelector(".home");
const about = document.querySelector(".about");
const services = document.querySelector(".services");
const features = document.querySelector(".features");

home_btn.onclick = (()=>{
    var pos = home.offsetTop - home.offsetTop;
    main.scrollTop = pos;
    console.log(pos);
});

services_btn.onclick = (()=>{
    main.scrollTop = services.offsetTop - home.offsetTop;
});

features_btn.onclick = (()=>{
    main.scrollTop = features.offsetTop - home.offsetTop;
});

about_btn.onclick = (()=>{
    main.scrollTop = about.offsetTop - home.offsetTop;
});