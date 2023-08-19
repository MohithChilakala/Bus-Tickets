const loginForm = document.querySelector("form.login");
const loginText = document.querySelector(".title-text .login");
const signupBtn = document.querySelector("label.signup");
const loginBtn = document.querySelector("label.login");
const signupLink = document.querySelector("form .signup-link a");
const loginLink = document.querySelector("form .login-link a");

signupBtn.onclick = (()=>{
    loginText.style.marginLeft = "-50%";
    loginForm.style.marginLeft = "-50%";
});

loginBtn.onclick = (()=>{
    loginText.style.marginLeft = "0%";
    loginForm.style.marginLeft = "0%";
});

signupLink.onclick = (()=>{
    signupBtn.click();
    return false;
});

loginLink.onclick = (()=>{
    loginBtn.click();
    return false;
});

const overlay = document.querySelector(".overlay");

const signin_btn = document.querySelector(".signin-btn");
const signin = document.querySelector(".signin");
signin_btn.onclick = (()=>{
    signin.style.display = "block";
    overlay.classList.remove("hidden");
});

const close_btn = document.querySelector(".wrapper .close-div");
close_btn.onclick = (()=>{
    signin.style.display = "none";
    overlay.classList.add("hidden");
});


