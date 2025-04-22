let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let secure = document.querySelector(".secure");

menu.onclick = () => {
    menu.classList.toggle("bx-x");
    navbar.classList.toggle("active");
    secure.classList.toggle("active");
}

// window.onscroll = () => {
//     menu.classList.remove("bx-x");
//     navbar.classList.remove("active");
//     secure.classList.remove("active");
// }