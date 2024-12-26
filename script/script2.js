const navlinkEls = document.querySelectorAll('.nav_link');
const windowPathname = window.location.pathname;
const navbarMenu = document.querySelector(".navbar .links");
const menuBtn = document.querySelector(".menu-btn");
const hideMenuBtn = navbarMenu.querySelector(".close-btn");
const showPopupBtn = document.querySelector(".login-btn");
const formPopup = document.querySelector(".form-popup");
const hidePopupBtn = document.querySelector(".form-popup .close-btn");
const loginSignupLink = document.querySelectorAll(".form-box .bottom-link a");


navlinkEls.forEach(navlinkEl => {
    const navlinkPathname = new URL(navlinkEl.href).pathname;

    if ((windowPathname === navlinkPathname) || (windowPathname ==='/myTest.html' && navlinkPathname === '/')){
        navlinkEl.classList.add('active');
    }
});
//Afficher form popup
showPopupBtn.addEventListener("click", () =>{
    document.body.classList.toggle("show-popup")
});

// ...
menuBtn.addEventListener("click",() =>{
    navbarMenu.classList.toggle("show-menu");

});
//...
hideMenuBtn.addEventListener("click",() => menuBtn.click());
//Hide form popup
hidePopupBtn.addEventListener("click", ()=>showPopupBtn.click());

// ...
loginSignupLink.forEach(link => {
    link.addEventListener("click",(e) =>{
       e.preventDefault();
       formPopup.classList[link.id === "signup-link" ? 'add' : 'remove']("show-signup");
    });
});
