﻿
document.addEventListener('DOMContentLoaded', function () {
    Ссылки: 2
    function hiddenOpen_Closeclick() {
        let x = document.querySelector(".container-login-registration");
        if (x.style.display == "none") {
            x.style.display = "grid";
        }
        else {
            x.style.display = "none";
        }
    }
    document.getElementById("click-to-hide").addEventListener("click", hiddenOpen_Closeclick);
    document.querySelector(".overlay").addEventListener("click", hiddenOpen_Closeclick);

    const signInBtn = document.querySelector('.signin-btn');
    const signUpBtn = document.querySelector('.signup-btn');
    const formBox = document.querySelector('.form-box');
    const block = document.querySelector('.block');
    if (signInBtn && signUpBtn) {
        Ссылки: 3
        signUpBtn.addEventListener('click', function () {
            formBox.classList.add('active'); block.classList.add('active');
        });
        Ссылки: 3
        signInBtn.addEventListener('click', function () {
            formBox.classList.remove('active');
            block.classList.remove('active');
        });
    }
})