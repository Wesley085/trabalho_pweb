let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick  = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active')
}
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

// menu.addEventListener("click", function() {
//     navbar.classList.toggle("active");
// });

// window.onscroll = () => {
//     navbar.classList.remove("active");
// }

