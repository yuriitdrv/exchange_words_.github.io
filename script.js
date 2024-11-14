// script.js
document.addEventListener("DOMContentLoaded", () => {
    const loginSection = document.getElementById("login");
    const registerSection = document.getElementById("register");

    document.querySelector("a[href='#register']").addEventListener("click", (e) => {
        e.preventDefault();
        loginSection.style.display = "none";
        registerSection.style.display = "block";
    });

    document.querySelector("a[href='#login']").addEventListener("click", (e) => {
        e.preventDefault();
        registerSection.style.display = "none";
        loginSection.style.display = "block";
    });
});
